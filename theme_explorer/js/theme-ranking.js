const STOPWORDS = new Set([
  "a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "from", "had", "has",
  "have", "he", "her", "hers", "him", "his", "i", "in", "is", "it", "its", "me", "my",
  "of", "on", "or", "our", "she", "so", "that", "the", "their", "them", "then", "there",
  "these", "this", "to", "was", "we", "were", "what", "when", "where", "who", "with", "you",
  "your"
]);

const CORE_EMBEDDING_LENSES = [
  {
    key: "direct",
    weight: 0.30,
    build: (text) => text
  },
  {
    key: "image",
    weight: 0.30,
    build: (text) => `image, object, place, color, texture, movement: ${text}`
  },
  {
    key: "symbol",
    weight: 0.25,
    build: (text) => `symbol, metaphor, motif, association: ${text}`
  },
  {
    key: "scene",
    weight: 0.15,
    build: (text) => `memory, detail, scene, atmosphere: ${text}`
  }
];

const SECOND_BEST_LENS_WEIGHT = 0.20;
const FINAL_TEXT_SCORE_WEIGHT = 0.55;
const FINAL_SELECTED_CUE_WEIGHT = 0.25;
const FINAL_DIRECT_RELEVANCE_WEIGHT = 0.20;
const FINAL_GENERIC_BASELINE_WEIGHT = 5;
const FINAL_SPECIFICITY_BONUS_WEIGHT = 0.75;
const FINAL_ABSTRACT_PENALTY_WEIGHT = 0.25;

// Kept as an export for older integration code, but exploration scoring now uses
// one cumulative labeled text block instead of independently weighted text parts.
const JOURNEY_PART_WEIGHTS = {
  cumulativeText: 1
};

const MICRO_EMBEDDING_LENSES = [
  { key: "image", family: "sensory", build: (text) => `image: ${text}` },
  { key: "object", family: "sensory", build: (text) => `object: ${text}` },
  { key: "place", family: "sensory", build: (text) => `place: ${text}` },
  { key: "color", family: "sensory", build: (text) => `color: ${text}` },
  { key: "texture", family: "sensory", build: (text) => `texture: ${text}` },
  { key: "movement", family: "action", build: (text) => `movement: ${text}` },
  { key: "symbol", family: "symbolic", build: (text) => `symbol: ${text}` },
  { key: "metaphor", family: "symbolic", build: (text) => `metaphor: ${text}` },
  { key: "motif", family: "symbolic", build: (text) => `motif: ${text}` },
  { key: "association", family: "symbolic", build: (text) => `association: ${text}` },
  { key: "memory", family: "scene", build: (text) => `memory: ${text}` },
  { key: "detail", family: "scene", build: (text) => `detail: ${text}` },
  { key: "scene", family: "scene", build: (text) => `scene: ${text}` },
  { key: "atmosphere", family: "scene", build: (text) => `atmosphere: ${text}` }
];

const BASELINE_EMBEDDING_LENSES = [
  { key: "image", weight: 0.25, text: "image, object, place, color, texture, movement" },
  { key: "symbol", weight: 0.25, text: "symbol, metaphor, motif, association" },
  { key: "scene", weight: 0.20, text: "memory, detail, scene, atmosphere" },
  { key: "inner", weight: 0.20, text: "emotion, feeling, value, care, want, need" },
  { key: "meaning", weight: 0.10, text: "meaningful, personal, important, special, significant" }
];

const FINAL_MOTIF_LENSES = [
  {
    key: "direct",
    weight: 0.20,
    build: (text) => text
  },
  {
    key: "visual",
    weight: 0.35,
    build: (text) => `visual motif, image, shape, object, color, texture: ${text}`
  },
  {
    key: "symbol",
    weight: 0.30,
    build: (text) => `symbol, motif, emblem, recurring image: ${text}`
  },
  {
    key: "material",
    weight: 0.20,
    build: (text) => `material, surface, pattern, detail, ornament: ${text}`
  },
  {
    key: "scene",
    weight: 0.15,
    build: (text) => `place, atmosphere, scene, visual detail: ${text}`
  }
];

const FINAL_MOTIF_MICRO_LENSES = [
  { key: "image", family: "image", build: (text) => `image: ${text}` },
  { key: "object", family: "image", build: (text) => `object: ${text}` },
  { key: "place", family: "scene", build: (text) => `place: ${text}` },
  { key: "shape", family: "form", build: (text) => `shape: ${text}` },
  { key: "pattern", family: "form", build: (text) => `pattern: ${text}` },
  { key: "texture", family: "form", build: (text) => `texture: ${text}` },
  { key: "movement", family: "form", build: (text) => `movement: ${text}` },
  { key: "color", family: "material", build: (text) => `color: ${text}` },
  { key: "light", family: "material", build: (text) => `light: ${text}` },
  { key: "material", family: "material", build: (text) => `material: ${text}` },
  { key: "surface", family: "material", build: (text) => `surface: ${text}` },
  { key: "symbol", family: "symbol", build: (text) => `symbol: ${text}` },
  { key: "motif", family: "symbol", build: (text) => `motif: ${text}` },
  { key: "emblem", family: "symbol", build: (text) => `emblem: ${text}` },
  { key: "atmosphere", family: "scene", build: (text) => `atmosphere: ${text}` }
];

const FINAL_MOTIF_BASELINE_LENSES = [
  { key: "visual", weight: 0.35, text: "beautiful image, visual motif, object, shape, color, texture" },
  { key: "symbol", weight: 0.30, text: "symbol, motif, emblem, metaphor, meaningful image" },
  { key: "material", weight: 0.20, text: "beautiful, delicate, elegant, poetic, ornament, jewelry detail, material, surface, pattern" },
  { key: "scene", weight: 0.15, text: "place, atmosphere, scene, memory, visual detail" },
  { key: "abstract", weight: 0, text: "abstract feeling, emotion, value, idea, concept, belief, meaning" }
];

const MICRO_LENS_TOP_N = 10;
const CORE_CANDIDATE_POOL_SIZE = 110;
const LITERAL_TEXT_PENALTY = 0.20;
const GENERIC_BASELINE_WEIGHT = 0.75;
const SPECIFICITY_BONUS_WEIGHT = 0.20;
const DIVERSITY_WEIGHT = 0.22;
const SAME_MICRO_LENS_PENALTY = 0.12;
const SAME_MICRO_FAMILY_PENALTY = 0.08;
const NEAR_DUPLICATE_THRESHOLD = 0.82;

// Kept only for older saved sessions/debug helpers that may still reference answer-match code paths.
const EXACT_ANSWER_MATCH_BOOST = 0;
const CLOSE_ANSWER_MATCH_BOOST = 0;
const MATCH_SIMILARITY_THRESHOLD = 0.92;

