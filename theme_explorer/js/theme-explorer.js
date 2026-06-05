import { DOOR_LABELS, SET_LABELS, loadThemeData } from "./theme-data.js";
import { embedTextWithRetry, getEmbeddingStatus, initEmbeddingService } from "./theme-embeddings.js";
import {
  buildCoreLensInputs,
  buildEmbeddingInput,
  buildMicroLensInputs,
  buildWeightedCoreLensInputs,
  rankCandidatesByEmbedding,
  rankCandidatesByKeywordFallback,
  rankDiverseExploratoryFallback,
  rankResonanceWordsByEmbedding,
  rankResonanceWordsByKeywordFallback
} from "./theme-ranking.js";
import { buildSubmissionObject, buildThemeCard, makeId, titleCase } from "./theme-card.js";

const STORAGE_KEY = "bmbm_theme_explorer_session_v1";
const DEFAULT_MAX_ROUNDS = 3;
const CANDIDATE_COUNT = 6;
const RESONANCE_SETS = ["Image", "Symbol", "Emotion", "Place", "Value"];
const RESONANCE_WORDS_PER_SET = 10;

const rootDefault = document.querySelector("#theme-explorer-root");

const state = {
  mode: "standalone",
  root: rootDefault,
  screen: "intro",
  previousScreens: [],
  options: {},
  data: {
    vocabulary: [],
    vocabularyById: {},
    promptBank: null,
    loaded: false,
    error: null
  },
  embedding: {
    modelStatus: "idle",
    vocabularyStatus: "ready",
    error: null,
    rankedCandidateWords: [],
    rankingDebug: null
  },
  currentJourney: createEmptyJourney(),
  savedThemes: [],
  selectedThemeIds: [],
  submission: {
    commentsForMichele: "",
    exportedObject: null,
    copied: false
  }
};

function createEmptyJourney() {
  return {
    id: makeId("journey"),
    createdAt: new Date().toISOString(),
    status: "not-started",
    selectedDoor: null,
    initialPrompt: null,
    initialShortPrompt: null,
    initialDetailPrompt: null,
    initialShortAnswer: "",
    initialDetailAnswer: "",
    initialAnswer: "",
    roundsCompleted: 0,
    maxRounds: DEFAULT_MAX_ROUNDS,
    shownPromptIds: [],
    answeredPromptIds: [],
    shownWordIds: [],
    selectedWordIds: [],
    rejectedWordIds: [],
    skippedWordBatches: [],
    responses: [],
    currentCandidates: [],
    currentPrompt: null,
    currentSelectedWord: null,
    rankingDebug: null,
    resonanceOptionsBySet: {},
    resonanceSelections: {},
    themeNameOverride: "",
    userComments: ""
  };
}

export async function initThemeExplorer(options = {}) {
  state.options = options;
  state.mode = options.mode || "standalone";
  state.root = options.root || rootDefault;

  if (!state.root) {
    throw new Error("Theme Explorer needs a root element.");
  }

  restoreSession();
  renderLoading("Opening Theme Explorer…");

  try {
    const data = await loadThemeData({ dataBasePath: options.dataBasePath || "data/" });
    state.data = {
      vocabulary: data.vocabulary,
      vocabularyById: data.vocabularyById,
      promptBank: data.promptBank,
      loaded: true,
      error: null,
      metadata: data.metadata,
      embedding: data.embedding
    };
    state.currentJourney.vocabularyById = data.vocabularyById;

    render();

    warmEmbeddingModel();
  } catch (error) {
    state.data.error = error;
    renderError("The Theme Explorer data could not be loaded.", error.message);
  }
}

export function getThemeExplorerState() {
  return structuredCloneSafe({
    screen: state.screen,
    currentJourney: state.currentJourney,
    savedThemes: state.savedThemes,
    selectedThemeIds: state.selectedThemeIds,
    submission: state.submission,
    embedding: state.embedding
  });
}

export function getSelectedThemes() {
  const selectedIdSet = new Set(state.selectedThemeIds);
  return state.savedThemes
    .filter((theme) => selectedIdSet.has(theme.id))
    .map((theme) => theme.themeCard);
}

export function resetThemeExplorer() {
  state.screen = "intro";
  state.previousScreens = [];
  state.currentJourney = createEmptyJourney();
  state.currentJourney.vocabularyById = state.data.vocabularyById;
  state.savedThemes = [];
  state.selectedThemeIds = [];
  state.submission = {
    commentsForMichele: "",
    exportedObject: null,
    copied: false
  };
  persistSession();
  emitChange();
  render();
}

async function warmEmbeddingModel() {
  state.embedding.modelStatus = "loading";
  updateModelStatusOnly();

  try {
    await initEmbeddingService(state.options.embedding || {});
    state.embedding.modelStatus = getEmbeddingStatus().status;
    state.embedding.error = null;
  } catch (error) {
    state.embedding.modelStatus = "error";
    state.embedding.error = error.message || String(error);
    console.warn("Theme Explorer embedding failed during ranking; using fallback ranking.", error);
    console.warn("Theme Explorer embedding model failed to load; using keyword fallback.", error);
  }

  updateModelStatusOnly();
}

function navigate(screen) {
  if (state.screen !== screen) {
    state.previousScreens.push(state.screen);
  }
  state.screen = screen;
  persistSession();
  emitChange();
  render();
}

function goBack() {
  const previous = state.previousScreens.pop();
  if (previous) {
    state.screen = previous;
  } else {
    state.screen = "intro";
  }
  persistSession();
  emitChange();
  render();
}

function render() {
  if (!state.root) return;

  const screenHtml = {
    intro: renderIntro,
    door_select: renderDoorSelect,
    initial_short_prompt: renderInitialShortPrompt,
    initial_detail_prompt: renderInitialDetailPrompt,
    initial_prompt: renderInitialDetailPrompt,
    word_select: renderWordSelect,
    followup_prompt: renderFollowupPrompt,
    resonance_select: renderResonanceSelect,
    review: renderReview,
    saved_themes: renderSavedThemes,
    submit_themes: renderSubmitThemes,
    export_result: renderExportResult
  }[state.screen]?.() || renderIntro();

  state.root.innerHTML = screenHtml;
  bindEvents();
  updateAnswerHelper();
  updateModelStatusOnly();
}

