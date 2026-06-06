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

const JOURNEY_PART_WEIGHTS = {
  startingPoint: 0.30,
  initialDetails: 0.20,
  latestAnswer: 0.30,
  earlierAnswers: 0.12,
  selectedWords: 0.08
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

const MICRO_LENS_TOP_N = 10;
const CORE_CANDIDATE_POOL_SIZE = 110;
const LITERAL_TEXT_PENALTY = 0.05;
const GENERIC_BASELINE_WEIGHT = 3;
const SPECIFICITY_BONUS_WEIGHT = 0.70;
const DIVERSITY_WEIGHT = 0.25;
const SAME_MICRO_LENS_PENALTY = 0.12;
const SAME_MICRO_FAMILY_PENALTY = 0.08;
const NEAR_DUPLICATE_THRESHOLD = 0.70;

// Kept only for older saved sessions/debug helpers that may still reference answer-match code paths.
const EXACT_ANSWER_MATCH_BOOST = 0;
const CLOSE_ANSWER_MATCH_BOOST = 0;
const MATCH_SIMILARITY_THRESHOLD = 0.92;

export { CORE_EMBEDDING_LENSES, MICRO_EMBEDDING_LENSES, BASELINE_EMBEDDING_LENSES, JOURNEY_PART_WEIGHTS };

export function buildEmbeddingInput(journey) {
  return buildJourneyParts(journey)
    .map((part) => `${part.label}: ${part.text}`)
    .filter(Boolean)
    .join("\n\n");
}

export function buildJourneyParts(journey) {
  const parts = [];

  const selectedWords = getSelectedWordDisplays(journey);
  const followupAnswers = getFollowupAnswers(journey);
  const latestFollowupAnswer = followupAnswers.at(-1) || "";
  const earlierFollowupAnswers = followupAnswers.slice(0, -1);

  const startingPoint = [
    journey.selectedDoor ? `Door: ${journey.selectedDoor}` : "",
    journey.initialShortAnswer ? `Short description: ${journey.initialShortAnswer}` : ""
  ].filter(Boolean).join("\n");

  if (startingPoint) {
    parts.push({
      key: "startingPoint",
      label: "Starting point",
      weight: JOURNEY_PART_WEIGHTS.startingPoint,
      text: startingPoint
    });
  }

  const initialDetails = [
    journey.initialDetailAnswer || "",
    journey.initialAnswer && !journey.initialShortAnswer && !journey.initialDetailAnswer ? journey.initialAnswer : ""
  ].filter(Boolean).join("\n");

  if (initialDetails) {
    parts.push({
      key: "initialDetails",
      label: "Initial details",
      weight: JOURNEY_PART_WEIGHTS.initialDetails,
      text: initialDetails
    });
  }

  if (latestFollowupAnswer) {
    parts.push({
      key: "latestAnswer",
      label: "Latest answer",
      weight: JOURNEY_PART_WEIGHTS.latestAnswer,
      text: latestFollowupAnswer
    });
  }

  if (earlierFollowupAnswers.length) {
    parts.push({
      key: "earlierAnswers",
      label: "Earlier answers",
      weight: JOURNEY_PART_WEIGHTS.earlierAnswers,
      text: earlierFollowupAnswers.join("\n")
    });
  }

  if (selectedWords.length) {
    parts.push({
      key: "selectedWords",
      label: "Words chosen so far",
      weight: JOURNEY_PART_WEIGHTS.selectedWords,
      text: selectedWords.join(", ")
    });
  }

  return normalizeJourneyPartWeights(parts);
}

export function buildWeightedCoreLensInputs(journey) {
  const entries = [];
  const inputs = {};

  for (const part of buildJourneyParts(journey)) {
    for (const lens of CORE_EMBEDDING_LENSES) {
      const key = `${part.key}__${lens.key}`;
      inputs[key] = lens.build(part.text);
      entries.push({
        key,
        partKey: part.key,
        partLabel: part.label,
        partWeight: part.weight,
        lensKey: lens.key,
        lensWeight: lens.weight,
        weight: part.weight * lens.weight
      });
    }
  }

  return { inputs, entries };
}

function getSelectedWordDisplays(journey) {
  return (journey.selectedWordIds || [])
    .map((id) => journey.vocabularyById?.[id]?.display || journey.vocabularyById?.[id]?.word)
    .filter(Boolean);
}

function getFollowupAnswers(journey) {
  return (journey.responses || [])
    .filter((response) => response.type === "followup" && response.answer)
    .map((response) => response.answer);
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
        ? (microLensEmbeddings ? "weighted_core_lenses_micro_discovery_embedding" : "weighted_core_lenses_embedding")
        : (microLensEmbeddings ? "core_lenses_micro_discovery_embedding" : "core_lenses_embedding"),
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

  const scoredAll = vocabulary
    .filter((item) => item.embedding)
    .map((item) => weightedEntries.length
      ? scoreCandidateWithWeightedCoreLenses(item, weightedEntries, journeyText, baselineLensEmbeddings)
      : scoreCandidateWithCoreLenses(item, coreEmbeddings, journeyText, baselineLensEmbeddings)
    )
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
      historyWords
    });

    return buildFinalWordSections({
      scoredCandidates: pool,
      journey,
      perSection,
      method: "weighted_core_lenses_micro_discovery_embedding"
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
  let baseScore = 0;
  const lensScores = {};
  const journeyPartScores = {};

  for (const entry of weightedEntries) {
    const score = dotProduct(item.embedding, entry.embedding);
    baseScore += entry.weight * score;

    lensScores[entry.lensKey] = (lensScores[entry.lensKey] || 0) + (entry.partWeight * score);
    journeyPartScores[entry.partKey] = (journeyPartScores[entry.partKey] || 0) + (entry.lensWeight * score);
  }

  const literalPenalty = appearsInClientText(item, journeyText) ? LITERAL_TEXT_PENALTY : 0;
  const baselineScore = scoreCandidateAgainstBaseline(item, baselineLensEmbeddings);
  const specificityBonus = baselineLensEmbeddings ? (baseScore - baselineScore) * SPECIFICITY_BONUS_WEIGHT : 0;
  const baselinePenalty = baselineScore * GENERIC_BASELINE_WEIGHT;
  const score = baseScore + specificityBonus - literalPenalty - baselinePenalty;

  return {
    ...item,
    score,
    baseScore,
    literalPenalty,
    baselineScore,
    baselinePenalty,
    specificityBonus,
    lensScores,
    journeyPartScores,
    rankingMethod: "weighted_core_lens_embedding"
  };
}

function scoreCandidateWithCoreLenses(item, coreEmbeddings, journeyText, baselineLensEmbeddings = null) {
  let baseScore = 0;
  const lensScores = {};

  for (const lens of CORE_EMBEDDING_LENSES) {
    const embedding = coreEmbeddings[lens.key];
    if (!embedding) continue;
    const lensScore = dotProduct(item.embedding, embedding);
    lensScores[lens.key] = lensScore;
    baseScore += lens.weight * lensScore;
  }

  if (!Object.keys(lensScores).length && coreEmbeddings.direct) {
    baseScore = dotProduct(item.embedding, coreEmbeddings.direct);
    lensScores.direct = baseScore;
  }

  const literalPenalty = appearsInClientText(item, journeyText) ? LITERAL_TEXT_PENALTY : 0;
  const baselineScore = scoreCandidateAgainstBaseline(item, baselineLensEmbeddings);
  const specificityBonus = baselineLensEmbeddings ? (baseScore - baselineScore) * SPECIFICITY_BONUS_WEIGHT : 0;
  const baselinePenalty = baselineScore * GENERIC_BASELINE_WEIGHT;
  const score = baseScore + specificityBonus - literalPenalty - baselinePenalty;

  return {
    ...item,
    score,
    baseScore,
    literalPenalty,
    baselineScore,
    baselinePenalty,
    specificityBonus,
    lensScores,
    rankingMethod: "core_lens_embedding"
  };
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

function buildLensCandidatePool({ vocabulary, scoredAll, microLensEmbeddings, excludedIds, historyWords }) {
  const poolById = new Map();

  for (const candidate of scoredAll.slice(0, CORE_CANDIDATE_POOL_SIZE)) {
    poolById.set(candidate.id, candidate);
  }

  if (microLensEmbeddings) {
    for (const lens of MICRO_EMBEDDING_LENSES) {
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
    { key: "direct", lensKey: "direct" },
    { key: "image", lensKey: "image" },
    { key: "symbol", lensKey: "symbol" },
    { key: "scene", lensKey: "scene" }
  ];

  const groups = {};

  for (const bucket of bucketDefinitions) {
    const bucketPool = cleanNewPool
      .filter((candidate) => candidate.bestCoreLens === bucket.lensKey)
      .filter((candidate) => !globallyUsedIds.has(candidate.id))
      .filter((candidate) => !isTooSimilarByWord(candidate, globallyUsedWords))
      .filter((candidate) => !isTooSimilarToSelected(candidate, globallyUsedWords, 0.88));

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

function assignBestCoreLens(candidate) {
  const scores = candidate?.lensScores || {};
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
    bestCoreLens: bestKey,
    bestCoreLensScore: bestScore
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
