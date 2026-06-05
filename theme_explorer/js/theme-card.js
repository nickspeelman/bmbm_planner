import { DOOR_LABELS, SET_LABELS } from "./theme-data.js";

export function buildThemeCard(journey, vocabularyById) {
  const selectedWords = journey.selectedWordIds
    .map((id) => vocabularyById[id])
    .filter(Boolean);

  const path = [
    DOOR_LABELS[journey.selectedDoor] || journey.selectedDoor,
    ...selectedWords.map((item) => getWordDisplay(item))
  ].filter(Boolean);

  const primarySetGroups = groupWordsByPrimarySet(selectedWords);
  const allSetGroups = groupWordsByAllSets(selectedWords);
  const resonanceWordsBySet = groupResonanceSelections(journey.resonanceSelections || {}, vocabularyById);

  const generatedThemeName = selectedWords.length
    ? selectedWords.map((item) => getWordDisplay(item)).join(" · ")
    : DOOR_LABELS[journey.selectedDoor] || "Theme";

  const workingThemeName = String(journey.themeNameOverride || "").trim() || generatedThemeName;

  const notes = journey.responses.map((response) => ({
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
  }));

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
      label: DOOR_LABELS[journey.selectedDoor] || journey.selectedDoor
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
      label: SET_LABELS[set] || set,
      words
    })),
    allSetNotes: Object.entries(allSetGroups).map(([set, words]) => ({
      set,
      label: SET_LABELS[set] || set,
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
    label: SET_LABELS[set] || set,
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