function renderIntro() {
  return `
    <div class="theme-stack theme-intro-screen">
      <p class="eyebrow">Theme Explorer</p>
      <h1>Find a few words for the idea you want to bring in.</h1>
      <p class="subtext theme-large-copy">
        A low-pressure way to explore a memory, image, place, value, or idea before talking with Michele.
        You can skip, back up, restart, or choose a different path at any point.
      </p>
      ${renderModelStatus()}
      <div class="button-row">
        <button class="primary-btn" data-action="start">Start</button>
        ${state.savedThemes.length ? `<button class="secondary-btn" data-action="view-saved">Review saved themes</button>` : ""}
      </div>
    </div>
  `;
}

function renderDoorSelect() {
  const doors = Object.entries(DOOR_LABELS);
  return `
    <div class="theme-stack">
      ${renderProgress()}
      <p class="eyebrow">Starting point</p>
      <h1>What do you want to explore?</h1>
      <p class="subtext">Choose the closest starting point. It does not need to be exact.</p>
      <div class="theme-choice-grid theme-door-grid">
        ${doors.map(([door, label]) => `
          <button class="soft-choice theme-choice" data-action="choose-door" data-door="${escapeHtml(door)}">
            ${escapeHtml(label)}
          </button>
        `).join("")}
      </div>
      ${renderNavButtons({ back: true, restart: state.currentJourney.status !== "not-started" })}
    </div>
  `;
}

function renderInitialPrompt() {
  return renderInitialDetailPrompt();
}

function renderInitialShortPrompt() {
  const shortPrompt = state.currentJourney.initialShortPrompt || state.currentJourney.initialPrompt;
  return `
    <div class="theme-stack">
      ${renderProgress()}
      <p class="eyebrow">${escapeHtml(DOOR_LABELS[state.currentJourney.selectedDoor] || "Starting point")}</p>
      <h1>What are we exploring?</h1>

      <label class="theme-answer-block">
        <span class="theme-label">${escapeHtml(shortPrompt?.promptText || "In a few words, describe this.")}</span>
        <input class="soft-input theme-short-input" data-field="initial-short-answer" value="${escapeHtml(state.currentJourney.initialShortAnswer || "")}" placeholder="A few words is enough." />
      </label>

      <p class="answer-helper" data-answer-helper aria-live="polite"></p>
      <div class="button-row">
        <button class="primary-btn" data-action="continue-to-initial-detail">Continue</button>
      </div>
      ${renderNavButtons({ back: true, restart: true })}
    </div>
  `;
}

function renderInitialDetailPrompt() {
  const detailPrompt = state.currentJourney.initialDetailPrompt || state.currentJourney.initialPrompt;
  const doorLabel = DOOR_LABELS[state.currentJourney.selectedDoor] || "Starting point";
  const shortAnswer = (state.currentJourney.initialShortAnswer || "").trim();

  return `
    <div class="theme-stack">
      ${renderProgress()}
      <p class="eyebrow">${escapeHtml(doorLabel)}</p>
      <h1>${escapeHtml(shortAnswer || "Tell me a little more.")}</h1>

      <label class="theme-answer-block">
        <span class="theme-label">${escapeHtml(detailPrompt?.promptText || "Tell me a little more about it.")}</span>
        <textarea class="soft-input theme-textarea" data-field="initial-detail-answer" rows="6" placeholder="A word, phrase, or sentence is enough.">${escapeHtml(state.currentJourney.initialDetailAnswer || "")}</textarea>
      </label>

      <p class="answer-helper" data-answer-helper aria-live="polite"></p>
      <div class="button-row">
        <button class="primary-btn" data-action="submit-initial-answer">Continue</button>
        <button class="secondary-btn" data-action="different-initial-prompt">Try a different question</button>
      </div>
      ${renderNavButtons({ back: true, restart: true })}
    </div>
  `;
}

function renderWordSelect() {
  const candidates = state.currentJourney.currentCandidates || [];
  const isLoading = state.embedding.rankingStatus === "loading";

  return `
    <div class="theme-stack">
      ${renderProgress()}
      <p class="eyebrow">Choose a word</p>
      <h1>Which word feels worth exploring?</h1>
      <p class="subtext">Choose the word that gives you the clearest next direction. It does not have to be the closest match.</p>
      ${renderModelStatus()}
      ${isLoading ? renderThinkingCard() : ""}
      ${!isLoading && candidates.length ? `
        <div class="theme-choice-grid theme-word-grid">
          ${candidates.map((item) => renderWordChoice(item)).join("")}
        </div>
      ` : ""}
      ${!isLoading && !candidates.length ? `
        <div class="theme-soft-panel">
          <p>No words are ready yet.</p>
          <button class="secondary-btn" data-action="load-candidates">Find words</button>
        </div>
      ` : ""}
      <div class="button-row">
        <button class="secondary-btn" data-action="different-path" ${isLoading ? "disabled" : ""}>Show a different path</button>
      </div>
      ${renderNavButtons({ back: true, restart: true })}
    </div>
  `;
}

function renderWordChoice(item) {
  return `
    <button class="soft-choice theme-choice theme-word-choice" data-action="choose-word" data-word-id="${escapeHtml(item.id)}">
      <span class="theme-word-label">${escapeHtml(getWordDisplay(item))}</span>
    </button>
  `;
}

