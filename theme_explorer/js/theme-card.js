import { DOOR_LABELS, SET_LABELS } from "./theme-data.js";

const FINAL_WORD_SECTION_LABELS = {
  direct: "Close to what you wrote",
  image: "Images and details",
  symbol: "Symbols and patterns",
  scene: "Scenes and atmosphere",
  second_chance: "Worth another look"
};

export function buildThemeCard(journey, vocabularyById) {
  const selectedWords = journey.selectedWordIds
    .map((id) => vocabularyById[id])
    .filter(Boolean);

  const doorLabel = getDoorLabel(journey);
  const path = [
    doorLabel,
    ...selectedWords.map((item) => getWordDisplay(item))
  ].filter(Boolean);

  const primarySetGroups = groupWordsByPrimarySet(selectedWords);
  const allSetGroups = groupWordsByAllSets(selectedWords);
  const resonanceWordsBySet = groupResonanceSelections(journey.resonanceSelections || {}, vocabularyById);

  const existingThemeIdea = String(journey.existingThemeIdea || "").trim();
  const generatedThemeName = selectedWords.length
    ? selectedWords.map((item) => getWordDisplay(item)).join(" · ")
    : getThemeIdeaTitle(existingThemeIdea) || doorLabel || "Theme";

  const workingThemeName = String(journey.themeNameOverride || "").trim() || generatedThemeName;

  const notes = [
    ...buildExistingThemeNotes(journey),
    ...journey.responses.map((response) => ({
    type: response.type,
    responseRole: response.responseRole || null,
    door: response.door || null,
    wordId: response.wordId || null,
    word: response.word || null,
    display: response.display || response.word || null,
    set: response.set || null,
    frame: response.frame || null,
    contextText: response.contextText || null,
    topicText: response.topicText || null,
    promptId: response.promptId,
    promptText: response.promptText,
    answer: response.answer
  }))
  ];

  const resonanceWords = resonanceWordsBySet.flatMap((group) => group.words.map((word) => ({
    ...word,
    set: group.set,
    label: group.label
  })));

  return {
    id: journey.id || makeId("theme"),
    createdAt: journey.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    workingThemeName,
    startingDoor: {
      id: journey.selectedDoor,
      label: doorLabel
    },
    existingTheme: {
      idea: existingThemeIdea,
      details: String(journey.existingThemeDetails || "").trim(),
      skippedExplorer: Boolean(journey.skippedExplorer)
    },
    path,
    selectedWords: selectedWords.map((item) => ({
      id: item.id,
      word: item.word,
      display: getWordDisplay(item),
      primarySet: item.primarySet,
      sets: item.sets,
      promptCategory: item.prompt_category || null,
      grammar: item.grammar || null
    })),
    strongestNotes: Object.entries(primarySetGroups).map(([set, words]) => ({
      set,
      label: FINAL_WORD_SECTION_LABELS[set] || SET_LABELS[set] || set,
      words
    })),
    allSetNotes: Object.entries(allSetGroups).map(([set, words]) => ({
      set,
      label: FINAL_WORD_SECTION_LABELS[set] || SET_LABELS[set] || set,
      words
    })),
    resonanceWords,
    resonanceWordsBySet,
    notes,
    summaryText: buildDeterministicSummary(selectedWords, primarySetGroups),
    userComments: journey.userComments || ""
  };
}

export function buildSubmissionObject({ savedThemes, selectedThemeIds, commentsForMichele }) {
  const selectedIdSet = new Set(selectedThemeIds);
  const selectedThemes = savedThemes
    .filter((theme) => selectedIdSet.has(theme.id))
    .map((theme) => theme.themeCard);

  return {
    source: "theme_explorer",
    version: "0.2.0",
    createdAt: new Date().toISOString(),
    commentsForMichele: commentsForMichele || "",
    selectedThemeCount: selectedThemes.length,
    selectedThemes
  };
}

function getDoorLabel(journey) {
  if (journey?.selectedDoor === "theme_notes") return "Theme notes";
  return DOOR_LABELS[journey?.selectedDoor] || journey?.selectedDoor || "Theme";
}

function getThemeIdeaTitle(value) {
  const normalized = String(value || "").replace(/\s+/g, " ").trim();
  if (!normalized) return "";
  return normalized.length > 80 ? `${normalized.slice(0, 77).trim()}…` : normalized;
}

function buildExistingThemeNotes(journey) {
  const notes = [];
  const idea = String(journey.existingThemeIdea || "").trim();
  const details = String(journey.existingThemeDetails || "").trim();

  if (idea) {
    notes.push({
      type: "pre_theme",
      responseRole: "existing_theme_idea",
      door: null,
      wordId: null,
      word: null,
      display: null,
      set: null,
      frame: null,
      contextText: null,
      topicText: "Theme, idea, or direction",
      promptId: "existing_theme_idea",
      promptText: "Do you already have a theme, idea, or direction in mind?",
      answer: idea
    });
  }

  if (details) {
    notes.push({
      type: "pre_theme",
      responseRole: "existing_theme_details",
      door: null,
      wordId: null,
      word: null,
      display: null,
      set: null,
      frame: null,
      contextText: null,
      topicText: "Notes for Michele",
      promptId: "existing_theme_details",
      promptText: "Anything Michele should know about it?",
      answer: details
    });
  }

  return notes;
}

function buildDeterministicSummary(selectedWords, primarySetGroups) {
  if (!selectedWords.length) {
    return "This theme is still open.";
  }

  const words = selectedWords.slice(0, 5).map((item) => getWordDisplay(item)).join(" · ");
  const sets = Object.keys(primarySetGroups)
    .map((set) => SET_LABELS[set] || set)
    .join(" · ");

  return sets
    ? `This theme gathers around: ${words}. It includes notes of: ${sets}.`
    : `This theme gathers around: ${words}.`;
}

function groupWordsByPrimarySet(words) {
  const groups = {};
  for (const item of words) {
    const set = item.primarySet || "Other";
    if (!groups[set]) groups[set] = [];
    groups[set].push(getWordDisplay(item));
  }
  return groups;
}

function groupWordsByAllSets(words) {
  const groups = {};
  for (const item of words) {
    for (const set of item.sets || [item.primarySet]) {
      if (!groups[set]) groups[set] = [];
      const display = getWordDisplay(item);
      if (!groups[set].includes(display)) groups[set].push(display);
    }
  }
  return groups;
}

function groupResonanceSelections(resonanceSelections, vocabularyById) {
  const groups = {};

  for (const [wordId, set] of Object.entries(resonanceSelections || {})) {
    const item = vocabularyById[wordId];
    if (!item || !set) continue;
    if (!groups[set]) groups[set] = [];

    const display = getWordDisplay(item);
    if (groups[set].some((word) => word.id === item.id)) continue;

    groups[set].push({
      id: item.id,
      word: item.word,
      display,
      primarySet: item.primarySet,
      sets: item.sets
    });
  }

  return Object.entries(groups).map(([set, words]) => ({
    set,
    label: FINAL_WORD_SECTION_LABELS[set] || SET_LABELS[set] || set,
    words
  }));
}

function getWordDisplay(item) {
  return item?.display || titleCase(item?.word || "");
}

export function titleCase(value) {
  return String(value || "")
    .replace(/_/g, " ")
    .replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1));
}

export function makeId(prefix = "id") {
  if (window.crypto?.randomUUID) {
    return `${prefix}_${window.crypto.randomUUID()}`;
  }
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}