export { CORE_EMBEDDING_LENSES, MICRO_EMBEDDING_LENSES, BASELINE_EMBEDDING_LENSES, FINAL_MOTIF_LENSES, FINAL_MOTIF_MICRO_LENSES, FINAL_MOTIF_BASELINE_LENSES, JOURNEY_PART_WEIGHTS };

export function buildEmbeddingInput(journey) {
  return buildCumulativeJourneyText(journey);
}

export function buildCumulativeJourneyText(journey) {
  const lines = [];
  const doorLabel = journey.selectedDoor || journey.initialDoor || "";
  const selectedWordDisplays = getSelectedWordDisplays(journey);
  const followups = getFollowupResponseEntries(journey);

  if (doorLabel) {
    lines.push(`Exploration type: ${doorLabel}`);
  }

  if (journey.initialShortAnswer) {
    lines.push(`Starting point: ${journey.initialShortAnswer}`);
  }

  const initialDetails = [
    journey.initialDetailAnswer || "",
    journey.initialAnswer && !journey.initialShortAnswer && !journey.initialDetailAnswer ? journey.initialAnswer : ""
  ].filter(Boolean);

  if (initialDetails.length) {
    lines.push("");
    lines.push("Client answers:");
    lines.push(...initialDetails);
  }

  if (selectedWordDisplays.length) {
    lines.push("");
    lines.push(`Path so far: ${selectedWordDisplays.join(" → ")}`);
  }

  for (const entry of followups) {
    if (entry.wordDisplay) {
      lines.push(`After “${entry.wordDisplay}”: ${entry.answer}`);
    } else {
      lines.push(`Client answer: ${entry.answer}`);
    }
  }

  return lines.filter((line) => line !== null && line !== undefined).join("\n").trim();
}

export function buildJourneyParts(journey) {
  const text = buildCumulativeJourneyText(journey);
  if (!text) return [];

  return [{
    key: "cumulativeText",
    label: "Cumulative journey text",
    weight: 1,
    text
  }];
}

export function buildWeightedCoreLensInputs(journey) {
  const text = buildCumulativeJourneyText(journey);
  const entries = [];
  const inputs = {};

  if (!text) return { inputs, entries };

  for (const lens of CORE_EMBEDDING_LENSES) {
    inputs[lens.key] = lens.build(text);
    entries.push({
      key: lens.key,
      partKey: "cumulativeText",
      partLabel: "Cumulative journey text",
      partWeight: 1,
      lensKey: lens.key,
      lensWeight: lens.weight,
      weight: lens.weight
    });
  }

  return { inputs, entries };
}

function getSelectedWordDisplays(journey) {
  return (journey.selectedWordIds || [])
    .map((id) => journey.vocabularyById?.[id]?.display || journey.vocabularyById?.[id]?.word)
    .filter(Boolean);
}

function getFollowupAnswers(journey) {
  return getFollowupResponseEntries(journey).map((entry) => entry.answer);
}

function getFollowupResponseEntries(journey) {
  const vocabularyById = journey.vocabularyById || {};
  return (journey.responses || [])
    .filter((response) => response.type === "followup" && response.answer)
    .map((response) => {
      const wordId = response.wordId || response.prompt?.wordId || response.selectedWordId;
      const word = wordId ? vocabularyById[wordId] : null;
      return {
        answer: response.answer,
        wordId,
        wordDisplay: word?.display || word?.word || response.display || response.word || ""
      };
    });
}

function normalizeJourneyPartWeights(parts) {
  const total = parts.reduce((sum, part) => sum + (part.weight || 0), 0);
  if (!total) return parts;

  return parts.map((part) => ({
    ...part,
    weight: part.weight / total
  }));
}

export function buildCoreLensInputs(inputText) {
  return Object.fromEntries(
    CORE_EMBEDDING_LENSES.map((lens) => [lens.key, lens.build(inputText)])
  );
}

export function buildMicroLensInputs(inputText) {
  return Object.fromEntries(
    MICRO_EMBEDDING_LENSES.map((lens) => [lens.key, lens.build(inputText)])
  );
}

export function buildBaselineLensInputs() {
  return Object.fromEntries(
    BASELINE_EMBEDDING_LENSES.map((lens) => [lens.key, lens.text])
  );
}

export function buildFinalMotifCoreLensInputs(inputText) {
  return Object.fromEntries(
    FINAL_MOTIF_LENSES.map((lens) => [lens.key, lens.build(inputText)])
  );
}

export function buildFinalMotifMicroLensInputs(inputText) {
  return Object.fromEntries(
    FINAL_MOTIF_MICRO_LENSES.map((lens) => [lens.key, lens.build(inputText)])
  );
}

export function buildFinalMotifBaselineLensInputs() {
  return Object.fromEntries(
    FINAL_MOTIF_BASELINE_LENSES.map((lens) => [lens.key, lens.text])
  );
}

export function rankCandidatesByEmbedding({ inputEmbedding, lensEmbeddings = null, weightedLensEmbeddings = null, microLensEmbeddings = null, baselineLensEmbeddings = null, vocabulary, journey, count = 6 }) {
  const excludedIds = getExcludedWordIds(journey);
  const historyWords = getPreviouslyConsideredWords(journey);
  const journeyText = buildLiteralComparisonText(journey);

  const coreEmbeddings = lensEmbeddings || { direct: inputEmbedding };
  const weightedEntries = buildWeightedEmbeddingEntries(weightedLensEmbeddings);
  const scoredAll = vocabulary
    .filter((item) => item.embedding && !excludedIds.has(item.id))
    .filter((item) => !isTooSimilarToHistory(item, historyWords))
    .map((item) => weightedEntries.length
      ? scoreCandidateWithWeightedCoreLenses(item, weightedEntries, journeyText, baselineLensEmbeddings)
      : scoreCandidateWithCoreLenses(item, coreEmbeddings, journeyText, baselineLensEmbeddings)
    )
    .sort((a, b) => b.score - a.score);

  const pool = buildLensCandidatePool({
    vocabulary,
    scoredAll,
    microLensEmbeddings,
    excludedIds,
    historyWords
  });

  const finalCandidates = selectDiverseEmbeddingBatch(pool, count);

  return {
    candidates: finalCandidates,
    debug: {
      method: weightedEntries.length
        ? (microLensEmbeddings ? "best_core_lens_micro_discovery_embedding" : "best_core_lens_embedding")
        : (microLensEmbeddings ? "best_core_lens_micro_discovery_embedding" : "best_core_lens_embedding"),
      excludedWordIds: Array.from(excludedIds),
      lenses: CORE_EMBEDDING_LENSES.map(({ key, weight }) => ({ key, weight })),
      journeyPartWeights: Array.from(new Map(
        weightedEntries.map((entry) => [entry.partKey, {
          key: entry.partKey,
          label: entry.partLabel,
          weight: Number(entry.partWeight.toFixed(4))
        }])
      ).values()),
      microLenses: microLensEmbeddings ? MICRO_EMBEDDING_LENSES.map(({ key, family }) => ({ key, family })) : [],
      baselineLenses: baselineLensEmbeddings ? BASELINE_EMBEDDING_LENSES.map(({ key, weight }) => ({ key, weight })) : [],
      genericBaselineWeight: GENERIC_BASELINE_WEIGHT,
      specificityBonusWeight: SPECIFICITY_BONUS_WEIGHT,
      secondBestLensWeight: SECOND_BEST_LENS_WEIGHT,
      topRawCandidates: scoredAll.slice(0, 30).map(toDebugCandidate),
      candidatePoolSize: pool.length,
      finalCandidates: finalCandidates.map(toDebugCandidate)
    }
  };
}

