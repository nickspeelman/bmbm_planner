(() => {
// js/style-explorer.js
// Standalone client-side prototype. Vocabulary stays local; final handoff can be sent to Apps Script/Gemini.

const HANDOFF_BACKEND_URL = 'https://script.google.com/macros/s/AKfycbyFnw6x4nnQt9TW9jvrOg0IUe2mFxq_MTKcIPo_lTkTaLUc3VmjJ98CLmNAw4ASI98r6Q/exec';

const RAW_VOCABULARY = window.STYLE_VOCABULARY_RAW || [];
const VOCABULARY_PAYLOAD = window.STYLE_VOCABULARY_PAYLOAD || null;

const DEFAULT_DIMENSIONS = [
  { id: 'delicate_bold', label: 'Delicate ↔ Bold', negativePole: 'Delicate', positivePole: 'Bold' },
  { id: 'classic_unexpected', label: 'Classic ↔ Unexpected', negativePole: 'Classic', positivePole: 'Unexpected' },
  { id: 'minimal_ornate', label: 'Minimal ↔ Ornate', negativePole: 'Minimal', positivePole: 'Ornate' },
  { id: 'soft_sharp', label: 'Soft ↔ Sharp', negativePole: 'Soft', positivePole: 'Sharp' },
  { id: 'romantic_edgy', label: 'Romantic ↔ Edgy', negativePole: 'Romantic', positivePole: 'Edgy' },
  { id: 'organic_geometric', label: 'Organic ↔ Geometric', negativePole: 'Organic', positivePole: 'Geometric' },
  { id: 'playful_refined', label: 'Playful ↔ Refined', negativePole: 'Playful', positivePole: 'Refined' },
  { id: 'everyday_special_occasion', label: 'Everyday ↔ Special Occasion', negativePole: 'Everyday', positivePole: 'Special Occasion' },
  { id: 'lowkey_statement', label: 'Low-key ↔ Statement', negativePole: 'Low-key', positivePole: 'Statement' },
  { id: 'grounded_ethereal', label: 'Grounded ↔ Ethereal', negativePole: 'Grounded', positivePole: 'Ethereal' }
];

let DIMENSIONS = normalizeDimensions(VOCABULARY_PAYLOAD?.dimensions || DEFAULT_DIMENSIONS);

const COLOR_OPTIONS = [
  { id: 'soft-neutrals', label: 'Soft neutrals' },
  { id: 'warm-tones', label: 'Warm tones' },
  { id: 'cool-tones', label: 'Cool tones' },
  { id: 'black-dark-tones', label: 'Black / dark tones' },
  { id: 'colorful-playful', label: 'Colorful / playful' },
  { id: 'not-sure', label: 'Not sure' },
  { id: 'other', label: 'Other / add details' }
];

const ROUTE_REQUIRED_COPY = 'You can skip ahead, but the style quiz may be especially helpful here. It gives Michele a few more words to work with when you’re not sure how to describe the look yet.';
const ROUTE_OPTIONAL_COPY = 'What you wrote already gives Michele a helpful starting point. You can skip ahead, or try the style quiz for a few extra words that may help narrow the mood, clarify the details, and give Michele more to work from.';

const state = {
  screen: 'intro',
  preStyle: {
    colorDirections: [],
    otherColorDetails: '',
    metalPreferences: [],
    stonePreferences: [],
    styleIdeaText: ''
  },
  routing: {
    hasMeaningfulStyleText: false,
    explorerStatus: 'not-started'
  },
  selections: {
    initialPositiveIds: [],
    badFitIds: [],
    adaptiveSelectedIds: [],
    adaptiveShownIds: []
  },
  adaptive: {
    phase: 'before-midpoint',
    roundIndex: 0,
    beforeMidpointRounds: 3,
    afterMidpointRounds: 2,
    currentRoundIds: []
  },
  midpoint: {
    descriptors: [],
    responses: {}
  },
  opposingPairs: {
    shownDimensionIds: [],
    choices: {}
  },
  handoff: null,
  backend: {
    status: 'idle', // idle | loading | success | error
    result: null,
    error: '',
    hasRequested: false
  },
  clientFeedback: {
    rating: null,
    comment: ''
  },
  copied: false
};

const $ = (selector) => document.querySelector(selector);

let vocabulary = loadVocabulary();

function init() {
  injectExitModalStyles();
  if (!vocabulary?.pools?.initialScreen?.length || !vocabulary?.termsById || !Object.keys(vocabulary.termsById).length) {
    $('#integrated-style-explorer').innerHTML = '<p class="warning-note">No vocabulary loaded. Make sure js/vocabulary.js defines window.STYLE_VOCABULARY_PAYLOAD before js/style-explorer.js.</p>';
    return;
  }
  render();
}

function loadVocabulary() {
  if (VOCABULARY_PAYLOAD?.pools && VOCABULARY_PAYLOAD?.termsById) {
    return normalizeVocabularyPayload(VOCABULARY_PAYLOAD);
  }

  // Temporary fallback for the old territory-based prototype vocabulary.
  // Once the scored JSON payload is in place, this branch should no longer run.
  return normalizeVocabulary(RAW_VOCABULARY);
}

function normalizeDimensions(dimensions) {
  return (dimensions || DEFAULT_DIMENSIONS).map((dimension) => ({
    id: dimension.id,
    label: dimension.label,
    negativePole: dimension.negativePole,
    positivePole: dimension.positivePole
  }));
}

function normalizeVocabularyPayload(payload) {
  DIMENSIONS = normalizeDimensions(payload.dimensions || DEFAULT_DIMENSIONS);

  const rawTerms = Object.values(payload.termsById || {});
  const terms = rawTerms.map(normalizePayloadTerm).filter(Boolean);
  const termsById = Object.fromEntries(terms.map((term) => [term.id, term]));

  const normalizePool = (pool) => (pool || [])
    .map((term) => termsById[term.id] || normalizePayloadTerm(term))
    .filter(Boolean);

  const initialScreen = normalizePool(payload.pools.initialScreen);

  return {
    schemaVersion: payload.schemaVersion || 'unknown-payload-version',
    sourceShape: 'scored-style-vocabulary-payload',
    sourceFile: payload.sourceFile || '',
    generatedAt: payload.generatedAt || '',
    dimensions: DIMENSIONS,
    badFitLogic: payload.badFitLogic || {},
    pools: {
      initialScreen,
      badFitEligible: normalizePool(payload.pools.badFitEligible).length
        ? normalizePool(payload.pools.badFitEligible)
        : initialScreen,
      adaptiveRound: normalizePool(payload.pools.adaptiveRound),
      synopsis: normalizePool(payload.pools.synopsis),
      opposingPairCandidates: payload.pools.opposingPairCandidates || {}
    },
    termsById
  };
}

function normalizePayloadTerm(term) {
  if (!term?.id || !term?.term) return null;

  const scores = ensureScores(term.scores || {});

  return {
    ...term,
    id: String(term.id),
    term: String(term.term),
    cleanTerm: term.cleanTerm || String(term.term).trim().toLowerCase(),
    sourceTerritories: term.sourceTerritories || [],
    scores,
    metrics: term.metrics || termMetrics(scores),
    topStyleSignal: normalizePayloadTopStyleSignal(term.topStyleSignal, scores)
  };
}

function normalizePayloadTopStyleSignal(signal, scores) {
  if (signal?.dimensionId && signal?.pole) return signal;
  return topStyleSignal(scores);
}

function ensureScores(scores) {
  const out = emptyVector();
  DIMENSIONS.forEach((dimension) => {
    out[dimension.id] = Number(scores[dimension.id] || 0);
  });
  return out;
}

function normalizeVocabulary(raw) {
  const termMap = new Map();

  raw.forEach((territoryGroup) => {
    const territory = territoryGroup.territory || 'Unknown';
    const territoryVector = vectorForTerritory(territory);

    (territoryGroup.candidates || []).forEach((candidate) => {
      if (candidate.term_type === 'bad_fit') return;
      if ((candidate.client_facing_potential || '').toLowerCase() === 'low') return;

      const cleanTerm = String(candidate.term || '').trim();
      if (!cleanTerm) return;

      const id = slugify(cleanTerm);
      const existing = termMap.get(id);
      const contribution = {
        territory,
        scores: territoryVector,
        clientFacingPotential: candidate.client_facing_potential || 'medium',
        termType: candidate.term_type || 'single_word',
        riskFlags: candidate.risk_flags || [],
        notes: candidate.notes || ''
      };

      if (existing) {
        existing.sourceTerritories.push(territory);
        existing._contributions.push(contribution);
        existing.scores = averageScores(existing._contributions.map((item) => item.scores));
        existing.clientFacingPotential = preferPotential(existing.clientFacingPotential, contribution.clientFacingPotential);
        return;
      }

      termMap.set(id, {
        id,
        term: toTitleCase(cleanTerm),
        cleanTerm: cleanTerm.toLowerCase(),
        termType: candidate.term_type || 'single_word',
        clientFacingPotential: candidate.client_facing_potential || 'medium',
        sourceTerritories: [territory],
        riskFlags: candidate.risk_flags || [],
        notes: candidate.notes || '',
        scores: territoryVector,
        _contributions: [contribution]
      });
    });
  });

  const terms = Array.from(termMap.values()).map((term) => ({
    ...term,
    metrics: termMetrics(term.scores),
    topStyleSignal: topStyleSignal(term.scores)
  }));

  const singleHigh = terms.filter((term) => term.termType === 'single_word' && term.clientFacingPotential === 'high');
  const shortHigh = terms.filter((term) => term.termType !== 'single_word' && term.clientFacingPotential === 'high');
  const singleMedium = terms.filter((term) => term.termType === 'single_word' && term.clientFacingPotential !== 'low');

  const initialScreen = takeDiverseTerms([...singleHigh, ...shortHigh, ...singleMedium], 22);
  const adaptiveRound = takeDiverseTerms(terms.filter((term) => term.clientFacingPotential !== 'low'), 220);
  const synopsis = terms.filter((term) => term.termType !== 'single_word' || term.clientFacingPotential === 'high').slice(0, 180);

  return {
    schemaVersion: 'raw-prototype-normalized-0.1.0',
    sourceShape: 'candidate_vocabulary_raw territory/candidates array',
    dimensions: DIMENSIONS,
    pools: {
      initialScreen,
      badFitEligible: initialScreen,
      adaptiveRound,
      synopsis,
      opposingPairCandidates: buildOpposingPairCandidates(terms)
    },
    termsById: Object.fromEntries(terms.map((term) => [term.id, term]))
  };
}

function vectorForTerritory(territory) {
  const lower = territory.toLowerCase();
  const v = emptyVector();

  if (lower.includes('delicate') || lower.includes('airy')) {
    Object.assign(v, { delicate_bold: -0.85, soft_sharp: -0.75, minimal_ornate: -0.25, lowkey_statement: -0.35, grounded_ethereal: 0.75 });
  }
  if (lower.includes('bold') || lower.includes('statement')) {
    Object.assign(v, { delicate_bold: 0.85, lowkey_statement: 0.9, classic_unexpected: 0.35, playful_refined: -0.15 });
  }
  if (lower.includes('classic') || lower.includes('refined')) {
    Object.assign(v, { classic_unexpected: -0.85, playful_refined: 0.85, minimal_ornate: -0.2, everyday_special_occasion: 0.25 });
  }
  if (lower.includes('edgy') || lower.includes('cool')) {
    Object.assign(v, { romantic_edgy: 0.9, classic_unexpected: 0.55, soft_sharp: 0.45, lowkey_statement: 0.35 });
  }
  if (lower.includes('industrial') || lower.includes('hard') || lower.includes('hardware')) {
    Object.assign(v, { romantic_edgy: 0.75, soft_sharp: 0.75, organic_geometric: 0.65, delicate_bold: 0.65, grounded_ethereal: -0.6 });
  }
  if (lower.includes('gothic') || lower.includes('dark')) {
    Object.assign(v, { romantic_edgy: lower.includes('soft') ? -0.15 : 0.35, classic_unexpected: 0.25, everyday_special_occasion: 0.45, grounded_ethereal: 0.3, lowkey_statement: 0.25 });
  }
  if (lower.includes('playful') || lower.includes('whimsical')) {
    Object.assign(v, { playful_refined: -0.9, classic_unexpected: 0.45, lowkey_statement: 0.25, grounded_ethereal: 0.35 });
  }
  if (lower.includes('minimal') || lower.includes('clean')) {
    Object.assign(v, { minimal_ornate: -0.9, lowkey_statement: -0.65, soft_sharp: -0.2, classic_unexpected: -0.25 });
  }
  if (lower.includes('ornate') || lower.includes('detailed')) {
    Object.assign(v, { minimal_ornate: 0.9, everyday_special_occasion: 0.55, lowkey_statement: 0.35 });
  }
  if (lower.includes('celestial') || lower.includes('ethereal')) {
    Object.assign(v, { grounded_ethereal: 0.95, everyday_special_occasion: 0.35, soft_sharp: -0.45, classic_unexpected: 0.25 });
  }
  if (lower.includes('organic') || lower.includes('botanical')) {
    Object.assign(v, { organic_geometric: -0.9, grounded_ethereal: -0.2, soft_sharp: -0.45, romantic_edgy: -0.25 });
  }
  if (lower.includes('geometric') || lower.includes('architectural')) {
    Object.assign(v, { organic_geometric: 0.9, soft_sharp: 0.55, minimal_ornate: -0.1, classic_unexpected: 0.15 });
  }
  if (lower.includes('modern') || lower.includes('intentional')) {
    Object.assign(v, { classic_unexpected: 0.2, minimal_ornate: -0.45, organic_geometric: 0.35, playful_refined: 0.35 });
  }
  if (lower.includes('personal') || lower.includes('meaningful')) {
    Object.assign(v, { everyday_special_occasion: 0.45, lowkey_statement: 0.15, romantic_edgy: -0.2 });
  }
  if (lower.includes('wearable') || lower.includes('low-key')) {
    Object.assign(v, { lowkey_statement: -0.9, everyday_special_occasion: -0.75, minimal_ornate: -0.35 });
  }
  if (lower.includes('glam') || lower.includes('radiant')) {
    Object.assign(v, { everyday_special_occasion: 0.85, lowkey_statement: 0.65, minimal_ornate: 0.45, playful_refined: 0.35 });
  }

  return v;
}

function emptyVector() {
  return Object.fromEntries(DIMENSIONS.map((dimension) => [dimension.id, 0]));
}

function averageScores(scoreList) {
  const out = emptyVector();
  scoreList.forEach((scores) => {
    DIMENSIONS.forEach((dimension) => {
      out[dimension.id] += scores[dimension.id] || 0;
    });
  });
  DIMENSIONS.forEach((dimension) => {
    out[dimension.id] = clamp(out[dimension.id] / Math.max(1, scoreList.length), -1, 1);
  });
  return out;
}

function preferPotential(a, b) {
  const rank = { low: 0, medium: 1, high: 2 };
  return (rank[b] || 0) > (rank[a] || 0) ? b : a;
}

function termMetrics(scores) {
  const values = Object.values(scores);
  const maxAbsScore = Math.max(...values.map(Math.abs));
  const vectorStrength = Math.sqrt(values.reduce((sum, value) => sum + value * value, 0));
  return { maxAbsScore, vectorStrength, focusRatio: maxAbsScore / Math.max(vectorStrength, 0.0001) };
}

function topStyleSignal(scores) {
  const dimension = DIMENSIONS
    .map((item) => ({ ...item, score: scores[item.id] || 0, abs: Math.abs(scores[item.id] || 0) }))
    .sort((a, b) => b.abs - a.abs)[0];

  return {
    dimension: dimension.label,
    dimensionId: dimension.id,
    pole: dimension.score < 0 ? dimension.negativePole : dimension.positivePole,
    score: dimension.score
  };
}

function buildOpposingPairCandidates(terms) {
  const candidates = {};
  DIMENSIONS.forEach((dimension) => {
    candidates[dimension.label] = {
      [dimension.negativePole]: terms
        .filter((term) => (term.scores[dimension.id] || 0) < -0.3)
        .sort((a, b) => Math.abs(b.scores[dimension.id]) - Math.abs(a.scores[dimension.id]))
        .slice(0, 8),
      [dimension.positivePole]: terms
        .filter((term) => (term.scores[dimension.id] || 0) > 0.3)
        .sort((a, b) => Math.abs(b.scores[dimension.id]) - Math.abs(a.scores[dimension.id]))
        .slice(0, 8)
    };
  });
  return candidates;
}

function takeDiverseTerms(terms, limit) {
  const sorted = [...terms].sort((a, b) => {
    const potentialScore = ({ high: 2, medium: 1, low: 0 }[b.clientFacingPotential] || 0) - ({ high: 2, medium: 1, low: 0 }[a.clientFacingPotential] || 0);
    if (potentialScore) return potentialScore;
    return b.metrics.vectorStrength - a.metrics.vectorStrength;
  });

  const chosen = [];
  const territoryCounts = new Map();
  let pass = 0;

  while (chosen.length < limit && pass < 8) {
    sorted.forEach((term) => {
      if (chosen.length >= limit) return;
      if (chosen.some((selected) => selected.id === term.id)) return;
      const primaryTerritory = term.sourceTerritories[0] || 'Other';
      const count = territoryCounts.get(primaryTerritory) || 0;
      if (count <= pass) {
        chosen.push(term);
        territoryCounts.set(primaryTerritory, count + 1);
      }
    });
    pass += 1;
  }

  return chosen;
}


function notifyParentStyleUpdate() {
  const message = {
    type: 'BMBM_STYLE_EXPLORER_UPDATE',
    handoff: state.handoff || buildHandoff(),
    backend: state.backend,
    clientFeedback: state.clientFeedback,
    updatedAt: new Date().toISOString()
  };

  if (window.BMBMPlanner?.receiveStyleExplorerUpdate) {
    window.BMBMPlanner.receiveStyleExplorerUpdate(message);
  }
}

function notifyParentProgressUpdate() {
  if (window.BMBMPlanner?.setStyleExplorerProgress) {
    window.BMBMPlanner.setStyleExplorerProgress(globalProgressStep());
  }
}

function globalProgressStep() {
  const steps = styleScreenOrder();
  const activeIndex = Math.max(0, steps.indexOf(state.screen));
  return 10 + activeIndex;
}

function styleScreenOrder() {
  return ['intro', 'styleIdea', 'metals', 'gems', 'colors', 'routing', 'initialPositive', 'badFit', 'adaptive', 'midpoint', 'opposingPairs', 'summary'];
}

function render() {
  notifyParentProgressUpdate();
  state.copied = false;
  const root = $('#integrated-style-explorer');

  const renderers = {
    intro: renderIntro,
    styleIdea: renderStyleIdea,
    metals: renderMetals,
    gems: renderGems,
    colors: renderColors,
    routing: renderRouting,
    initialPositive: renderInitialPositive,
    badFit: renderBadFit,
    adaptive: renderAdaptive,
    midpoint: renderMidpoint,
    opposingPairs: renderOpposingPairs,
    summary: renderSummary
  };

  root.innerHTML = renderers[state.screen]();
  bindScreenEvents();

  if (state.screen === 'summary') {
    if (!state.handoff) state.handoff = buildHandoff();
    notifyParentStyleUpdate();
  }
}

function renderProgress() {
  notifyParentProgressUpdate();
}

function renderIntro() {
  return `
    <div class="style-screen-card is-active title-card">
      <p class="eyebrow">Style explorer</p>
      <h1>Let’s find your style.</h1>
      <p class="subtext">This is just a low-pressure way to help Michele understand what you’re drawn to.</p>
      <div class="mini-note">
        <p>You don’t need the perfect words. A few simple questions can help turn your answers into a useful starting point for Michele.</p>
      </div>
      <div class="button-row screen-actions">
        <button class="secondary-btn" type="button" data-main-step="9">Back</button>
        <button class="primary-btn" type="button" data-go="styleIdea">Continue</button>
      </div>
    </div>
  `;
}

const METAL_OPTIONS = [
  { id: 'yellow-gold', label: 'Yellow gold' },
  { id: 'white-gold', label: 'White gold' },
  { id: 'titanium', label: 'Titanium' },
  { id: 'no-metal-preference', label: 'No preference' },
];

const STONE_OPTIONS = [
  { id: 'diamonds', label: 'Diamonds' },
  { id: 'cz', label: 'CZ / clear sparkle' },
  { id: 'opal', label: 'Opal' },
  { id: 'pearl', label: 'Pearl' },
  { id: 'colorful-gems', label: 'Colorful gems' },
  { id: 'no-stones', label: 'No stones' },
  { id: 'no-stone-preference', label: 'No preference' },
];

function renderStyleIdea() {
  return `
    <div class="style-screen-card is-active form-card">
      <p class="eyebrow">Starting point</p>
      <h1>Do you already have a style or vibe in mind?</h1>
      <p class="subtext">This can be loose. A few words, a mood, a story, an outfit, an event, or even “I’m not sure yet” is all useful.</p>

      <div class="form-stack">
        <label class="field-label" for="style-idea-text">Tell Michele what you’re imagining <span class="optional-mark">optional</span></label>
        <textarea id="style-idea-text" class="soft-textarea" rows="5" data-field="styleIdeaText" placeholder="Examples: delicate and celestial, bold but still elegant, tiny and minimal, romantic but not too sweet, something special for my wedding…">${escapeHTML(state.preStyle.styleIdeaText)}</textarea>
      </div>

      <div class="button-row screen-actions">
        <button class="secondary-btn" type="button" data-go="intro">Back</button>
        <button class="primary-btn" type="button" data-go="metals">Continue</button>
      </div>
    </div>
  `;
}

function renderMetals() {
  return `
    <div class="style-screen-card is-active form-card">
      <p class="eyebrow">Metals</p>
      <h1>Do you have a metal preference?</h1>
      <p class="subtext">These are just preferences, not final jewelry decisions. Michele works with gold and titanium jewelry.</p>

      <div class="question-block">
        <div class="soft-chip-grid" role="group" aria-label="Metal preference">
          ${METAL_OPTIONS.map((option) => `
            <button class="soft-chip ${state.preStyle.metalPreferences.includes(option.id) ? 'is-selected' : ''}" type="button" data-metal-id="${option.id}">${option.label}</button>
          `).join('')}
        </div>
      </div>

      <div class="button-row screen-actions">
        <button class="secondary-btn" type="button" data-go="styleIdea">Back</button>
        <button class="primary-btn" type="button" data-go="gems">Continue</button>
      </div>
    </div>
  `;
}

function renderGems() {
  return `
    <div class="style-screen-card is-active form-card">
      <p class="eyebrow">Gems</p>
      <h1>What kind of stones or sparkle do you like?</h1>
      <p class="subtext">Choose anything you’re drawn to, or skip this for now.</p>

      <div class="question-block">
        <div class="soft-chip-grid" role="group" aria-label="Stone and gem preference">
          ${STONE_OPTIONS.map((option) => `
            <button class="soft-chip ${state.preStyle.stonePreferences.includes(option.id) ? 'is-selected' : ''}" type="button" data-stone-id="${option.id}">${option.label}</button>
          `).join('')}
        </div>
      </div>

      <div class="button-row screen-actions">
        <button class="secondary-btn" type="button" data-go="metals">Back</button>
        <button class="primary-btn" type="button" data-go="colors">Continue</button>
      </div>
    </div>
  `;
}

function renderColors() {
  return `
    <div class="style-screen-card is-active form-card">
      <p class="eyebrow">Colors</p>
      <h1>Are there any colors or color families you’re drawn to?</h1>
      <p class="subtext">This helps Michele understand the mood before you get into placement, anatomy, or specific jewelry.</p>

      <div class="question-block">
        <div class="soft-chip-grid" role="group" aria-label="Color direction">
          ${COLOR_OPTIONS.map((option) => `
            <button class="color-chip ${state.preStyle.colorDirections.includes(option.id) ? 'is-selected' : ''}" type="button" data-color-id="${option.id}">${option.label}</button>
          `).join('')}
        </div>
      </div>

      <div id="other-color-wrap" class="form-stack conditional-field ${state.preStyle.colorDirections.includes('other') ? '' : 'is-hidden'}">
        <label class="field-label" for="other-color-details">Add a little more detail <span class="optional-mark">optional</span></label>
        <textarea id="other-color-details" class="soft-textarea" rows="2" data-field="otherColorDetails" placeholder="Ivory and gold, deep red, forest green, soft pinks, etc.">${escapeHTML(state.preStyle.otherColorDetails)}</textarea>
      </div>

      <div class="button-row screen-actions">
        <button class="secondary-btn" type="button" data-go="gems">Back</button>
        <button class="primary-btn" type="button" data-route-style>Continue</button>
      </div>
    </div>
  `;
}

function renderRouting() {
  const hasDetails = state.routing.hasMeaningfulStyleText;
  return `
    <div class="style-screen-card is-active title-card">
      <p class="eyebrow">${hasDetails ? 'Good starting point' : 'Optional next step'}</p>
      <h1>${hasDetails ? 'Want to add a little more direction?' : 'Want to try a quick style quiz?'}</h1>
      <div class="route-card"><p>${hasDetails ? ROUTE_OPTIONAL_COPY : ROUTE_REQUIRED_COPY}</p></div>
      <div class="button-row screen-actions">
        <button class="secondary-btn" type="button" data-skip-summary>Skip to summary</button>
        <button class="primary-btn" type="button" data-start-explorer>${hasDetails ? 'Try the style quiz' : 'Take the style quiz'}</button>
      </div>
    </div>
  `;
}

function renderQuizExitAction() {
  return `
    <div class="quiz-exit-zone" aria-label="Style quiz exit option">
      <p class="mini-note">Need to move on? You can leave the quiz and keep the answers you’ve already given.</p>
      <button class="secondary-btn quiz-exit-btn" type="button" data-exit-explorer>Exit style quiz</button>
    </div>
  `;
}

function renderInitialPositive() {
  return `
    <div class="style-screen-card is-active form-card">
      <p class="eyebrow">First impressions</p>
      <h1>Pick a few words that feel close.</h1>
      <p class="subtext">Don’t think too hard. This first set is intentionally short — just enough to find an initial direction.</p>
      <div class="style-word-grid">
        ${vocabulary.pools.initialScreen.map((term) => wordButton(term, state.selections.initialPositiveIds.includes(term.id), 'positive')).join('')}
      </div>
      <div class="button-row screen-actions">
        <button class="secondary-btn" type="button" data-go="routing">Back</button>
        <button class="primary-btn" type="button" data-go="badFit">Continue</button>
      </div>
      ${renderQuizExitAction()}
    </div>
  `;
}

function renderBadFit() {
  const seen = initialScreenTermKeys();
  const terms = vocabulary.pools.badFitEligible
    .filter((term) => !seen.has(termKey(term)))
    .slice(0, 20);
  return `
    <div class="style-screen-card is-active form-card">
      <p class="eyebrow">Wrong direction</p>
      <h1>Anything here feel like the wrong direction?</h1>
      <p class="subtext">This doesn’t mean there’s anything wrong with the style — it just helps Michele understand what’s not quite you.</p>
      <div class="style-word-grid">
        ${terms.map((term) => wordButton(term, state.selections.badFitIds.includes(term.id), 'badfit')).join('')}
      </div>
      <div class="button-row screen-actions">
        <button class="secondary-btn" type="button" data-go="initialPositive">Back</button>
        <button class="primary-btn" type="button" data-begin-adaptive>Continue</button>
      </div>
      ${renderQuizExitAction()}
    </div>
  `;
}

function renderAdaptive() {
  if (!state.adaptive.currentRoundIds.length) {
    state.adaptive.currentRoundIds = chooseAdaptiveTerms();
  }
  const roundTotal = state.adaptive.phase === 'before-midpoint' ? state.adaptive.beforeMidpointRounds : state.adaptive.afterMidpointRounds;
  const terms = state.adaptive.currentRoundIds.map((id) => vocabulary.termsById[id]).filter(Boolean);
  const selected = new Set(state.selections.adaptiveSelectedIds);
  return `
    <div class="style-screen-card is-active form-card">
      <p class="eyebrow">Narrowing in</p>
      <p class="round-counter">Round ${state.adaptive.roundIndex + 1} of ${roundTotal}</p>
      <h1>Let’s narrow it in.</h1>
      <p class="subtext">Tap any that feel right. Skip anything that doesn’t. These should start to get more specific as your style direction comes into focus.</p>
      <div class="adaptive-round-card">
        ${terms.map((term) => wordButton(term, selected.has(term.id), 'adaptive', true)).join('')}
      </div>
      <div class="button-row screen-actions">
        <button class="secondary-btn" type="button" data-adaptive-skip>Skip these</button>
        <button class="primary-btn" type="button" data-next-adaptive>Continue</button>
      </div>
      ${renderQuizExitAction()}
    </div>
  `;
}

function renderMidpoint() {
  if (!state.midpoint.descriptors.length) {
    state.midpoint.descriptors = buildMidpointDescriptors();
  }
  return `
    <div class="style-screen-card is-active form-card">
      <p class="eyebrow">Vibe check</p>
      <h1>Here’s the style direction so far…</h1>
      <p class="subtext">Nothing is locked in. This is a steering moment, not a final summary.</p>
      <div class="mini-note">
        <p>Use <strong>More</strong> when you want to lean harder into that word, <strong>Good</strong> when it feels about right, and <strong>Less</strong> when it is close but too strong or not quite you.</p>
      </div>
      <div class="vibe-list">
        ${state.midpoint.descriptors.map((descriptor) => `
          <div class="vibe-row">
            <p class="vibe-label">${escapeHTML(descriptor.term)}</p>
            <div class="vibe-controls" role="group" aria-label="Adjust ${escapeHTML(descriptor.term)}">
              ${['less', 'good', 'more'].map((value) => `
                <button class="vibe-option ${state.midpoint.responses[descriptor.id] === value ? 'is-selected' : ''}" type="button" data-vibe-id="${descriptor.id}" data-vibe-response="${value}">${capitalize(value)}</button>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <div class="button-row screen-actions">
        <button class="secondary-btn" type="button" data-go="adaptive">Back</button>
        <button class="primary-btn" type="button" data-after-midpoint>Continue</button>
      </div>
      ${renderQuizExitAction()}
    </div>
  `;
}

function renderOpposingPairs() {
  if (!state.opposingPairs.shownDimensionIds.length) {
    state.opposingPairs.shownDimensionIds = choosePairDimensions();
  }
  return `
    <div class="style-screen-card is-active form-card">
      <p class="eyebrow">Final direction</p>
      <h1>A few last either/or choices.</h1>
      <p class="subtext">Choose what feels closer. You can leave something balanced if neither side feels quite right.</p>
      <div class="pair-list">
        ${state.opposingPairs.shownDimensionIds.map((dimensionId) => pairRow(dimensionId)).join('')}
      </div>
      <div class="button-row screen-actions">
        <button class="secondary-btn" type="button" data-go="adaptive">Back</button>
        <button class="primary-btn" type="button" data-finish>Submit</button>
      </div>
      ${renderQuizExitAction()}
    </div>
  `;
}

function renderSummary() {
  return `
    <div class="style-screen-card is-active review-card">
      <p class="eyebrow">Style</p>
      <h1>Style.</h1>
      <p class="subtext">Here’s a quick visual readout of your choices. Michele will get a fuller profile later, but this gives you a chance to tell her what feels right or off.</p>

      ${renderClientStyleProfile()}

      <div class="button-row screen-actions">
        <button class="secondary-btn" type="button" data-go="${summaryBackDestination()}">Back</button>
        <button class="primary-btn" type="button" data-review-full-plan>Review My Full Plan</button>
      </div>
    </div>
  `;
}

function summaryBackDestination() {
  return state.routing.explorerStatus === 'completed' ? 'opposingPairs' : 'routing';
}

function renderClientStyleProfile() {
  const vector = currentStyleVector();
  const preferenceTrayItems = buildPreferenceTrayItems();
  const styleNotes = buildStrongestStyleNotes(vector);
  const keywords = closestProfileKeywords(vector, 10);

  return `
    <section class="client-summary-card style-profile-card" aria-live="polite">
      ${renderPreferenceTray(preferenceTrayItems)}
      ${renderStrongestStyleNotes(styleNotes)}
      ${state.routing.explorerStatus === 'completed' ? renderKeywordConstellation(keywords) : ''}
      ${renderSummaryFeedback()}
    </section>
  `;
}

function buildPreferenceTrayItems() {
  const items = [];

  const styleIdeaText = state.preStyle.styleIdeaText.trim();

  if (styleIdeaText) {
    items.push({
      label: 'Style idea',
      values: [styleIdeaText],
      isText: true
    });
  }

  const colorLabels = state.preStyle.colorDirections
    .filter((id) => id !== 'other')
    .map((id) => COLOR_OPTIONS.find((item) => item.id === id)?.label || id);

  if (colorLabels.length) {
    items.push({
      label: 'Colors',
      values: colorLabels
    });
  }

  const otherColorDetails = state.preStyle.otherColorDetails.trim();

  if (otherColorDetails) {
    items.push({
      label: 'Color note',
      values: [otherColorDetails],
      isText: true
    });
  }

  const metalLabels = state.preStyle.metalPreferences
    .map((id) => METAL_OPTIONS.find((item) => item.id === id)?.label || id);

  if (metalLabels.length) {
    items.push({
      label: 'Metals',
      values: metalLabels
    });
  }

  const stoneLabels = state.preStyle.stonePreferences
    .map((id) => STONE_OPTIONS.find((item) => item.id === id)?.label || id);

  if (stoneLabels.length) {
    items.push({
      label: 'Stones',
      values: stoneLabels
    });
  }

  return items;
}


function renderCollapsibleProfileSection({ title, className = '', body }) {
  return `
    <details class="profile-section profile-collapsible-section ${className}" open>
      <summary class="profile-section-summary">
        <span class="eyebrow summary-eyebrow">${escapeHTML(title)}</span>
        <span class="profile-section-toggle" aria-hidden="true"></span>
      </summary>
      <div class="profile-section-body">
        ${body}
      </div>
    </details>
  `;
}

function renderPreferenceTray(items) {
  if (!items.length) return '';

  const body = `
    <div class="preference-tray-grid">
      ${items.map((item) => `
        <div class="preference-tray-item ${item.isText ? 'is-text-note' : ''}">
          <h3>${escapeHTML(item.label)}</h3>
          <div class="preference-chip-row">
            ${item.values.map((value) => `
              <span class="profile-chip">${escapeHTML(value)}</span>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;

  return renderCollapsibleProfileSection({
    title: 'Your starting points',
    className: 'preference-tray',
    body
  });
}

function buildStrongestStyleNotes(vector) {
  const strongestPoles = DIMENSIONS
    .map((dimension) => {
      const score = vector[dimension.id] || 0;

      return {
        id: dimension.id,
        label: dimension.label,
        score,
        abs: Math.abs(score),
        pole: score < 0 ? dimension.negativePole : dimension.positivePole
      };
    })
    .filter((item) => item.abs >= 0.15)
    .sort((a, b) => b.abs - a.abs)
    .slice(0, 6);

  return [
    {
      label: 'Primary',
      poles: strongestPoles.slice(0, 2)
    },
    {
      label: 'Supporting',
      poles: strongestPoles.slice(2, 4)
    },
    {
      label: 'Accent',
      poles: strongestPoles.slice(4, 6)
    }
  ].filter((group) => group.poles.length);
}

function renderStrongestStyleNotes(groups) {
  if (!groups.length) return '';

  const body = `
    <div class="style-note-list">
      ${groups.map((group) => `
        <div class="style-note-row">
          <span class="style-note-label">${escapeHTML(group.label)}</span>
          <span class="style-note-value">
            ${group.poles.map((item) => escapeHTML(item.pole)).join(' • ')}
          </span>
        </div>
      `).join('')}
    </div>
  `;

  return renderCollapsibleProfileSection({
    title: 'Your strongest style notes',
    className: 'strongest-style-notes',
    body
  });
}

function closestProfileKeywords(vector, limit = 10) {
  const selectedIds = new Set([
    ...state.selections.initialPositiveIds,
    ...state.selections.adaptiveSelectedIds
  ]);

  const seenTerms = new Set();

  return vocabulary.pools.synopsis
    .map((term) => ({
      term,
      score: cosineSimilarity(vector, term.scores),
      wasSelected: selectedIds.has(term.id)
    }))
    .filter((item) => Number.isFinite(item.score))
    .sort((a, b) => {
      if (b.wasSelected !== a.wasSelected) {
        return Number(b.wasSelected) - Number(a.wasSelected);
      }

      return b.score - a.score;
    })
    .filter((item) => {
      const key = termKey(item.term);
      if (seenTerms.has(key)) return false;
      seenTerms.add(key);
      return true;
    })
    .slice(0, limit);
}

function renderKeywordConstellation(items) {
  if (!items.length) return '';

  const body = `
    <div class="constellation-cloud">
      ${items.map((item, index) => `
        <span class="constellation-word constellation-word-${index + 1} ${item.wasSelected ? 'was-selected' : 'was-inferred'}">
          ${escapeHTML(item.term.term)}
        </span>
      `).join('')}
    </div>
  `;

  return renderCollapsibleProfileSection({
    title: 'Words in your orbit',
    className: 'keyword-constellation',
    body
  });
}

function renderGeneratedStyleSummary() {
  if (state.backend.status === 'loading') {
    return `
      <section class="client-summary-card is-loading" aria-live="polite">
        <div class="thinking-row">
          <span class="thinking-dot" aria-hidden="true"></span>
          <div>
            <h2>Building your style…</h2>
            <p>Taking your word choices and shaping them into a short style summary.</p>
          </div>
        </div>
      </section>
    `;
  }

  if (state.backend.status === 'error') {
    return `
      <section class="client-summary-card error-card" aria-live="polite">
        <h2>We couldn’t build your style yet.</h2>
        <p>${escapeHTML(state.backend.error || 'Something went wrong while building your style.')}</p>
        <button class="primary-btn" type="button" data-retry-handoff>Try again</button>
      </section>
    `;
  }

  if (state.backend.status === 'success' && state.backend.result) {
    const result = normalizeBackendSummaryResult(state.backend.result);
    const clientSummary = getClientFacingSummary(result);

    if (!clientSummary) {
      return `
        <section class="client-summary-card error-card" aria-live="polite">
          <h2>That didn’t come through quite right.</h2>
          <p>Your answers are still saved on this page. Try again and we’ll rebuild your style.</p>
          <button class="primary-btn" type="button" data-retry-handoff>Try again</button>
        </section>
      `;
    }

    return `
      <section class="client-summary-card" aria-live="polite">
        <p class="eyebrow summary-eyebrow">Style</p>
        <h2>${escapeHTML(clientSummary)}</h2>
        ${renderSummaryFeedback()}
      </section>
    `;
  }

  return `
    <section class="client-summary-card" aria-live="polite">
      <h2>Ready to build your style.</h2>
      <p>Tap below to submit your answers and build your style.</p>
      <button class="primary-btn" type="button" data-send-handoff>Submit</button>
    </section>
  `;
}


function normalizeBackendSummaryResult(result) {
  // Apps Script responses are sometimes returned directly and sometimes wrapped.
  // Support the common wrappers, but keep the final renderer strict about using
  // the client-facing field only.
  return result?.data || result?.result || result?.summary || result || {};
}

function getClientFacingSummary(result) {
  // Do NOT fall back to Michele/piercer/internal summaries here. If this field is
  // missing, it is safer to show a recoverable error than to show Michele's notes
  // to the client.
  return result?.clientStyleSummary || result?.clientSummary || result?.client_style_summary || '';
}

const SUMMARY_RATING_OPTIONS = [
  { id: 'way-off', label: 'Way off' },
  { id: 'pretty-good', label: 'Pretty good' },
  { id: 'nailed-it', label: 'Nailed it' }
];

function renderSummaryFeedback() {
  return `
    <div class="summary-feedback">
      <p class="feedback-label">Does this profile feel right?</p>

  

      <div class="rating-row star-rating-row" role="group" aria-label="Rate this style profile from 1 star, way off, to 5 stars, nailed it">
        ${[1, 2, 3, 4, 5].map((rating) => `
          <button
            class="rating-button star-rating-button ${Number(state.clientFeedback.rating) >= rating ? 'is-selected' : ''}"
            type="button"
            data-summary-rating="${rating}"
            aria-label="${rating} out of 5 stars"
          >
            ★
          </button>
        `).join('')}
      </div>

          <div class="rating-scale-labels" aria-hidden="true">
        <span>Way off</span>
        <span>Nailed it</span>
      </div>

      <label class="field-label" for="summary-comment">Anything you’d change or add? <span class="optional-mark">optional</span></label>
      <textarea id="summary-comment" class="soft-textarea" rows="3" data-feedback-comment placeholder="Example: more delicate, less dark, more colorful, not quite bold enough…">${escapeHTML(state.clientFeedback.comment)}</textarea>
    </div>
  `;
}

function summaryList(title, items) {
  return `
    <div class="returned-summary-list">
      <h3>${escapeHTML(title)}</h3>
      <ul>
        ${items.map((item) => `<li>${escapeHTML(item)}</li>`).join('')}
      </ul>
    </div>
  `;
}

function wordButton(term, isSelected, mode, showMeta = false) {
  const selectedClass = isSelected ? (mode === 'badfit' ? 'is-negative-selected' : 'is-selected') : '';
  return `
    <button class="word-chip ${selectedClass}" type="button" data-word-mode="${mode}" data-term-id="${term.id}" aria-pressed="${isSelected ? 'true' : 'false'}">
      ${escapeHTML(term.term)}
      
    </button>
  `;
}

function pairRow(dimensionId) {
  const dimension = DIMENSIONS.find((item) => item.id === dimensionId);
  const choice = state.opposingPairs.choices[dimensionId]?.selectedPole || 'middle';
  return `
    <div class="pair-row">
      <p class="pair-label">${escapeHTML(dimension.label)}</p>
      <div class="pair-controls" role="group" aria-label="${escapeHTML(dimension.label)}">
        <button class="pair-choice ${choice === 'negative' ? 'is-selected' : ''}" type="button" data-pair-dimension="${dimension.id}" data-pair-choice="negative">${escapeHTML(dimension.negativePole)}</button>
        <button class="pair-choice ${choice === 'middle' ? 'is-selected' : ''}" type="button" data-pair-dimension="${dimension.id}" data-pair-choice="middle">Balanced</button>
        <button class="pair-choice ${choice === 'positive' ? 'is-selected' : ''}" type="button" data-pair-dimension="${dimension.id}" data-pair-choice="positive">${escapeHTML(dimension.positivePole)}</button>
      </div>
    </div>
  `;
}

async function sendHandoffToBackend(handoffData) {
  const response = await fetch(HANDOFF_BACKEND_URL, {
    method: 'POST',
    redirect: 'follow',
    headers: {
      // text/plain keeps this as a simple POST for Apps Script and avoids a CORS preflight.
      'Content-Type': 'text/plain;charset=utf-8'
    },
    body: JSON.stringify(handoffData)
  });

  if (!response.ok) {
    throw new Error(`Backend returned ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function requestHandoffSummary() {
  if (!state.handoff) state.handoff = buildHandoff();

  state.backend.status = 'loading';
  state.backend.error = '';
  state.backend.result = null;
  state.backend.hasRequested = true;
  render();

  try {
    const result = await sendHandoffToBackend(state.handoff);
    state.backend.status = 'success';
    state.backend.result = result;
  } catch (error) {
    state.backend.status = 'error';
    state.backend.error = error?.message || 'The style could not be generated.';
  }

  render();
  notifyParentStyleUpdate();
}

function enrichedHandoffForCopy() {
  return {
    ...state.handoff,
    generatedSummary: state.backend.result,
    clientSummaryFeedback: state.clientFeedback
  };
}

function bindScreenEvents() {
  document.querySelectorAll('[data-go]').forEach((button) => {
    button.addEventListener('click', () => go(button.dataset.go));
  });

  document.querySelectorAll('[data-main-step]').forEach((button) => {
    button.addEventListener('click', () => {
      persistTextFields();
      if (!state.handoff) state.handoff = buildHandoff();
      notifyParentStyleUpdate();
      window.BMBMPlanner?.goToStep(Number(button.dataset.mainStep));
    });
  });

  const reviewFullPlan = $('[data-review-full-plan]');
  if (reviewFullPlan) {
    reviewFullPlan.addEventListener('click', () => {
      persistTextFields();
      persistFeedbackFields();
      if (!state.handoff) state.handoff = buildHandoff();
      notifyParentStyleUpdate();
      window.BMBMPlanner?.goToStep(22);
    });
  }

  document.querySelectorAll('[data-color-id]').forEach((button) => {
    button.addEventListener('click', () => {
      toggleArrayValue(state.preStyle.colorDirections, button.dataset.colorId);
      render();
    });
  });

    document.querySelectorAll('[data-metal-id]').forEach((button) => {
    button.addEventListener('click', () => {
      togglePreferenceWithExclusiveOption(
        state.preStyle.metalPreferences,
        button.dataset.metalId,
        ['no-metal-preference']
      );
      render();
    });
  });

  document.querySelectorAll('[data-stone-id]').forEach((button) => {
    button.addEventListener('click', () => {
      togglePreferenceWithExclusiveOption(
        state.preStyle.stonePreferences,
        button.dataset.stoneId,
        ['no-stones', 'no-stone-preference']
      );
      render();
    });
  });

  document.querySelectorAll('[data-field]').forEach((field) => {
    field.addEventListener('input', () => {
      state.preStyle[field.dataset.field] = field.value;
    });
  });

  const routeButton = $('[data-route-style]');
  if (routeButton) {
    routeButton.addEventListener('click', () => {
      persistTextFields();
      state.routing.hasMeaningfulStyleText = hasMeaningfulText(state.preStyle.styleIdeaText);
      go('routing');
    });
  }

  const startExplorer = $('[data-start-explorer]');
  if (startExplorer) {
    startExplorer.addEventListener('click', () => {
      state.routing.explorerStatus = 'in-progress';
      go('initialPositive');
    });
  }

  const skipSummary = $('[data-skip-summary]');
    if (skipSummary) {
      skipSummary.addEventListener('click', () => {
        state.routing.explorerStatus = 'skipped';
        go('summary');
      });
    }

  document.querySelectorAll('[data-exit-explorer]').forEach((button) => {
    button.addEventListener('click', confirmExitExplorer);
  });

    document.querySelectorAll('[data-term-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.termId;
      const mode = button.dataset.wordMode;
      if (mode === 'positive') toggleArrayValue(state.selections.initialPositiveIds, id);
      if (mode === 'badfit') toggleArrayValue(state.selections.badFitIds, id);
      if (mode === 'adaptive') toggleArrayValue(state.selections.adaptiveSelectedIds, id);
      render();
    });
  });

  const beginAdaptive = $('[data-begin-adaptive]');
  if (beginAdaptive) {
    beginAdaptive.addEventListener('click', () => {
      resetAdaptive('before-midpoint');
      go('adaptive');
    });
  }

  const skipAdaptive = $('[data-adaptive-skip]');
  if (skipAdaptive) skipAdaptive.addEventListener('click', advanceAdaptive);

  const nextAdaptive = $('[data-next-adaptive]');
  if (nextAdaptive) nextAdaptive.addEventListener('click', advanceAdaptive);

  document.querySelectorAll('[data-vibe-id]').forEach((button) => {
    button.addEventListener('click', () => {
      state.midpoint.responses[button.dataset.vibeId] = button.dataset.vibeResponse;
      render();
    });
  });

  const afterMidpoint = $('[data-after-midpoint]');
  if (afterMidpoint) {
    afterMidpoint.addEventListener('click', () => {
      resetAdaptive('after-midpoint');
      go('adaptive');
    });
  }

  document.querySelectorAll('[data-pair-dimension]').forEach((button) => {
    button.addEventListener('click', () => {
      const dimensionId = button.dataset.pairDimension;
      const selectedPole = button.dataset.pairChoice;
      state.opposingPairs.choices[dimensionId] = { selectedPole, intensity: selectedPole === 'middle' ? 0 : selectedPole === 'negative' ? -1 : 1 };
      render();
    });
  });

  const finish = $('[data-finish]');
  if (finish) {
    finish.addEventListener('click', () => {
      state.routing.explorerStatus = 'completed';
      go('summary');
    });
  }

  const sendHandoff = $('[data-send-handoff]');
  if (sendHandoff) sendHandoff.addEventListener('click', requestHandoffSummary);

  const retryHandoff = $('[data-retry-handoff]');
  if (retryHandoff) retryHandoff.addEventListener('click', requestHandoffSummary);

  document.querySelectorAll('[data-summary-rating]').forEach((button) => {
    button.addEventListener('click', () => {
      state.clientFeedback.rating = button.dataset.summaryRating;
      render();
      notifyParentStyleUpdate();
    });
  });

  const feedbackComment = $('[data-feedback-comment]');
  if (feedbackComment) {
    feedbackComment.addEventListener('input', () => {
      state.clientFeedback.comment = feedbackComment.value;
      notifyParentStyleUpdate();
    });
  }

  const copyButton = $('[data-copy-json]');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      persistFeedbackFields();
      const json = JSON.stringify(enrichedHandoffForCopy(), null, 2);
      try {
        await navigator.clipboard.writeText(json);
        $('#copy-status')?.classList.remove('is-hidden');
      } catch {
        window.prompt('Copy this handoff object:', json);
      }
    });
  }

  const resetButton = $('[data-reset]');
  if (resetButton) resetButton.addEventListener('click', () => window.location.reload());
}

function confirmExitExplorer() {
  persistTextFields();
  showExitExplorerModal();
}

function showExitExplorerModal() {
  const existingModal = document.querySelector('[data-exit-modal]');
  if (existingModal) existingModal.remove();

  const previouslyFocused = document.activeElement;
  const modal = document.createElement('div');
  modal.className = 'exit-modal-backdrop';
  modal.setAttribute('data-exit-modal', '');

  modal.innerHTML = `
    <div class="exit-modal-card" role="dialog" aria-modal="true" aria-labelledby="exit-modal-title" aria-describedby="exit-modal-description">
      <p class="eyebrow">Leave style quiz?</p>
      <h2 id="exit-modal-title">Do you want to exit the style quiz?</h2>
      <p id="exit-modal-description" class="subtext">
        Michele can still make a helpful style profile from what you’ve already shared, especially if you typed in any details at the beginning. But finishing the quiz gives her more clues, so the profile will usually be stronger if you keep going.
      </p>
      <div class="button-row exit-modal-actions">
        <button class="secondary-btn" type="button" data-cancel-exit>Keep going</button>
        <button class="primary-btn exit-confirm-btn" type="button" data-confirm-exit>Exit quiz</button>
      </div>
    </div>
  `;

  const closeModal = () => {
    modal.remove();
    if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
      previouslyFocused.focus();
    }
  };

  modal.querySelector('[data-cancel-exit]')?.addEventListener('click', closeModal);
  modal.querySelector('[data-confirm-exit]')?.addEventListener('click', () => {
    modal.remove();
    state.routing.explorerStatus = 'exited';
    go('summary');
  });

  modal.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });

  document.body.appendChild(modal);
  modal.querySelector('[data-cancel-exit]')?.focus();
}