function renderFollowupPrompt() {
  const prompt = state.currentJourney.currentPrompt;
  const word = state.currentJourney.currentSelectedWord;
  const display = getWordDisplay(word);

  return `
    <div class="theme-stack">
      ${renderProgress()}
      <p class="eyebrow">Theme word</p>
      <div class="theme-followup-heading">
        ${renderJourneyPromptContext()}
        <p class="theme-topic-line">Use “${escapeHtml(display)}” as a starting point.</p>
        <h1>${escapeHtml(prompt?.promptText || `What does “${display}” make you think of?`)}</h1>
      </div>
      ${renderEarlierAnswersToggle()}
      <label class="theme-answer-block">
        <span class="sr-only">Your answer</span>
        <textarea class="soft-input theme-textarea" data-field="followup-answer" rows="6" placeholder="A word, phrase, or sentence is enough.">${escapeHtml(prompt?.draftAnswer || "")}</textarea>
      </label>
      <p class="answer-helper" data-answer-helper aria-live="polite"></p>
      <div class="button-row">
        <button class="primary-btn" data-action="submit-followup-answer">Continue</button>
      </div>
      ${renderNavButtons({ back: true, restart: true })}
    </div>
  `;
}

function renderJourneyPromptContext() {
  const doorLabel = DOOR_LABELS[state.currentJourney.selectedDoor] || "A theme";
  const shortAnswer = (state.currentJourney.initialShortAnswer || state.currentJourney.initialAnswer || "").trim();
  const selectedWords = (state.currentJourney.selectedWordIds || [])
    .map((id) => state.data.vocabularyById?.[id])
    .filter(Boolean)
    .map((item) => getWordDisplay(item));

  return `
    <section class="theme-journey-context" aria-label="Theme journey so far">
      <div>
        <p class="theme-context-kicker">Exploring</p>
        <p class="theme-context-main">${escapeHtml(doorLabel)}${shortAnswer ? `: ${escapeHtml(shortAnswer)}` : ""}</p>
      </div>
      ${selectedWords.length ? `
        <div>
          <p class="theme-context-kicker">Words so far</p>
          <p class="theme-context-main theme-word-trail">${selectedWords.map((item) => escapeHtml(item)).join(" · ")}</p>
        </div>
      ` : ""}
    </section>
  `;
}

function renderEarlierAnswersToggle() {
  const followupResponses = (state.currentJourney.responses || [])
    .filter((response) => response.type === "followup" && response.answer);

  if (!followupResponses.length) return "";

  return `
    <details class="theme-earlier-answers">
      <summary>Show earlier answers</summary>
      <div class="theme-earlier-answer-list">
        ${followupResponses.map((response) => `
          <article class="theme-earlier-answer">
            <h2>${escapeHtml(titleCase(response.display || response.word || "Theme word"))}</h2>
            <p>${escapeHtml(response.answer)}</p>
          </article>
        `).join("")}
      </div>
    </details>
  `;
}

function renderResonanceSelect() {
  const groups = state.currentJourney.resonanceOptionsBySet || {};
  const hasGroups = RESONANCE_SETS.some((set) => (groups[set] || []).length);
  const selectedCount = Object.keys(state.currentJourney.resonanceSelections || {}).length;

  return `
    <div class="theme-stack">
      ${renderProgress(true)}
      <p class="eyebrow">Final words</p>
      <h1>Do any of these words resonate?</h1>
      <p class="subtext">Pick any words that feel like part of this theme. You can choose as many or as few as you want.</p>
      ${hasGroups ? `
        <div class="theme-resonance-groups">
          ${RESONANCE_SETS.map((set) => renderResonanceGroup(set, groups[set] || [])).join("")}
        </div>
      ` : `
        <div class="theme-soft-panel">
          <p>No extra words are ready yet.</p>
        </div>
      `}
      <div class="button-row">
        <button class="primary-btn" data-action="continue-to-review">Continue</button>
        <button class="secondary-btn" data-action="refresh-resonance-words">Show a different mix</button>
      </div>
      <p class="theme-model-status">${selectedCount ? `${selectedCount} selected.` : "You can also skip this and keep going."}</p>
      ${renderNavButtons({ back: true, restart: true })}
    </div>
  `;
}