export function rankCandidatesByKeywordFallback({ inputText, vocabulary, journey, count = 6 }) {
  const inputTokens = tokenizeThemeText(inputText);
  const excludedIds = getExcludedWordIds(journey);
  const historyWords = getPreviouslyConsideredWords(journey);
  const journeyText = buildLiteralComparisonText(journey);

  const scored = vocabulary
    .filter((item) => !excludedIds.has(item.id))
    .filter((item) => !isTooSimilarToHistory(item, historyWords))
    .map((item) => {
      const wordText = [item.word, item.display].join(" ");
      const wordTokens = tokenizeThemeText(wordText);
      const overlap = countOverlap(inputTokens, wordTokens);
      const softMatch = hasSoftMatch(inputTokens, item.word);
      const literalPenalty = appearsInClientText(item, journeyText) ? LITERAL_TEXT_PENALTY : 0;

      return {
        ...item,
        score: overlap + (softMatch ? 0.5 : 0) - literalPenalty,
        baseScore: overlap + (softMatch ? 0.5 : 0),
        literalPenalty,
        rankingMethod: "keyword_fallback"
      };
    })
    .sort((a, b) => b.score - a.score);

  const useful = scored.some((item) => item.score > 0);
  const finalCandidates = useful ? selectDiverseEmbeddingBatch(scored, count) : [];

  return {
    useful,
    candidates: finalCandidates,
    debug: {
      method: "keyword_fallback",
      excludedWordIds: Array.from(excludedIds),
      inputTokens: Array.from(inputTokens),
      topRawCandidates: scored.slice(0, 30).map(toDebugCandidate),
      finalCandidates: finalCandidates.map(toDebugCandidate)
    }
  };
}

export function rankDiverseExploratoryFallback({ vocabulary, journey, count = 6 }) {
  const excludedIds = getExcludedWordIds(journey);
  const historyWords = getPreviouslyConsideredWords(journey);
  const available = vocabulary
    .filter((item) => !excludedIds.has(item.id))
    .filter((item) => !isTooSimilarToHistory(item, historyWords));
  const selected = selectDiverseEmbeddingBatch(shuffle(available).map((item) => ({
    ...item,
    score: 0,
    rankingMethod: "diverse_fallback"
  })), count);

  return {
    candidates: selected,
    debug: {
      method: "diverse_fallback",
      excludedWordIds: Array.from(excludedIds),
      finalCandidates: selected.map(toDebugCandidate)
    }
  };
}

export function rankResonanceWordsByEmbedding({ inputEmbedding, lensEmbeddings = null, weightedLensEmbeddings = null, microLensEmbeddings = null, baselineLensEmbeddings = null, vocabulary, journey, sections = null, perSection = 10, sets = [], perSet = 10 }) {
  const journeyText = buildLiteralComparisonText(journey);
  const weightedEntries = buildWeightedEmbeddingEntries(weightedLensEmbeddings);
  const coreEmbeddings = lensEmbeddings || { direct: inputEmbedding };

  const selectedCueEmbeddings = getSelectedCueEmbeddings(journey);
  const scoringEmbeddings = sections ? coreEmbeddings : coreEmbeddings;
  const scoredAll = vocabulary
    .filter((item) => item.embedding)
    .map((item) => sections
      ? scoreCandidateWithFinalMotifLenses(item, scoringEmbeddings, journeyText, baselineLensEmbeddings)
      : (weightedEntries.length
        ? scoreCandidateWithWeightedCoreLenses(item, weightedEntries, journeyText, baselineLensEmbeddings)
        : scoreCandidateWithCoreLenses(item, coreEmbeddings, journeyText, baselineLensEmbeddings))
    )
    .map((item) => sections ? applyFinalSelectedCueScore(item, selectedCueEmbeddings) : item)
    .sort((a, b) => b.score - a.score);

  if (sections) {
    const excludedIds = new Set(journey.selectedWordIds || []);
    const historyWords = (journey.selectedWordIds || [])
      .map((id) => journey.vocabularyById?.[id])
      .filter(Boolean);
    const pool = buildLensCandidatePool({
      vocabulary,
      scoredAll,
      microLensEmbeddings,
      excludedIds,
      historyWords,
      microLensDefinitions: sections ? FINAL_MOTIF_MICRO_LENSES : MICRO_EMBEDDING_LENSES
    });

    return buildFinalWordSections({
      scoredCandidates: pool,
      journey,
      perSection,
      method: sections ? "final_visual_motif_micro_discovery_embedding" : "best_core_lens_micro_discovery_embedding"
    });
  }

  return buildResonanceGroups({
    scoredCandidates: scoredAll,
    journey,
    sets,
    perSet,
    method: "embedding"
  });
}

export function rankResonanceWordsByKeywordFallback({ inputText, vocabulary, journey, sections = null, perSection = 10, sets = [], perSet = 10 }) {
  const inputTokens = tokenizeThemeText(inputText);

  const scored = vocabulary
    .map((item) => {
      const wordText = [item.word, item.primarySet, ...(item.sets || [])].join(" ");
      const wordTokens = tokenizeThemeText(wordText);
      const overlap = countOverlap(inputTokens, wordTokens);
      const softMatch = hasSoftMatch(inputTokens, item.word);

      return {
        ...item,
        score: overlap + (softMatch ? 0.5 : 0),
        rankingMethod: "keyword_fallback"
      };
    })
    .sort((a, b) => b.score - a.score);

  const useful = scored.some((item) => item.score > 0);

  if (sections) {
    return {
      ...buildFinalWordSections({
        scoredCandidates: useful ? scored : shuffle(scored),
        journey,
        perSection,
        method: useful ? "keyword_fallback" : "diverse_fallback"
      }),
      useful
    };
  }

  const grouped = buildResonanceGroups({
    scoredCandidates: useful ? scored : shuffle(scored),
    journey,
    sets,
    perSet,
    method: useful ? "keyword_fallback" : "diverse_fallback"
  });

  return {
    ...grouped,
    useful
  };
}