function injectExitModalStyles() {
  if (document.querySelector('#style-explorer-exit-modal-styles')) return;

  const style = document.createElement('style');
  style.id = 'style-explorer-exit-modal-styles';
  style.textContent = `
    .exit-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: grid;
      place-items: center;
      padding: 18px;
      background: rgba(47, 39, 35, 0.42);
      backdrop-filter: blur(4px);
    }

    .exit-modal-card {
      width: min(100%, 440px);
      padding: 22px;
      border: 1px solid rgba(255, 255, 255, 0.75);
      border-radius: var(--radius-lg, 28px);
      background: var(--card, #fffaf6);
      color: var(--text, #2f2723);
      box-shadow: var(--shadow, 0 18px 60px rgba(83, 58, 46, 0.15));
      animation: cardIn 180ms ease both;
    }

    .exit-modal-card h2 {
      margin: 0;
      font-size: 1.35rem;
      line-height: 1.08;
      letter-spacing: -0.03em;
    }

    .exit-modal-card .subtext {
      margin-bottom: 0;
    }

    .exit-modal-actions {
      margin-top: 18px;
    }

    .exit-confirm-btn {
      background: #8c3f45;
    }

    @media (max-width: 420px) {
      .exit-modal-actions {
        grid-template-columns: 1fr !important;
      }
    }
  `;
  document.head.appendChild(style);
}