function renderResonanceGroup(set, items) {
  if (!items.length) return "";

  return `
    <section class="theme-resonance-group">
      <h2>${escapeHtml(SET_LABELS[set] || set)}</h2>
      <div class="theme-chip-grid">
        ${items.map((item) => {
          const selected = Boolean(state.currentJourney.resonanceSelections?.[item.id]);
          return `
            <button
              class="theme-chip ${selected ? "is-selected" : ""}"
              data-action="toggle-resonance-word"
              data-word-id="${escapeHtml(item.id)}"
              data-set="${escapeHtml(set)}"
              aria-pressed="${selected ? "true" : "false"}"
              type="button"
            >
              ${escapeHtml(getWordDisplay(item))}
            </button>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderReview() {
  const themeCard = buildThemeCard(state.currentJourney, state.data.vocabularyById);
  return `
    <div class="theme-stack">
      ${renderProgress(true)}
      <p class="eyebrow">Theme Card</p>
      <label class="theme-answer-block theme-title-edit-block">
        <span class="theme-label">Theme name</span>
        <input class="soft-input theme-title-input" data-field="theme-name" value="${escapeHtml(themeCard.workingThemeName)}" />
      </label>
      <section class="theme-soft-panel theme-final-path-panel" aria-label="Theme path">
        <p class="theme-context-kicker">Path</p>
        <p class="theme-path">${escapeHtml(themeCard.path.join(" → "))}</p>
      </section>
      ${renderThemeCard(themeCard, { hidePathAndSelectedWords: true })}
      <label class="theme-answer-block">
        <span class="theme-label">Optional note for Michele</span>
        <textarea class="soft-input theme-textarea" data-field="journey-comments" rows="4" placeholder="Anything to add, clarify, or keep in mind?">${escapeHtml(state.currentJourney.userComments || "")}</textarea>
      </label>
      <div class="button-row">
        <button class="primary-btn" data-action="save-theme">Save this theme</button>
        <button class="secondary-btn" data-action="explore-another">Explore another theme</button>
      </div>
      ${renderNavButtons({ back: true, restart: true })}
    </div>
  `;
}

function renderSavedThemes() {
  return `
    <div class="theme-stack">
      <p class="eyebrow">Saved themes</p>
      <h1>Choose what to share.</h1>
      <p class="subtext">Select one or more themes to include in the final Theme Explorer object.</p>
      ${state.savedThemes.length ? `
        <div class="theme-saved-list">
          ${state.savedThemes.map(renderSavedThemeItem).join("")}
        </div>
      ` : `
        <div class="theme-soft-panel">
          <p>No saved themes yet.</p>
        </div>
      `}
      <div class="button-row">
        <button class="primary-btn" data-action="submit-selected-themes" ${state.selectedThemeIds.length ? "" : "disabled"}>Continue</button>
        <button class="secondary-btn" data-action="explore-another">Explore another theme</button>
      </div>
      ${renderNavButtons({ back: true, restart: false })}
    </div>
  `;
}

function renderSavedThemeItem(savedTheme) {
  const checked = state.selectedThemeIds.includes(savedTheme.id) ? "checked" : "";
  const card = savedTheme.themeCard;
  return `
    <article class="theme-saved-item">
      <label class="theme-saved-select">
        <input type="checkbox" data-action="toggle-theme-selection" data-theme-id="${escapeHtml(savedTheme.id)}" ${checked} />
        <span>
          <strong>${escapeHtml(card.workingThemeName)}</strong>
          <span>${escapeHtml(card.path.join(" → "))}</span>
        </span>
      </label>
      <details>
        <summary>View notes</summary>
        ${renderThemeCard(card, { compact: true })}
      </details>
      <button class="theme-link-button" data-action="remove-saved-theme" data-theme-id="${escapeHtml(savedTheme.id)}">Remove</button>
    </article>
  `;
}

function renderSubmitThemes() {
  return `
    <div class="theme-stack">
      <p class="eyebrow">Final note</p>
      <h1>Anything else to include?</h1>
      <p class="subtext">This note will be included with the selected themes.</p>
      <label class="theme-answer-block">
        <span class="theme-label">Optional comments</span>
        <textarea class="soft-input theme-textarea" data-field="submission-comments" rows="5" placeholder="Anything Michele should know about these themes?">${escapeHtml(state.submission.commentsForMichele || "")}</textarea>
      </label>
      <div class="button-row">
        <button class="primary-btn" data-action="build-export">Build Theme Explorer object</button>
        <button class="secondary-btn" data-action="view-saved">Back to saved themes</button>
      </div>
    </div>
  `;
}

function renderExportResult() {
  const json = JSON.stringify(state.submission.exportedObject || {}, null, 2);
  return `
    <div class="theme-stack">
      <p class="eyebrow">Theme Explorer object</p>
      <h1>Ready for testing.</h1>
      <p class="subtext">Standalone mode shows the structured object. Parent mode can pass this into the larger planner handoff later.</p>
      <pre class="theme-json-output"><code>${escapeHtml(json)}</code></pre>
      <div class="button-row">
        <button class="primary-btn" data-action="copy-export-json">${state.submission.copied ? "Copied" : "Copy JSON"}</button>
        <button class="secondary-btn" data-action="view-saved">Back to saved themes</button>
        <button class="secondary-btn" data-action="explore-another">Explore another theme</button>
      </div>
    </div>
  `;
}

function renderThemeCard(themeCard, options = {}) {
  const compact = Boolean(options.compact);
  const hidePathAndSelectedWords = Boolean(options.hidePathAndSelectedWords);
  return `
    <section class="theme-result-card ${compact ? "is-compact" : ""}">
      ${hidePathAndSelectedWords ? "" : `
        <div>
          <h2>Theme path</h2>
          <p class="theme-path">${escapeHtml(themeCard.path.join(" → "))}</p>
        </div>
        <div>
          <h2>Words that shaped this theme</h2>
          <p class="theme-word-line">${themeCard.selectedWords.map((item) => escapeHtml(titleCase(item.word))).join(" · ")}</p>
        </div>
      `}
      <div>
        <h2>Words that resonate</h2>
        ${themeCard.resonanceWordsBySet?.length ? `
          <ul class="theme-note-list">
            ${themeCard.resonanceWordsBySet.map((group) => `
              <li><strong>${escapeHtml(group.label)}:</strong> ${escapeHtml(group.words.map((word) => word.display).join(", "))}</li>
            `).join("")}
          </ul>
        ` : `
          <p class="subtext theme-inline-note">No extra words were selected here.</p>
        `}
      </div>
      <div>
        <h2>Your notes</h2>
        <div class="theme-response-list">
          ${themeCard.notes.map((note) => `
            <article class="theme-response-item">
              <h3>${escapeHtml(note.word ? titleCase(note.word) : themeCard.startingDoor.label)}</h3>
              ${note.contextText ? `<p><strong>Context:</strong> ${escapeHtml(note.contextText)}</p>` : ""}
              ${note.topicText ? `<p><strong>Topic:</strong> ${escapeHtml(note.topicText)}</p>` : ""}
              <p><strong>Prompt:</strong> ${escapeHtml(note.promptText)}</p>
              <blockquote>${escapeHtml(note.answer)}</blockquote>
            </article>
          `).join("")}
        </div>
      </div>
      ${themeCard.userComments ? `
        <div>
          <h2>Optional comments</h2>
          <blockquote>${escapeHtml(themeCard.userComments)}</blockquote>
        </div>
      ` : ""}
    </section>
  `;
}

function renderProgress(done = false) {
  const journey = state.currentJourney;
  const total = journey.maxRounds || DEFAULT_MAX_ROUNDS;
  const completed = Math.min(journey.roundsCompleted, total);
  const label = done ? "Theme card" : `Round ${Math.min(completed + 1, total)} of ${total}`;
  const percentage = done ? 100 : Math.max(8, Math.round((completed / total) * 100));

  return `
    <div class="theme-progress-wrap" aria-label="${escapeHtml(label)}">
      <div class="theme-progress-meta">
        <span>${escapeHtml(label)}</span>
        <span>${completed}/${total}</span>
      </div>
      <div class="progress theme-progress"><span style="width: ${percentage}%"></span></div>
    </div>
  `;
}

function renderModelStatus() {
  const status = state.embedding.modelStatus;
  const text = {
    idle: "Word matching will start when needed.",
    loading: "Getting word matching ready…",
    ready: "Word matching is ready.",
    error: "Word matching will use a simple keyword fallback."
  }[status] || "Word matching is getting ready.";

  return `<p class="theme-model-status" data-model-status>${escapeHtml(text)}</p>`;
}

function renderThinkingCard() {
  return `
    <div class="theme-soft-panel theme-thinking" aria-live="polite">
      <span class="theme-thinking-dot" aria-hidden="true"></span>
      <p>Finding words worth exploring…</p>
    </div>
  `;
}

function renderNavButtons({ back = false, restart = false } = {}) {
  if (!back && !restart) return "";
  return `
    <div class="theme-secondary-row">
      ${back ? `<button class="theme-link-button" data-action="back">Back</button>` : ""}
      ${restart ? `<button class="theme-link-button" data-action="restart-current">Restart this theme</button>` : ""}
    </div>
  `;
}

function bindEvents() {
  state.root.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", handleAction);
  });

  state.root.querySelectorAll("textarea[data-field], input[data-field]").forEach((field) => {
    field.addEventListener("input", handleTextInput);
  });

  state.root.querySelectorAll("input[type='checkbox'][data-action='toggle-theme-selection']").forEach((input) => {
    input.addEventListener("change", handleAction);
  });
}