export function diversifyCandidates(scoredCandidates, count = 5, options = {}) {
  const selected = [];
  const selectedSetKeys = new Set();
  const strictSimilarityThreshold = 0.78;
  const priorityIds = options.priorityIds || new Set();

  const priorityCandidates = scoredCandidates.filter((candidate) => priorityIds.has(candidate.id));
  const regularCandidates = scoredCandidates.filter((candidate) => !priorityIds.has(candidate.id));

  for (const candidate of [...priorityCandidates, ...regularCandidates]) {
    if (selected.length >= count) break;

    const setKey = getCandidateSetKey(candidate);
    if (options.preferDifferentSets !== false && selectedSetKeys.has(setKey)) continue;
    if (isTooSimilarToSelected(candidate, selected, strictSimilarityThreshold)) continue;

    selected.push(candidate);
    selectedSetKeys.add(setKey);
  }

  if (selected.length >= Math.min(count, 4)) {
    return selected.slice(0, count);
  }

  for (const candidate of scoredCandidates) {
    if (selected.length >= count) break;
    if (selected.some((item) => item.id === candidate.id)) continue;
    if (isTooSimilarToSelected(candidate, selected, 0.84)) continue;

    selected.push(candidate);
    selectedSetKeys.add(getCandidateSetKey(candidate));
  }

  if (selected.length >= count) {
    return selected.slice(0, count);
  }

  for (const candidate of scoredCandidates) {
    if (selected.length >= count) break;
    if (selected.some((item) => item.id === candidate.id)) continue;
    if (isTooSimilarToSelected(candidate, selected, 0.9)) continue;
    selected.push(candidate);
  }

  return selected.slice(0, count);
}

function buildWeightedEmbeddingEntries(weightedLensEmbeddings) {
  if (!weightedLensEmbeddings?.entries?.length) return [];

  return weightedLensEmbeddings.entries
    .map((entry) => ({
      ...entry,
      embedding: weightedLensEmbeddings.embeddings?.[entry.key]
    }))
    .filter((entry) => entry.embedding && Number.isFinite(entry.weight));
}

function scoreCandidateWithWeightedCoreLenses(item, weightedEntries, journeyText, baselineLensEmbeddings = null) {
  const lensScores = {};
  const journeyPartScores = {};

  for (const entry of weightedEntries) {
    const score = dotProduct(item.embedding, entry.embedding);
    lensScores[entry.lensKey] = score;
    journeyPartScores[entry.partKey] = (journeyPartScores[entry.partKey] || 0) + (entry.lensWeight * score);
  }

  return finalizeLensBasedCandidateScore({
    item,
    lensScores,
    journeyPartScores,
    journeyText,
    baselineLensEmbeddings,
    rankingMethod: "best_core_lens_embedding"
  });
}

function scoreCandidateWithCoreLenses(item, coreEmbeddings, journeyText, baselineLensEmbeddings = null) {
  const lensScores = {};

  for (const lens of CORE_EMBEDDING_LENSES) {
    const embedding = coreEmbeddings[lens.key];
    if (!embedding) continue;
    lensScores[lens.key] = dotProduct(item.embedding, embedding);
  }

  if (!Object.keys(lensScores).length && coreEmbeddings.direct) {
    lensScores.direct = dotProduct(item.embedding, coreEmbeddings.direct);
  }

  return finalizeLensBasedCandidateScore({
    item,
    lensScores,
    journeyPartScores: {},
    journeyText,
    baselineLensEmbeddings,
    rankingMethod: "best_core_lens_embedding"
  });
}

function scoreCandidateWithFinalMotifLenses(item, motifEmbeddings, journeyText, baselineLensEmbeddings = null) {
  const lensScores = {};

  for (const lens of FINAL_MOTIF_LENSES) {
    const embedding = motifEmbeddings[lens.key];
    if (!embedding) continue;
    lensScores[lens.key] = dotProduct(item.embedding, embedding);
  }

  return finalizeLensBasedCandidateScore({
    item,
    lensScores,
    journeyPartScores: {},
    journeyText,
    baselineLensEmbeddings,
    rankingMethod: "final_visual_motif_embedding",
    genericBaselineWeight: FINAL_GENERIC_BASELINE_WEIGHT,
    specificityBonusWeight: FINAL_SPECIFICITY_BONUS_WEIGHT,
    abstractPenaltyWeight: FINAL_ABSTRACT_PENALTY_WEIGHT
  });
}

function finalizeLensBasedCandidateScore({
  item,
  lensScores,
  journeyPartScores,
  journeyText,
  baselineLensEmbeddings,
  rankingMethod,
  genericBaselineWeight = GENERIC_BASELINE_WEIGHT,
  specificityBonusWeight = SPECIFICITY_BONUS_WEIGHT,
  abstractPenaltyWeight = 0
}) {
  const correctedLensScores = {};
  const baselineLensScores = {};
  const rawLensEntries = Object.entries(lensScores)
    .filter(([, value]) => Number.isFinite(value));

  for (const [lensKey, journeyScore] of rawLensEntries) {
    const baselineScore = lensKey === "direct"
      ? 0
      : scoreCandidateAgainstBaselineLens(item, baselineLensEmbeddings, lensKey);
    const positiveSpecificity = Math.max(0, journeyScore - baselineScore);
    const correctedScore = journeyScore
      - (genericBaselineWeight * baselineScore)
      + (specificityBonusWeight * positiveSpecificity);

    correctedLensScores[lensKey] = correctedScore;
    baselineLensScores[lensKey] = baselineScore;
  }

  const sortedLensEntries = Object.entries(correctedLensScores)
    .filter(([, value]) => Number.isFinite(value))
    .sort((a, b) => b[1] - a[1]);

  const bestLens = sortedLensEntries[0] || ["direct", -Infinity];
  const secondLens = sortedLensEntries[1] || [null, 0];
  const literalPenalty = appearsInClientText(item, journeyText) ? LITERAL_TEXT_PENALTY : 0;
  const baselineScore = bestLens[0] ? (baselineLensScores[bestLens[0]] || 0) : 0;
  const baselinePenalty = baselineScore * genericBaselineWeight;
  const specificityBonus = bestLens[0]
    ? specificityBonusWeight * Math.max(0, (lensScores[bestLens[0]] || 0) - baselineScore)
    : 0;
  const abstractBaselineScore = abstractPenaltyWeight
    ? scoreCandidateAgainstBaselineLens(item, baselineLensEmbeddings, "abstract")
    : 0;
  const abstractPenalty = abstractBaselineScore * abstractPenaltyWeight;
  const baseScore = bestLens[1] + (SECOND_BEST_LENS_WEIGHT * secondLens[1]);
  const score = baseScore - literalPenalty - abstractPenalty;

  return {
    ...item,
    score,
    baseScore,
    literalPenalty,
    baselineScore,
    baselinePenalty,
    specificityBonus,
    abstractBaselineScore,
    abstractPenalty,
    lensScores,
    correctedLensScores,
    baselineLensScores,
    bestCoreLens: bestLens[0],
    bestCoreLensScore: bestLens[1],
    secondCoreLens: secondLens[0],
    secondCoreLensScore: secondLens[1],
    journeyPartScores,
    rankingMethod
  };
}

