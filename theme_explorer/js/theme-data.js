export const DOOR_LABELS = {
  memory: "A memory",
  person: "A person",
  place: "A place",
  feeling: "A feeling",
  image: "An image",
  season_of_life: "A season of life",
  value: "A value",
  dream_or_hope: "A dream or hope",
  turning_point: "A turning point",
  hard_to_name: "Something hard to name"
};

export const SET_LABELS = {
  Emotion: "Emotions",
  Image: "Images",
  Place: "Places",
  Quality: "Qualities",
  Relationship: "Relationships",
  Symbol: "Symbols",
  Time: "Time",
  Transformation: "Change",
  Value: "Values"
};

export async function loadThemeData({ dataBasePath = "data/" } = {}) {
  const [vocabResponse, promptResponse] = await Promise.all([
    fetch(`${dataBasePath}theme_vocabulary.json`),
    fetch(`${dataBasePath}theme_prompt_bank.json`)
  ]);

  if (!vocabResponse.ok) {
    throw new Error(`Could not load theme vocabulary (${vocabResponse.status}).`);
  }

  if (!promptResponse.ok) {
    throw new Error(`Could not load theme prompt bank (${promptResponse.status}).`);
  }

  const vocabularyPayload = await vocabResponse.json();
  const promptBank = await promptResponse.json();

  const vocabulary = normalizeVocabulary(vocabularyPayload);
  const vocabularyById = Object.fromEntries(vocabulary.map((item) => [item.id, item]));

  return {
    vocabulary,
    vocabularyById,
    promptBank,
    metadata: vocabularyPayload.metadata || {},
    embedding: {
      model: vocabularyPayload.embedding_model || null,
      field: vocabularyPayload.embedding_field || "embedding",
      normalized: Boolean(vocabularyPayload.embedding_normalized)
    }
  };
}

function normalizeVocabulary(payload) {
  const rawVocabulary = Array.isArray(payload) ? payload : payload.vocabulary;

  if (!Array.isArray(rawVocabulary)) {
    throw new Error("Theme vocabulary should be a list or an object with a vocabulary list.");
  }

  return rawVocabulary.map((item, index) => {
    const id = item.id || `theme_word_${String(index + 1).padStart(4, "0")}`;
    const word = String(item.word || "").trim();
    const display = String(item.display || word).trim();
    const primarySet = item.primary_set || item.primarySet || "Quality";
    const sets = Array.isArray(item.sets) && item.sets.length ? item.sets : [primarySet];
    const embedding = Array.isArray(item.embedding) ? item.embedding.map(Number) : null;
    const grammar = item.grammar && typeof item.grammar === "object" ? item.grammar : {};
    const promptCategory = item.prompt_category || grammar.prompt_category || null;

    if (!word) {
      throw new Error(`Theme vocabulary item ${id} is missing a word.`);
    }

    return {
      ...item,
      id,
      word,
      display,
      label: display,
      primarySet,
      primary_set: primarySet,
      sets,
      embedding,
      prompt_category: promptCategory,
      grammar
    };
  });
}