async function handleAction(event) {
  const target = event.currentTarget;
  const action = target.dataset.action;

  if (target.matches("button") && target.disabled) return;

  switch (action) {
    case "start":
      startNewJourney();
      navigate("door_select");
      break;
    case "view-saved":
      navigate("saved_themes");
      break;
    case "choose-door":
      chooseDoor(target.dataset.door);
      navigate("initial_short_prompt");
      break;
    case "continue-to-initial-detail":
      navigate("initial_detail_prompt");
      break;
    case "different-initial-prompt":
      chooseDifferentInitialPrompt();
      render();
      break;
    case "submit-initial-answer":
      submitInitialAnswer();
      await loadCandidatesAndNavigate();
      break;
    case "load-candidates":
      await loadCandidatesAndNavigate();
      break;
    case "different-path":
      await showDifferentPath();
      break;
    case "choose-word":
      chooseWord(target.dataset.wordId);
      navigate("followup_prompt");
      break;
    case "different-followup-prompt":
      chooseDifferentFollowupPrompt();
      render();
      break;
    case "submit-followup-answer":
      await submitFollowupAnswer();
      break;
    case "toggle-resonance-word":
      toggleResonanceWordSelection(target.dataset.wordId, target.dataset.set);
      render();
      break;
    case "refresh-resonance-words":
      await loadResonanceOptionsAndNavigate();
      break;
    case "continue-to-review":
      navigate("review");
      break;
    case "save-theme":
      saveTheme();
      navigate("saved_themes");
      break;
    case "explore-another":
      startNewJourney();
      navigate("door_select");
      break;
    case "toggle-theme-selection":
      toggleThemeSelection(target.dataset.themeId, target.checked);
      render();
      break;
    case "remove-saved-theme":
      removeSavedTheme(target.dataset.themeId);
      render();
      break;
    case "submit-selected-themes":
      navigate("submit_themes");
      break;
    case "build-export":
      buildExportObject();
      navigate("export_result");
      break;
    case "copy-export-json":
      await copyExportJson();
      render();
      break;
    case "back":
      goBack();
      break;
    case "restart-current":
      startNewJourney();
      navigate("door_select");
      break;
    default:
      break;
  }
}

function handleTextInput(event) {
  const field = event.currentTarget.dataset.field;
  const value = event.currentTarget.value;

  if (field === "initial-answer") {
    state.currentJourney.initialAnswer = value;
  }

  if (field === "initial-short-answer") {
    state.currentJourney.initialShortAnswer = value;
    updateCombinedInitialAnswer();
  }

  if (field === "initial-detail-answer") {
    state.currentJourney.initialDetailAnswer = value;
    updateCombinedInitialAnswer();
  }

  if (field === "followup-answer" && state.currentJourney.currentPrompt) {
    state.currentJourney.currentPrompt.draftAnswer = value;
  }

  if (field === "theme-name") {
    state.currentJourney.themeNameOverride = value;
  }

  if (field === "journey-comments") {
    state.currentJourney.userComments = value;
  }

  if (field === "submission-comments") {
    state.submission.commentsForMichele = value;
  }

  updateAnswerHelper();
  persistSession();
  emitChange();
}

function startNewJourney() {
  state.currentJourney = createEmptyJourney();
  state.currentJourney.vocabularyById = state.data.vocabularyById;
  state.embedding.rankedCandidateWords = [];
  state.embedding.rankingDebug = null;
}

function chooseDoor(door) {
  state.currentJourney.status = "active";
  state.currentJourney.selectedDoor = door;
  state.currentJourney.initialPrompt = chooseInitialPrompt(door);
}

function chooseInitialPrompt(door) {
  const doorPrompts = state.data.promptBank?.initial_doors?.[door];

  if (doorPrompts && !Array.isArray(doorPrompts)) {
    const shortPrompt = doorPrompts.short_prompt || null;
    const detailPrompts = doorPrompts.detail_prompts || [];
    const detailPrompt = chooseUnusedItem(detailPrompts, state.currentJourney.shownPromptIds);

    if (shortPrompt) markShownPrompt(shortPrompt.id);
    if (detailPrompt) markShownPrompt(detailPrompt.id);

    state.currentJourney.initialShortPrompt = shortPrompt ? normalizePromptRecord(shortPrompt) : null;
    state.currentJourney.initialDetailPrompt = detailPrompt ? normalizePromptRecord(detailPrompt) : null;

    return state.currentJourney.initialDetailPrompt || state.currentJourney.initialShortPrompt;
  }

  const prompts = Array.isArray(doorPrompts) ? doorPrompts : [];
  const prompt = chooseUnusedItem(prompts, state.currentJourney.shownPromptIds);

  if (!prompt) return null;

  markShownPrompt(prompt.id);

  const normalized = normalizePromptRecord(prompt);
  state.currentJourney.initialShortPrompt = null;
  state.currentJourney.initialDetailPrompt = normalized;

  return normalized;
}