function scoreCandidateAgainstBaselineLens(item, baselineLensEmbeddings, lensKey) {
  if (!baselineLensEmbeddings || !item.embedding || !lensKey) return 0;
  const embedding = baselineLensEmbeddings[lensKey];
  if (!embedding) return 0;
  return dotProduct(item.embedding, embedding);
}

function scoreCandidateAgainstBaseline(item, baselineLensEmbeddings) {
  if (!baselineLensEmbeddings || !item.embedding) return 0;

  let weightedScore = 0;
  let totalWeight = 0;

  for (const lens of BASELINE_EMBEDDING_LENSES) {
    const embedding = baselineLensEmbeddings[lens.key];
    if (!embedding) continue;
    weightedScore += lens.weight * dotProduct(item.embedding, embedding);
    totalWeight += lens.weight;
  }

  return totalWeight ? weightedScore / totalWeight : 0;
}

function buildLensCandidatePool({ vocabulary, scoredAll, microLensEmbeddings, excludedIds, historyWords, microLensDefinitions = MICRO_EMBEDDING_LENSES }) {
  const poolById = new Map();

  for (const candidate of scoredAll.slice(0, CORE_CANDIDATE_POOL_SIZE)) {
    poolById.set(candidate.id, candidate);
  }

  if (microLensEmbeddings) {
    for (const lens of microLensDefinitions) {
      const embedding = microLensEmbeddings[lens.key];
      if (!embedding) continue;

      const nominated = vocabulary
        .filter((item) => item.embedding && !excludedIds.has(item.id))
        .filter((item) => !isTooSimilarToHistory(item, historyWords))
        .map((item) => ({
          ...item,
          microLensScore: dotProduct(item.embedding, embedding),
          microLens: lens.key,
          microLensFamily: lens.family || lens.key
        }))
        .sort((a, b) => b.microLensScore - a.microLensScore)
        .slice(0, MICRO_LENS_TOP_N);

      for (const item of nominated) {
        const existing = poolById.get(item.id);
        if (existing) {
          existing.microLensMatches = [
            ...(existing.microLensMatches || []),
            { key: item.microLens, family: item.microLensFamily, score: item.microLensScore }
          ];
        } else {
          const scored = scoredAll.find((candidate) => candidate.id === item.id);
          if (scored) {
            scored.microLensMatches = [{ key: item.microLens, family: item.microLensFamily, score: item.microLensScore }];
            assignBestMicroLens(scored);
            poolById.set(scored.id, scored);
          }
        }
      }
    }
  }

  const pool = Array.from(poolById.values());
  for (const candidate of pool) assignBestMicroLens(candidate);
  return pool.sort((a, b) => b.score - a.score);
}

function assignBestMicroLens(candidate) {
  const matches = Array.isArray(candidate.microLensMatches) ? candidate.microLensMatches : [];
  if (!matches.length) return candidate;

  const best = matches.reduce((winner, match) => {
    if (!winner) return match;
    return (match.score || 0) > (winner.score || 0) ? match : winner;
  }, null);

  candidate.bestMicroLens = best?.key || null;
  candidate.bestMicroLensFamily = best?.family || null;
  candidate.bestMicroLensScore = best?.score || 0;
  return candidate;
}

function selectDiverseEmbeddingBatch(scoredCandidates, count = 6) {
  const selected = [];
  const pool = scoredCandidates.filter((candidate) => Number.isFinite(candidate.score));

  while (selected.length < count && pool.length) {
    let bestCandidate = null;
    let bestAdjustedScore = -Infinity;
    let bestIndex = -1;

    for (let index = 0; index < pool.length; index += 1) {
      const candidate = pool[index];
      if (selected.some((item) => item.id === candidate.id)) continue;
      if (isTooSimilarByWord(candidate, selected)) continue;

      const maxSimilarity = maxEmbeddingSimilarity(candidate, selected);
      if (maxSimilarity > NEAR_DUPLICATE_THRESHOLD) continue;

      const embeddingDiversityPenalty = maxSimilarity * DIVERSITY_WEIGHT;
      const microLensPenalty = getMicroLensBatchPenalty(candidate, selected);
      const adjustedScore = candidate.score - embeddingDiversityPenalty - microLensPenalty;
      if (adjustedScore > bestAdjustedScore) {
        bestCandidate = {
          ...candidate,
          adjustedScore,
          diversityPenalty: embeddingDiversityPenalty,
          microLensPenalty,
          maxSimilarityToBatch: maxSimilarity
        };
        bestAdjustedScore = adjustedScore;
        bestIndex = index;
      }
    }

    if (!bestCandidate) break;
    selected.push(bestCandidate);
    pool.splice(bestIndex, 1);
  }

  if (selected.length >= count) return selected.slice(0, count);

  for (const candidate of pool) {
    if (selected.length >= count) break;
    if (selected.some((item) => item.id === candidate.id)) continue;
    if (isTooSimilarByWord(candidate, selected)) continue;
    if (isTooSimilarToSelected(candidate, selected, 0.9)) continue;
    selected.push(candidate);
  }

  return selected.slice(0, count);
}

function getMicroLensBatchPenalty(candidate, selected) {
  if (!selected.length) return 0;

  let penalty = 0;
  if (candidate.bestMicroLens && selected.some((item) => item.bestMicroLens === candidate.bestMicroLens)) {
    penalty += SAME_MICRO_LENS_PENALTY;
  }

  if (candidate.bestMicroLensFamily && selected.some((item) => item.bestMicroLensFamily === candidate.bestMicroLensFamily)) {
    penalty += SAME_MICRO_FAMILY_PENALTY;
  }

  return penalty;
}

function maxEmbeddingSimilarity(candidate, selected) {
  if (!candidate.embedding || !selected.length) return 0;

  let maxSimilarity = 0;
  for (const item of selected) {
    if (!item.embedding) continue;
    maxSimilarity = Math.max(maxSimilarity, dotProduct(candidate.embedding, item.embedding));
  }
  return maxSimilarity;
}