function persistFeedbackFields() {
  const feedbackComment = $('[data-feedback-comment]');
  if (feedbackComment) state.clientFeedback.comment = feedbackComment.value;
}

function persistTextFields() {
  document.querySelectorAll('[data-field]').forEach((field) => {
    state.preStyle[field.dataset.field] = field.value;
  });
}

function go(screen) {
  state.screen = screen;
  state.handoff = null;
  render();
}

function resetAdaptive(phase) {
  state.adaptive.phase = phase;
  state.adaptive.roundIndex = 0;
  state.adaptive.currentRoundIds = [];
}

function advanceAdaptive() {
  state.selections.adaptiveShownIds = unique([...state.selections.adaptiveShownIds, ...state.adaptive.currentRoundIds]);
  const limit = state.adaptive.phase === 'before-midpoint' ? state.adaptive.beforeMidpointRounds : state.adaptive.afterMidpointRounds;
  state.adaptive.roundIndex += 1;
  state.adaptive.currentRoundIds = [];

  if (state.adaptive.roundIndex >= limit) {
    if (state.adaptive.phase === 'before-midpoint') go('midpoint');
    else go('opposingPairs');
    return;
  }

  render();
}

function chooseAdaptiveTerms() {
  const vector = currentStyleVector();
  const seen = alreadySeenTermKeys();

  const scored = vocabulary.pools.adaptiveRound
  .filter((term) => !seen.has(termKey(term)))
    .map((term, index) => ({
      term,
      index,
      signal: term.topStyleSignal?.dimensionId || 'unknown',
      score: cosineSimilarity(vector, term.scores) + varietyBoost(term, index)
    }))
    .sort((a, b) => b.score - a.score);

  const chosen = [];
  const usedSignals = new Set();

  // First pass: stay close to the working vector, but avoid repeating the same strongest dimension.
  scored.slice(0, 40).forEach((item) => {
    if (chosen.length >= 5) return;
    if (usedSignals.has(item.signal)) return;
    chosen.push(item);
    usedSignals.add(item.signal);
  });

  // Second pass: fill with the strongest remaining terms.
  scored.forEach((item) => {
    if (chosen.length >= 5) return;
    if (chosen.some((selected) => selected.term.id === item.term.id)) return;
    chosen.push(item);
  });

  return chosen.map((item) => item.term.id).slice(0, 5);
}