function chooseDifferentInitialPrompt() {
  if (!state.currentJourney.selectedDoor) return;

  const existingShortPrompt = state.currentJourney.initialShortPrompt;
  state.currentJourney.initialPrompt = chooseInitialPrompt(state.currentJourney.selectedDoor);

  if (existingShortPrompt) {
    state.currentJourney.initialShortPrompt = existingShortPrompt;
  }
}

function submitInitialAnswer() {
  const shortAnswer = (state.currentJourney.initialShortAnswer || "").trim();
  const detailAnswer = (state.currentJourney.initialDetailAnswer || state.currentJourney.initialAnswer || "").trim();
  const shortPrompt = state.currentJourney.initialShortPrompt;
  const detailPrompt = state.currentJourney.initialDetailPrompt || state.currentJourney.initialPrompt;

  if (!shortAnswer && !detailAnswer) return;

  updateCombinedInitialAnswer();

  state.currentJourney.responses = state.currentJourney.responses.filter((response) => response.type !== "initial");

  if (shortAnswer && shortPrompt) {
    state.currentJourney.responses.push({
      id: makeId("response"),
      type: "initial",
      responseRole: "short_label",
      roundIndex: 0,
      door: state.currentJourney.selectedDoor,
      wordId: null,
      word: null,
      set: null,
      promptId: shortPrompt.id,
      promptText: shortPrompt.promptText,
      answer: shortAnswer,
      createdAt: new Date().toISOString()
    });
    markAnsweredPrompt(shortPrompt.id);
  }

  if (detailAnswer && detailPrompt) {
    state.currentJourney.responses.push({
      id: makeId("response"),
      type: "initial",
      responseRole: "concrete_detail",
      roundIndex: 0,
      door: state.currentJourney.selectedDoor,
      wordId: null,
      word: null,
      set: null,
      promptId: detailPrompt.id,
      promptText: detailPrompt.promptText,
      answer: detailAnswer,
      createdAt: new Date().toISOString()
    });
    markAnsweredPrompt(detailPrompt.id);
  }
}

async function embedInputMap(inputMap, options = {}) {
  const entries = Object.entries(inputMap);
  const embedded = {};

  for (const [key, text] of entries) {
    embedded[key] = await embedTextWithRetry(text, options);
  }

  return embedded;
}

async function loadCandidatesAndNavigate() {
  if (state.screen !== "word_select") {
    state.previousScreens.push(state.screen);
    state.screen = "word_select";
  }

  await loadCandidates();
  persistSession();
  emitChange();
  render();
}

async function loadCandidates() {
  state.embedding.rankingStatus = "loading";
  state.currentJourney.currentCandidates = [];
  render();

  const journeyForInput = {
    ...state.currentJourney,
    vocabularyById: state.data.vocabularyById
  };
  const inputText = buildEmbeddingInput(journeyForInput);
  let rankingResult;

  try {
    const weightedCoreLensInputs = buildWeightedCoreLensInputs(journeyForInput);
    const coreLensInputs = Object.keys(weightedCoreLensInputs.inputs).length
      ? weightedCoreLensInputs.inputs
      : buildCoreLensInputs(inputText);
    const microLensInputs = buildMicroLensInputs(inputText);
    const lensEmbeddings = await embedInputMap(coreLensInputs, { retryLimit: 2 });
    const microLensEmbeddings = await embedInputMap(microLensInputs, { retryLimit: 2 });

    rankingResult = rankCandidatesByEmbedding({
      inputEmbedding: lensEmbeddings.direct,
      lensEmbeddings,
      weightedLensEmbeddings: Object.keys(weightedCoreLensInputs.inputs).length
        ? { entries: weightedCoreLensInputs.entries, embeddings: lensEmbeddings }
        : null,
      microLensEmbeddings,
      vocabulary: state.data.vocabulary,
      journey: state.currentJourney,
      count: CANDIDATE_COUNT
    });
    state.embedding.modelStatus = getEmbeddingStatus().status;
    state.embedding.error = null;
  } catch (error) {
    state.embedding.modelStatus = "error";
    state.embedding.error = error.message || String(error);

    const keywordResult = rankCandidatesByKeywordFallback({
      inputText,
      vocabulary: state.data.vocabulary,
      journey: state.currentJourney,
      count: CANDIDATE_COUNT
    });

    rankingResult = keywordResult.useful
      ? keywordResult
      : rankDiverseExploratoryFallback({
          vocabulary: state.data.vocabulary,
          journey: state.currentJourney,
          count: CANDIDATE_COUNT
        });

    rankingResult.debug = {
      ...rankingResult.debug,
      embeddingAttempted: true,
      embeddingRetryLimit: 2,
      embeddingFailed: true,
      embeddingError: state.embedding.error
    };
  }

  state.embedding.rankingStatus = "ready";
  state.embedding.rankedCandidateWords = rankingResult.candidates;
  state.embedding.rankingDebug = {
    ...rankingResult.debug,
    inputText
  };
  state.currentJourney.rankingDebug = state.embedding.rankingDebug;
  state.currentJourney.currentCandidates = rankingResult.candidates;
  state.currentJourney.shownWordIds.push(...rankingResult.candidates.map((item) => item.id));
  persistSession();
  emitChange();
}

async function showDifferentPath() {
  const currentCandidates = state.currentJourney.currentCandidates || [];
  const candidateIds = currentCandidates.map((item) => item.id);

  state.currentJourney.rejectedWordIds.push(...candidateIds);
  state.currentJourney.skippedWordBatches.push({
    roundIndex: state.currentJourney.roundsCompleted + 1,
    wordIds: candidateIds,
    reason: "different_path",
    createdAt: new Date().toISOString()
  });

  await loadCandidatesAndNavigate();
}

async function loadResonanceOptionsAndNavigate() {
  if (state.screen !== "resonance_select") {
    state.previousScreens.push(state.screen);
    state.screen = "resonance_select";
  }

  await loadResonanceOptions();
  persistSession();
  emitChange();
  render();
}