function buildLiteralComparisonText(journey) {
  return [
    journey.initialShortAnswer || "",
    journey.initialDetailAnswer || "",
    journey.initialAnswer || "",
    ...(journey.responses || []).map((response) => response.answer || "")
  ].join(" ");
}

function appearsInClientText(candidate, journeyText) {
  const text = normalizeComparableWord(journeyText);
  const candidateKeys = [candidate.display, candidate.word]
    .map((value) => normalizeComparableWord(value))
    .filter(Boolean);

  if (!text || !candidateKeys.length) return false;
  const textTokens = new Set(text.split(" ").filter(Boolean));

  return candidateKeys.some((key) => {
    if (!key) return false;
    if (key.includes(" ")) return text.includes(key);
    return textTokens.has(key);
  });
}


function getSelectedCueEmbeddings(journey) {
  const vocabularyById = journey.vocabularyById || {};
  return (journey.selectedWordIds || [])
    .map((id) => vocabularyById[id]?.embedding)
    .filter(Boolean);
}

function applyFinalSelectedCueScore(candidate, selectedCueEmbeddings) {
  if (!selectedCueEmbeddings.length || !candidate.embedding) return candidate;

  const averageVector = averageEmbeddingVectors(selectedCueEmbeddings);
  const selectedAverageScore = averageVector ? dotProduct(candidate.embedding, averageVector) : 0;
  const selectedMaxScore = Math.max(...selectedCueEmbeddings.map((embedding) => dotProduct(candidate.embedding, embedding)));
  const selectedCueScore = (0.60 * selectedAverageScore) + (0.40 * selectedMaxScore);
  const textScore = candidate.score || 0;
  const directRelevanceScore = Number.isFinite(candidate?.lensScores?.direct) ? candidate.lensScores.direct : 0;
  const score = (FINAL_TEXT_SCORE_WEIGHT * textScore)
    + (FINAL_SELECTED_CUE_WEIGHT * selectedCueScore)
    + (FINAL_DIRECT_RELEVANCE_WEIGHT * directRelevanceScore);

  return {
    ...candidate,
    score,
    textScore,
    directRelevanceScore,
    selectedCueScore,
    selectedAverageScore,
    selectedMaxScore,
    rankingMethod: `${candidate.rankingMethod || "embedding"}_final_selected_cue`
  };
}

function averageEmbeddingVectors(vectors) {
  if (!vectors.length) return null;
  const length = vectors[0]?.length || 0;
  if (!length) return null;

  const average = new Array(length).fill(0);
  for (const vector of vectors) {
    for (let index = 0; index < length; index += 1) {
      average[index] += vector[index] || 0;
    }
  }

  for (let index = 0; index < length; index += 1) {
    average[index] /= vectors.length;
  }

  return normalizeVector(average);
}

function normalizeVector(vector) {
  const magnitude = Math.sqrt(vector.reduce((sum, value) => sum + (value * value), 0));
  if (!magnitude) return vector;
  return vector.map((value) => value / magnitude);
}

function buildFinalWordSections({ scoredCandidates, journey, perSection = 8, method }) {
  const shownIds = new Set(journey.shownWordIds || []);
  const selectedIds = new Set(journey.selectedWordIds || []);
  const rejectedIds = new Set(journey.rejectedWordIds || []);
  const selectedWords = Array.from(selectedIds)
    .map((id) => journey.vocabularyById?.[id])
    .filter(Boolean);

  const globallyUsedIds = new Set(selectedIds);
  const globallyUsedWords = [...selectedWords];
  const topRawCandidates = {};

  const cleanNewPool = scoredCandidates
    .filter((candidate) => !shownIds.has(candidate.id))
    .filter((candidate) => !selectedIds.has(candidate.id))
    .filter((candidate) => !isTooSimilarByWord(candidate, selectedWords))
    .filter((candidate) => !isTooSimilarToSelected(candidate, selectedWords, 0.88))
    .map(assignBestCoreLens)
    .sort((a, b) => b.score - a.score);

  const bucketDefinitions = [
    { key: "images_objects", lensKey: "visual", microFamilies: ["image"] },
    { key: "forms_textures", lensKey: "material", microFamilies: ["form"] },
    { key: "colors_materials_light", lensKey: "material", microFamilies: ["material"] },
    { key: "symbols_motifs", lensKey: "symbol", microFamilies: ["symbol"] },
    { key: "scenes_atmosphere", lensKey: "scene", microFamilies: ["scene"] }
  ];

  const groups = {};

  for (const bucket of bucketDefinitions) {
    const bucketPool = buildBucketPoolForCoreLens({
      candidates: cleanNewPool,
      lensKey: bucket.lensKey,
      microFamilies: bucket.microFamilies || [],
      globallyUsedIds,
      globallyUsedWords
    });

    topRawCandidates[bucket.key] = bucketPool.slice(0, 30).map(toDebugCandidate);

    const selected = selectDiverseEmbeddingBatch(bucketPool, perSection);
    groups[bucket.key] = selected;

    for (const item of selected) {
      globallyUsedIds.add(item.id);
      globallyUsedWords.push(item);
    }
  }

  const secondChancePool = scoredCandidates
    .filter((candidate) => shownIds.has(candidate.id) || rejectedIds.has(candidate.id))
    .filter((candidate) => !selectedIds.has(candidate.id))
    .filter((candidate) => !globallyUsedIds.has(candidate.id))
    .filter((candidate) => !isTooSimilarByWord(candidate, selectedWords))
    .filter((candidate) => !isTooSimilarToSelected(candidate, selectedWords, 0.88))
    .map(assignBestCoreLens)
    .sort((a, b) => b.score - a.score);

  topRawCandidates.second_chance = secondChancePool.slice(0, 30).map(toDebugCandidate);
  groups.second_chance = selectDiverseEmbeddingBatch(secondChancePool, perSection);

  return {
    groups,
    debug: {
      method,
      sectionMode: true,
      groupedByCoreLens: true,
      topRawCandidates,
      finalCandidatesBySet: Object.fromEntries(
        Object.entries(groups).map(([section, items]) => [section, items.map(toDebugCandidate)])
      )
    }
  };
}