function varietyBoost(term, index) {
  const previouslySelectedTerms = [
    ...state.selections.initialPositiveIds,
    ...state.selections.adaptiveSelectedIds
  ]
    .map((id) => vocabulary.termsById[id])
    .filter(Boolean);

  const sameSignalPenalty = previouslySelectedTerms.some((selected) =>
    selected.topStyleSignal?.dimensionId === term.topStyleSignal?.dimensionId
  ) ? -0.08 : 0.04;

  const closestSimilarity = previouslySelectedTerms.length
    ? Math.max(...previouslySelectedTerms.map((selected) => cosineSimilarity(term.scores, selected.scores)))
    : 0;

  const nearDuplicatePenalty = closestSimilarity >= 0.94 ? -0.18 : closestSimilarity >= 0.88 ? -0.08 : 0.04;

  return sameSignalPenalty + nearDuplicatePenalty + ((index % 11) * 0.002);
}

function currentStyleVector() {
  let vector = emptyVector();

  vector = addTermsToVector(vector, state.selections.initialPositiveIds, 1);
  vector = addTermsToVector(vector, state.selections.badFitIds, -0.75);
  vector = addTermsToVector(vector, state.selections.adaptiveSelectedIds, 1);

  state.midpoint.descriptors.forEach((descriptor) => {
    const response = state.midpoint.responses[descriptor.id];
    if (response === 'more') vector = addVector(vector, descriptor.scores, 0.45);
    if (response === 'less') vector = addVector(vector, descriptor.scores, -0.45);
  });

  Object.entries(state.opposingPairs.choices).forEach(([dimensionId, choice]) => {
    vector[dimensionId] = clamp((vector[dimensionId] || 0) + (choice.intensity || 0) * 0.55, -1, 1);
  });

  return normalizeVector(vector);
}