async function loadResonanceOptions() {
  const journeyForInput = {
    ...state.currentJourney,
    vocabularyById: state.data.vocabularyById
  };
  const inputText = buildEmbeddingInput(journeyForInput);
  let rankingResult;

  try {
    const inputEmbedding = await embedTextWithRetry(inputText, { retryLimit: 2 });
    rankingResult = rankResonanceWordsByEmbedding({
      inputEmbedding,
      vocabulary: state.data.vocabulary,
      journey: state.currentJourney,
      sets: RESONANCE_SETS,
      perSet: RESONANCE_WORDS_PER_SET
    });
    state.embedding.modelStatus = getEmbeddingStatus().status;
    state.embedding.error = null;
  } catch (error) {
    state.embedding.modelStatus = "error";
    state.embedding.error = error.message || String(error);

    rankingResult = rankResonanceWordsByKeywordFallback({
      inputText,
      vocabulary: state.data.vocabulary,
      journey: state.currentJourney,
      sets: RESONANCE_SETS,
      perSet: RESONANCE_WORDS_PER_SET
    });

    rankingResult.debug = {
      ...rankingResult.debug,
      embeddingAttempted: true,
      embeddingRetryLimit: 2,
      embeddingFailed: true,
      embeddingError: state.embedding.error
    };
  }

  state.currentJourney.resonanceOptionsBySet = rankingResult.groups || {};
  state.currentJourney.rankingDebug = {
    ...(state.currentJourney.rankingDebug || {}),
    resonanceInputText: inputText,
    resonance: rankingResult.debug
  };
}

function toggleResonanceWordSelection(wordId, set) {
  if (!wordId || !set) return;

  if (state.currentJourney.resonanceSelections[wordId]) {
    delete state.currentJourney.resonanceSelections[wordId];
  } else {
    state.currentJourney.resonanceSelections[wordId] = set;
  }

  persistSession();
  emitChange();
}

function chooseWord(wordId) {
  const word = state.data.vocabularyById[wordId];
  if (!word) return;

  state.currentJourney.currentSelectedWord = word;
  state.currentJourney.selectedWordIds.push(word.id);
  state.currentJourney.currentPrompt = chooseFollowupPrompt(word);
}

function chooseFollowupPrompt(word) {
  const display = getWordDisplay(word);
  const promptText = `What does “${display}” make you think of?`;
  const promptId = `followup_universal_make_think_${word.id}`;

  markShownPrompt(promptId);

  return {
    id: promptId,
    set: word.primarySet,
    frame: "universal_starting_point",
    wordId: word.id,
    word: word.word,
    display,
    topicText: `Use “${display}” as a starting point.`,
    promptText,
    template: "What does “{display}” make you think of?",
    renderedText: promptText,
    draftAnswer: ""
  };
}

function getQuestionFrame(word) {
  return word?.grammar?.question_frame ||
    word?.grammar?.prompt_category ||
    word?.prompt_category ||
    "fallback";
}

function getJourneyContextLine() {
  const doorLabel = DOOR_LABELS[state.currentJourney.selectedDoor] || "A theme";
  const shortAnswer = (state.currentJourney.initialShortAnswer || "").trim();

  if (shortAnswer) {
    return `You are exploring: ${doorLabel}: ${shortAnswer}`;
  }

  return `You are exploring: ${doorLabel}`;
}

function getWordDisplay(word) {
  return word?.display || word?.word || "this word";
}

function chooseDifferentFollowupPrompt() {
  const word = state.currentJourney.currentSelectedWord;
  if (!word) return;
  state.currentJourney.currentPrompt = chooseFollowupPrompt(word);
}

async function submitFollowupAnswer() {
  const prompt = state.currentJourney.currentPrompt;
  const word = state.currentJourney.currentSelectedWord;
  const answer = (prompt?.draftAnswer || "").trim();

  if (!prompt || !word || !answer) return;

  state.currentJourney.responses.push({
    id: makeId("response"),
    type: "followup",
    roundIndex: state.currentJourney.roundsCompleted + 1,
    door: state.currentJourney.selectedDoor,
    wordId: word.id,
    word: word.word,
    display: word.display || word.word,
    set: word.primarySet,
    frame: prompt.frame || null,
    contextText: getJourneyContextLine(),
    topicText: prompt.topicText || `Use “${getWordDisplay(word)}” as a starting point.`,
    promptId: prompt.id,
    promptText: prompt.promptText || prompt.renderedText,
    answer,
    createdAt: new Date().toISOString()
  });

  markAnsweredPrompt(prompt.id);
  state.currentJourney.roundsCompleted += 1;
  state.currentJourney.currentPrompt = null;
  state.currentJourney.currentSelectedWord = null;
  state.currentJourney.currentCandidates = [];

  if (state.currentJourney.roundsCompleted >= state.currentJourney.maxRounds) {
    await loadResonanceOptionsAndNavigate();
  } else {
    await loadCandidatesAndNavigate();
  }
}

function saveTheme() {
  state.currentJourney.themeNameOverride = getFieldValue("theme-name", state.currentJourney.themeNameOverride || "");
  state.currentJourney.userComments = getFieldValue("journey-comments", state.currentJourney.userComments || "");
  const themeCard = buildThemeCard(state.currentJourney, state.data.vocabularyById);
  const savedTheme = {
    id: themeCard.id,
    createdAt: themeCard.createdAt,
    updatedAt: new Date().toISOString(),
    themeCard,
    journey: structuredCloneSafe(state.currentJourney)
  };

  const existingIndex = state.savedThemes.findIndex((theme) => theme.id === savedTheme.id);
  if (existingIndex >= 0) {
    state.savedThemes[existingIndex] = savedTheme;
  } else {
    state.savedThemes.push(savedTheme);
  }

  if (!state.selectedThemeIds.includes(savedTheme.id)) {
    state.selectedThemeIds.push(savedTheme.id);
  }

  persistSession();
  emitChange();
}

function toggleThemeSelection(themeId, checked) {
  if (checked && !state.selectedThemeIds.includes(themeId)) {
    state.selectedThemeIds.push(themeId);
  }

  if (!checked) {
    state.selectedThemeIds = state.selectedThemeIds.filter((id) => id !== themeId);
  }

  persistSession();
  emitChange();
}