function buildBucketPoolForCoreLens({ candidates, lensKey, microFamilies = [], globallyUsedIds, globallyUsedWords }) {
  const base = candidates
    .filter((candidate) => !globallyUsedIds.has(candidate.id))
    .filter((candidate) => !isTooSimilarByWord(candidate, globallyUsedWords))
    .filter((candidate) => !isTooSimilarToSelected(candidate, globallyUsedWords, 0.88));

  const familyPool = microFamilies.length
    ? base.filter((candidate) => microFamilies.includes(candidate.bestMicroLensFamily))
    : [];
  const source = familyPool.length >= 4 ? familyPool : base;

  return source
    .map((candidate) => {
      const lensBucketScore = getCandidateLensBucketScore(candidate, lensKey);
      const familyMatchBonus = microFamilies.includes(candidate.bestMicroLensFamily) ? 0.08 : 0;
      return {
        ...candidate,
        lensBucketKey: lensKey,
        lensBucketFamilies: microFamilies,
        lensBucketScore,
        score: Number.isFinite(lensBucketScore)
          ? (0.70 * lensBucketScore) + (0.22 * (candidate.score || 0)) + familyMatchBonus
          : candidate.score
      };
    })
    .filter((candidate) => Number.isFinite(candidate.score))
    .sort((a, b) => b.score - a.score);
}

function getCandidateLensBucketScore(candidate, lensKey) {
  const corrected = candidate?.correctedLensScores?.[lensKey];
  if (Number.isFinite(corrected)) return corrected;

  const raw = candidate?.lensScores?.[lensKey];
  if (Number.isFinite(raw)) return raw;

  return candidate?.score;
}

function assignBestCoreLens(candidate) {
  const scores = candidate?.correctedLensScores || candidate?.lensScores || {};
  const entries = Object.entries(scores)
    .filter(([, value]) => Number.isFinite(value));

  if (!entries.length) {
    return { ...candidate, bestCoreLens: "direct", bestCoreLensScore: candidate?.score || 0 };
  }

  const [bestKey, bestScore] = entries.reduce((winner, entry) => (
    entry[1] > winner[1] ? entry : winner
  ));

  return {
    ...candidate,
    bestCoreLens: candidate.bestCoreLens || bestKey,
    bestCoreLensScore: candidate.bestCoreLensScore ?? bestScore
  };
}

function buildResonanceGroups({ scoredCandidates, journey, sets, perSet, method }) {
  const globallyUsedIds = new Set(journey.selectedWordIds || []);
  const globallyUsedWords = (journey.selectedWordIds || [])
    .map((id) => journey.vocabularyById?.[id])
    .filter(Boolean);
  const groups = {};
  const topRawCandidates = {};

  for (const set of sets) {
    const pool = scoredCandidates
      .filter((item) => !globallyUsedIds.has(item.id))
      .filter((item) => (item.primarySet === set) || (Array.isArray(item.sets) && item.sets.includes(set)))
      .sort((a, b) => {
        const aPrimary = a.primarySet === set ? 1 : 0;
        const bPrimary = b.primarySet === set ? 1 : 0;
        if (aPrimary !== bPrimary) return bPrimary - aPrimary;
        return (b.score || 0) - (a.score || 0);
      });

    topRawCandidates[set] = pool.slice(0, 20).map(toDebugCandidate);

    const selected = [];

    for (const candidate of pool) {
      if (selected.length >= perSet) break;
      if (globallyUsedIds.has(candidate.id)) continue;
      if (isTooSimilarByWord(candidate, selected)) continue;
      if (isTooSimilarByWord(candidate, globallyUsedWords)) continue;
      if (isTooSimilarToSelected(candidate, selected, 0.86)) continue;
      if (isTooSimilarToSelected(candidate, globallyUsedWords, 0.88)) continue;

      selected.push(candidate);
      globallyUsedIds.add(candidate.id);
      globallyUsedWords.push(candidate);
    }

    groups[set] = selected;
  }

  return {
    groups,
    debug: {
      method,
      topRawCandidates,
      finalCandidatesBySet: Object.fromEntries(
        Object.entries(groups).map(([set, items]) => [set, items.map(toDebugCandidate)])
      )
    }
  };
}

function findVocabularyMatchesInAnswers({ vocabulary, journey, excludedIds }) {
  const answerTokens = getAnswerTokens(journey);
  if (!answerTokens.size) return [];

  return vocabulary
    .filter((item) => !excludedIds.has(item.id))
    .map((item) => {
      const wordKey = normalizeComparableWord(item.word);
      const displayKey = normalizeComparableWord(item.display || item.word);
      if (!wordKey && !displayKey) return null;

      const exactToken = Array.from(answerTokens).find((token) => token === wordKey || token === displayKey);
      if (exactToken) {
        return {
          ...item,
          score: EXACT_ANSWER_MATCH_BOOST,
          matchType: "exact",
          matchedToken: exactToken,
          rankingMethod: "answer_exact"
        };
      }

      const closeToken = Array.from(answerTokens).find((token) => {
        if (!token || token.length < 4) return false;
        if (wordKey && (wordKey.includes(token) || token.includes(wordKey))) return true;
        if (displayKey && (displayKey.includes(token) || token.includes(displayKey))) return true;
        return tokenSimilarity(token, wordKey || displayKey) >= MATCH_SIMILARITY_THRESHOLD;
      });

      if (closeToken) {
        return {
          ...item,
          score: CLOSE_ANSWER_MATCH_BOOST,
          matchType: "close",
          matchedToken: closeToken,
          rankingMethod: "answer_close"
        };
      }

      return null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);
}

function getAnswerTokens(journey) {
  const text = [
    journey.initialShortAnswer || "",
    journey.initialDetailAnswer || "",
    journey.initialAnswer || "",
    ...(journey.responses || []).map((response) => response.answer || "")
  ].join(" ");

  return tokenizeThemeText(text);
}

function getCandidateSetKey(candidate) {
  return candidate.primarySet || candidate.sets?.[0] || "Other";
}

function tokenSimilarity(a, b) {
  if (!a || !b) return 0;
  if (a === b) return 1;

  const distance = levenshteinDistance(a, b);
  return 1 - (distance / Math.max(a.length, b.length));
}

function levenshteinDistance(a, b) {
  const rows = a.length + 1;
  const cols = b.length + 1;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i += 1) dp[i][0] = i;
  for (let j = 0; j < cols; j += 1) dp[0][j] = j;

  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[a.length][b.length];
}

function getExcludedWordIds(journey) {
  return new Set([
    ...(journey.shownWordIds || []),
    ...(journey.selectedWordIds || []),
    ...(journey.rejectedWordIds || [])
  ]);
}

function getPreviouslyConsideredWords(journey) {
  const vocabularyById = journey.vocabularyById || {};
  const ids = new Set([
    ...(journey.shownWordIds || []),
    ...(journey.selectedWordIds || []),
    ...(journey.rejectedWordIds || [])
  ]);

  return Array.from(ids)
    .map((id) => vocabularyById[id])
    .filter(Boolean);
}

function isTooSimilarToHistory(candidate, historyWords) {
  if (!historyWords.length) return false;

  const candidateKey = normalizeComparableWord(candidate.word);

  return historyWords.some((item) => {
    const historyKey = normalizeComparableWord(item.word);

    if (candidateKey && historyKey && candidateKey === historyKey) return true;
    if (candidateKey && historyKey && areSimplePluralPair(candidateKey, historyKey)) return true;

    if (candidate.embedding && item.embedding) {
      return dotProduct(candidate.embedding, item.embedding) >= 0.86;
    }

    return false;
  });
}