function addTermsToVector(vector, ids, weight) {
  let next = { ...vector };
  ids.forEach((id) => {
    const term = vocabulary.termsById[id];
    if (term) next = addVector(next, term.scores, weight);
  });
  return next;
}

function addVector(vector, addition, weight) {
  const next = { ...vector };
  DIMENSIONS.forEach((dimension) => {
    next[dimension.id] = (next[dimension.id] || 0) + (addition[dimension.id] || 0) * weight;
  });
  return next;
}

function normalizeVector(vector) {
  const max = Math.max(1, ...Object.values(vector).map((value) => Math.abs(value)));
  const next = {};
  DIMENSIONS.forEach((dimension) => {
    next[dimension.id] = round(clamp((vector[dimension.id] || 0) / max, -1, 1));
  });
  return next;
}

function buildMidpointDescriptors() {
  const vector = currentStyleVector();
  const seen = alreadySeenTermKeys();

  const nearbySynopsis = vocabulary.pools.synopsis
    .filter((term) => !seen.has(termKey(term)))
    .map((term) => ({ term, score: cosineSimilarity(vector, term.scores) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((item) => item.term);

  return nearbySynopsis
    .slice(0, 4)
    .filter(Boolean);
}

function choosePairDimensions() {
  const vector = currentStyleVector();
  const sorted = DIMENSIONS
    .map((dimension) => ({ id: dimension.id, abs: Math.abs(vector[dimension.id] || 0) }))
    .sort((a, b) => b.abs - a.abs);

  const strong = sorted.slice(0, 3).map((item) => item.id);
  const uncertain = sorted.slice().reverse().slice(0, 2).map((item) => item.id);
  return unique([...strong, ...uncertain]).slice(0, 5);
}

function buildHandoff() {
  const finalVector = currentStyleVector();
  const selectedColorDirections = state.preStyle.colorDirections.map((id) => COLOR_OPTIONS.find((item) => item.id === id)?.label || id);
  const selectedMetalPreferences = state.preStyle.metalPreferences.map((id) =>
    METAL_OPTIONS.find((item) => item.id === id)?.label || id
  );

  const selectedStonePreferences = state.preStyle.stonePreferences.map((id) =>
    STONE_OPTIONS.find((item) => item.id === id)?.label || id
  );
  const strongestDimensions = DIMENSIONS
    .map((dimension) => ({
      id: dimension.id,
      label: dimension.label,
      score: finalVector[dimension.id] || 0,
      absScore: Math.abs(finalVector[dimension.id] || 0),
      pole: (finalVector[dimension.id] || 0) < 0 ? dimension.negativePole : dimension.positivePole
    }))
    .filter((item) => Math.abs(item.score) >= 0.35)
    .sort((a, b) => Math.abs(b.score) - Math.abs(a.score))
    .slice(0, 5);

  const ambiguousOrMixedDimensions = DIMENSIONS
    .map((dimension) => ({ id: dimension.id, label: dimension.label, score: finalVector[dimension.id] || 0 }))
    .filter((item) => Math.abs(item.score) < 0.25)
    .slice(0, 5);

  const selectedIds = unique([
    ...state.selections.initialPositiveIds,
    ...state.selections.adaptiveSelectedIds,
    ...state.midpoint.descriptors.map((term) => term.id)
  ]);

  const synopsisFriendlySelectedTerms = selectedIds
    .map((id) => vocabulary.termsById[id])
    .filter(Boolean)
    .sort((a, b) => cosineSimilarity(finalVector, b.scores) - cosineSimilarity(finalVector, a.scores))
    .slice(0, 12)
    .map(termForHandoff);

  return {
    selectedColorDirections,
    otherColorDetails: state.preStyle.otherColorDetails.trim(),
    selectedMetalPreferences,
    selectedStonePreferences,
    freeTextStyleIdea: state.preStyle.styleIdeaText.trim(),
    styleExplorerStatus: state.routing.explorerStatus,
    positiveInitialWords: idsToTerms(state.selections.initialPositiveIds),
    badFitWords: idsToTerms(state.selections.badFitIds),
    adaptiveWordsSelected: idsToTerms(state.selections.adaptiveSelectedIds),
    midpointVibeCheck: {
      descriptors: state.midpoint.descriptors.map(termForHandoff),
      responses: state.midpoint.responses
    },
    opposingPairChoices: Object.fromEntries(Object.entries(state.opposingPairs.choices).map(([dimensionId, choice]) => {
      const dimension = DIMENSIONS.find((item) => item.id === dimensionId);
      return [dimensionId, { ...choice, label: dimension?.label, selectedLabel: labelForPairChoice(dimension, choice.selectedPole) }];
    })),
    finalCalculatedStyleVector: finalVector,
    strongestDimensions,
    ambiguousOrMixedDimensions,
    synopsisFriendlySelectedTerms,
    vocabularySource: vocabulary.sourceShape,
    vocabularySchemaVersion: vocabulary.schemaVersion,
    vocabularySourceFile: vocabulary.sourceFile || '',
    generatedAt: new Date().toISOString()
  };
}

function readableSummary(handoff) {
  return `
    <dl class="review-list">
      ${reviewRow('Colors', handoff.selectedColorDirections.join(', ') || 'None selected')}
      ${reviewRow('Style idea', handoff.freeTextStyleIdea || 'Not provided')}
      ${reviewRow('Style Quiz Status', handoff.styleExplorerStatus)}
      ${reviewRow('Positive words', handoff.positiveInitialWords.map((item) => item.term).join(', ') || 'None')}
      ${reviewRow('Wrong direction', handoff.badFitWords.map((item) => item.term).join(', ') || 'None')}
      ${reviewRow('Adaptive picks', handoff.adaptiveWordsSelected.map((item) => item.term).join(', ') || 'None')}
      ${reviewRow('Strongest dimensions', handoff.strongestDimensions.map((item) => item.pole).join(', ') || 'None yet')}
    </dl>
  `;
}

function reviewRow(label, value) {
  return `<div class="review-row"><dt>${escapeHTML(label)}</dt><dd>${escapeHTML(value)}</dd></div>`;
}

function idsToTerms(ids) {
  return ids.map((id) => vocabulary.termsById[id]).filter(Boolean).map(termForHandoff);
}

function termForHandoff(term) {
  return {
    id: term.id,
    term: term.term,
    topStyleSignal: term.topStyleSignal,
    metrics: term.metrics
  };
}

function labelForPairChoice(dimension, selectedPole) {
  if (!dimension) return selectedPole;
  if (selectedPole === 'negative') return dimension.negativePole;
  if (selectedPole === 'positive') return dimension.positivePole;
  return 'Balanced';
}

function hasMeaningfulText(value) {
  const trimmed = String(value || '').trim();
  const words = trimmed.split(/\s+/).filter(Boolean);
  return trimmed.length >= 100 || words.length >= 12;
}

function cosineSimilarity(a, b) {
  let dot = 0;
  let magA = 0;
  let magB = 0;
  DIMENSIONS.forEach((dimension) => {
    const x = a[dimension.id] || 0;
    const y = b[dimension.id] || 0;
    dot += x * y;
    magA += x * x;
    magB += y * y;
  });
  if (!magA || !magB) return 0;
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

function togglePreferenceWithExclusiveOption(list, value, exclusiveValues = []) {
  const isExclusive = exclusiveValues.includes(value);

  if (isExclusive) {
    list.splice(0, list.length, value);
    return;
  }

  exclusiveValues.forEach((exclusiveValue) => {
    const exclusiveIndex = list.indexOf(exclusiveValue);
    if (exclusiveIndex >= 0) list.splice(exclusiveIndex, 1);
  });

  toggleArrayValue(list, value);
}

function toggleArrayValue(list, value) {
  const index = list.indexOf(value);
  if (index >= 0) list.splice(index, 1);
  else list.push(value);
}

function termKey(term) {
  return String(term?.cleanTerm || term?.term || term?.id || '')
    .trim()
    .toLowerCase();
}

function idsToTermKeys(ids) {
  return new Set(
    ids
      .map((id) => vocabulary.termsById[id])
      .filter(Boolean)
      .map(termKey)
  );
}

function initialScreenTermKeys() {
  return new Set(vocabulary.pools.initialScreen.map(termKey));
}

function alreadySeenTermKeys() {
  return new Set([
    ...initialScreenTermKeys(),
    ...idsToTermKeys(state.selections.badFitIds),
    ...idsToTermKeys(state.selections.adaptiveShownIds),
    ...idsToTermKeys(state.selections.adaptiveSelectedIds),
    ...state.midpoint.descriptors.map(termKey)
  ]);
}

function unique(values) {
  return Array.from(new Set(values));
}

function slugify(value) {
  return String(value).toLowerCase().trim().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function toTitleCase(value) {
  return String(value).replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}

function capitalize(value) {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function round(value) {
  return Math.round(value * 1000) / 1000;
}

function escapeHTML(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

document.addEventListener('DOMContentLoaded', init);

})();