function removeSavedTheme(themeId) {
  state.savedThemes = state.savedThemes.filter((theme) => theme.id !== themeId);
  state.selectedThemeIds = state.selectedThemeIds.filter((id) => id !== themeId);
  persistSession();
  emitChange();
}

function buildExportObject() {
  state.submission.commentsForMichele = getFieldValue("submission-comments", state.submission.commentsForMichele || "");
  state.submission.exportedObject = buildSubmissionObject({
    savedThemes: state.savedThemes,
    selectedThemeIds: state.selectedThemeIds,
    commentsForMichele: state.submission.commentsForMichele
  });
  state.submission.copied = false;
  persistSession();
  emitChange();
}

async function copyExportJson() {
  const json = JSON.stringify(state.submission.exportedObject || {}, null, 2);
  try {
    await navigator.clipboard.writeText(json);
    state.submission.copied = true;
  } catch (error) {
    state.submission.copied = false;
  }
}

function normalizePromptRecord(prompt) {
  return {
    id: prompt.id,
    door: prompt.door,
    responseRole: prompt.response_role || null,
    promptText: prompt.prompt || prompt.template || ""
  };
}

function updateCombinedInitialAnswer() {
  const parts = [
    state.currentJourney.initialShortAnswer,
    state.currentJourney.initialDetailAnswer
  ].map((value) => String(value || "").trim()).filter(Boolean);

  state.currentJourney.initialAnswer = parts.join("\n\n");
}

function chooseUnusedItem(items, usedIds) {
  const used = new Set(usedIds || []);
  const unused = items.filter((item) => !used.has(item.id));
  const pool = unused.length ? unused : items;
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function markShownPrompt(promptId) {
  if (promptId && !state.currentJourney.shownPromptIds.includes(promptId)) {
    state.currentJourney.shownPromptIds.push(promptId);
  }
}

function markAnsweredPrompt(promptId) {
  if (promptId && !state.currentJourney.answeredPromptIds.includes(promptId)) {
    state.currentJourney.answeredPromptIds.push(promptId);
  }
}

function updateAnswerHelper() {
  const helper = state.root?.querySelector("[data-answer-helper]");
  if (!helper) return;

  const field = state.root.querySelector("input[data-field='initial-short-answer'], textarea[data-field='initial-detail-answer'], textarea[data-field='followup-answer'], textarea[data-field='initial-answer']");
  helper.textContent = getAnswerHelperText(field?.value || "");
}

function getAnswerHelperText(answer) {
  const wordCount = String(answer || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  if (wordCount === 0) return "A word, phrase, or sentence is enough.";
  if (wordCount <= 2) return "That’s a starting point.";
  if (wordCount <= 7) return "That’s a little bit of detail.";
  if (wordCount <= 18) return "That’s a bit more detail.";
  return "That’s plenty to work with.";
}

function updateModelStatusOnly() {
  state.root?.querySelectorAll("[data-model-status]").forEach((element) => {
    const status = state.embedding.modelStatus;
    element.textContent = {
      idle: "Word matching will start when needed.",
      loading: "Getting word matching ready…",
      ready: "Word matching is ready.",
      error: "Using keyword matching because the browser model did not load."
    }[status] || "Word matching is getting ready.";

    if (status === "error" && state.embedding.error) {
      element.title = state.embedding.error;
    } else {
      element.removeAttribute("title");
    }
  });
}

function getFieldValue(field, fallback = "") {
  return state.root?.querySelector(`[data-field='${field}']`)?.value ?? fallback;
}

function renderLoading(message) {
  if (!state.root) return;
  state.root.innerHTML = `
    <div class="theme-stack">
      <p class="eyebrow">Theme Explorer</p>
      <h1>${escapeHtml(message)}</h1>
    </div>
  `;
}

function renderError(title, message) {
  if (!state.root) return;
  state.root.innerHTML = `
    <div class="theme-stack">
      <p class="eyebrow">Theme Explorer</p>
      <h1>${escapeHtml(title)}</h1>
      <p class="subtext">${escapeHtml(message || "Please check the data files and try again.")}</p>
    </div>
  `;
}

function persistSession() {
  if (state.mode !== "standalone") return;
  try {
    const payload = {
      screen: state.screen,
      currentJourney: stripVocabularyRefs(state.currentJourney),
      savedThemes: state.savedThemes,
      selectedThemeIds: state.selectedThemeIds,
      submission: state.submission
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    // Session persistence should never block the explorer.
  }
}

function restoreSession() {
  if (state.mode !== "standalone") return;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const payload = JSON.parse(raw);
    state.screen = payload.screen || "intro";
    state.currentJourney = {
      ...createEmptyJourney(),
      ...(payload.currentJourney || {})
    };
    state.savedThemes = Array.isArray(payload.savedThemes) ? payload.savedThemes : [];
    state.selectedThemeIds = Array.isArray(payload.selectedThemeIds) ? payload.selectedThemeIds : [];
    state.submission = {
      ...state.submission,
      ...(payload.submission || {})
    };
  } catch (error) {
    sessionStorage.removeItem(STORAGE_KEY);
  }
}

function stripVocabularyRefs(journey) {
  const clone = structuredCloneSafe(journey);
  delete clone.vocabularyById;
  return clone;
}

function emitChange() {
  if (typeof state.options.onChange === "function") {
    state.options.onChange(getThemeExplorerState());
  }

  if (state.mode === "embedded" && window.BMBMPlanner?.receiveThemeExplorerUpdate) {
    window.BMBMPlanner.receiveThemeExplorerUpdate(getThemeExplorerState());
  }
}

function structuredCloneSafe(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

window.BMBMThemeExplorer = {
  initThemeExplorer,
  getThemeExplorerState,
  getSelectedThemes,
  resetThemeExplorer
};

if (rootDefault) {
  initThemeExplorer({
    mode: "standalone",
    root: rootDefault,
    dataBasePath: "data/"
  });
}