function isTooSimilarByWord(candidate, selected) {
  const candidateKey = normalizeComparableWord(candidate.word);
  if (!candidateKey) return false;

  return selected.some((item) => {
    const otherKey = normalizeComparableWord(item.word);
    if (!otherKey) return false;
    return candidateKey === otherKey || areSimplePluralPair(candidateKey, otherKey);
  });
}

export function normalizeComparableWord(word) {
  let value = String(word || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!value) return "";

  const parts = value.split(" ").map((part) => singularizeSimple(part));
  return parts.join(" ");
}

function singularizeSimple(token) {
  if (token.length <= 3) return token;
  if (token.endsWith("ies") && token.length > 4) return `${token.slice(0, -3)}y`;
  if (token.endsWith("sses")) return token.slice(0, -2);
  if (token.endsWith("ses") || token.endsWith("xes") || token.endsWith("zes") || token.endsWith("ches") || token.endsWith("shes")) {
    return token.slice(0, -2);
  }
  if (token.endsWith("s") && !token.endsWith("ss")) return token.slice(0, -1);
  return token;
}

function areSimplePluralPair(a, b) {
  return singularizeSimple(a) === singularizeSimple(b);
}

function dotProduct(a, b) {
  const limit = Math.min(a.length, b.length);
  let total = 0;
  for (let i = 0; i < limit; i += 1) {
    total += a[i] * b[i];
  }
  return total;
}

function isTooSimilarToSelected(candidate, selected, threshold) {
  if (!candidate.embedding) return false;

  return selected.some((item) => {
    if (!item.embedding) return false;
    return dotProduct(candidate.embedding, item.embedding) >= threshold;
  });
}

function tokenizeThemeText(text) {
  return new Set(
    String(text || "")
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, " ")
      .split(/\s+/)
      .map((token) => token.trim())
      .filter((token) => token.length > 2)
      .filter((token) => !STOPWORDS.has(token))
  );
}

function countOverlap(a, b) {
  let total = 0;
  for (const token of a) {
    if (b.has(token)) total += 1;
  }
  return total;
}

function hasSoftMatch(inputTokens, word) {
  const normalizedWord = String(word || "").toLowerCase();
  if (!normalizedWord || normalizedWord.length < 3) return false;

  for (const token of inputTokens) {
    if (normalizedWord.includes(token) || token.includes(normalizedWord)) return true;
  }

  return false;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function toDebugCandidate(item) {
  return {
    id: item.id,
    word: item.word,
    display: item.display,
    primarySet: item.primarySet,
    sets: item.sets,
    score: Number.isFinite(item.score) ? Number(item.score.toFixed(4)) : item.score,
    rankingMethod: item.rankingMethod,
    baseScore: Number.isFinite(item.baseScore) ? Number(item.baseScore.toFixed(4)) : item.baseScore,
    adjustedScore: Number.isFinite(item.adjustedScore) ? Number(item.adjustedScore.toFixed(4)) : item.adjustedScore,
    literalPenalty: Number.isFinite(item.literalPenalty) ? Number(item.literalPenalty.toFixed(4)) : item.literalPenalty,
    baselineScore: Number.isFinite(item.baselineScore) ? Number(item.baselineScore.toFixed(4)) : item.baselineScore,
    baselinePenalty: Number.isFinite(item.baselinePenalty) ? Number(item.baselinePenalty.toFixed(4)) : item.baselinePenalty,
    specificityBonus: Number.isFinite(item.specificityBonus) ? Number(item.specificityBonus.toFixed(4)) : item.specificityBonus,
    textScore: Number.isFinite(item.textScore) ? Number(item.textScore.toFixed(4)) : item.textScore,
    selectedCueScore: Number.isFinite(item.selectedCueScore) ? Number(item.selectedCueScore.toFixed(4)) : item.selectedCueScore,
    selectedAverageScore: Number.isFinite(item.selectedAverageScore) ? Number(item.selectedAverageScore.toFixed(4)) : item.selectedAverageScore,
    selectedMaxScore: Number.isFinite(item.selectedMaxScore) ? Number(item.selectedMaxScore.toFixed(4)) : item.selectedMaxScore,
    bestCoreLens: item.bestCoreLens,
    bestCoreLensScore: Number.isFinite(item.bestCoreLensScore) ? Number(item.bestCoreLensScore.toFixed(4)) : item.bestCoreLensScore,
    secondCoreLens: item.secondCoreLens,
    secondCoreLensScore: Number.isFinite(item.secondCoreLensScore) ? Number(item.secondCoreLensScore.toFixed(4)) : item.secondCoreLensScore,
    correctedLensScores: item.correctedLensScores
      ? Object.fromEntries(Object.entries(item.correctedLensScores).map(([key, value]) => [
          key,
          Number.isFinite(value) ? Number(value.toFixed(4)) : value
        ]))
      : undefined,
    baselineLensScores: item.baselineLensScores
      ? Object.fromEntries(Object.entries(item.baselineLensScores).map(([key, value]) => [
          key,
          Number.isFinite(value) ? Number(value.toFixed(4)) : value
        ]))
      : undefined,
    diversityPenalty: Number.isFinite(item.diversityPenalty) ? Number(item.diversityPenalty.toFixed(4)) : item.diversityPenalty,
    microLensPenalty: Number.isFinite(item.microLensPenalty) ? Number(item.microLensPenalty.toFixed(4)) : item.microLensPenalty,
    bestMicroLens: item.bestMicroLens,
    bestMicroLensFamily: item.bestMicroLensFamily,
    maxSimilarityToBatch: Number.isFinite(item.maxSimilarityToBatch) ? Number(item.maxSimilarityToBatch.toFixed(4)) : item.maxSimilarityToBatch,
    journeyPartScores: item.journeyPartScores
      ? Object.fromEntries(Object.entries(item.journeyPartScores).map(([key, value]) => [
          key,
          Number.isFinite(value) ? Number(value.toFixed(4)) : value
        ]))
      : undefined,
    microLensMatches: Array.isArray(item.microLensMatches)
      ? item.microLensMatches.map((match) => ({
          key: match.key,
          family: match.family,
          score: Number.isFinite(match.score) ? Number(match.score.toFixed(4)) : match.score
        }))
      : undefined,
    answerMatch: item.answerMatch ? {
      matchType: item.answerMatch.matchType,
      matchedToken: item.answerMatch.matchedToken
    } : item.matchType ? {
      matchType: item.matchType,
      matchedToken: item.matchedToken
    } : null
  };
}
