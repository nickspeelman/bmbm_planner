// js/style-explorer.js
// Standalone client-side prototype. Vocabulary stays local; final handoff can be sent to Apps Script/Gemini.

const HANDOFF_BACKEND_URL = 'https://script.google.com/macros/s/AKfycbyFnw6x4nnQt9TW9jvrOg0IUe2mFxq_MTKcIPo_lTkTaLUc3VmjJ98CLmNAw4ASI98r6Q/exec';

const RAW_VOCABULARY = window.STYLE_VOCABULARY_RAW || [];

const DIMENSIONS = [
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

const COLOR_OPTIONS = [
  { id: 'soft-neutrals', label: 'Soft neutrals' },
  { id: 'warm-tones', label: 'Warm tones' },
  { id: 'cool-tones', label: 'Cool tones' },
  { id: 'black-dark-tones', label: 'Black / dark tones' },
  { id: 'colorful-playful', label: 'Colorful / playful' },
  { id: 'not-sure', label: 'Not sure' },
  { id: 'other', label: 'Other / tell us more' }
];

const ROUTE_REQUIRED_COPY = 'You haven’t given Michele a lot of style detail yet, and that’s completely fine. That’s what this little explorer is for. We’ll show you a few small sets of words, and you can tap anything that feels close or mark anything that feels like the wrong direction. By the end, Michele will have a clearer feel for the mood you’re drawn to.';
const ROUTE_OPTIONAL_COPY = 'What you wrote already gives Michele a helpful starting point. You can skip ahead, or try the style explorer for a few extra words that may help narrow the mood, clarify the details, and make the consultation notes easier to work from.';

const state = {
  screen: 'intro',
  preStyle: {
    colorDirections: [],
    otherColorDetails: '',
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
    afterMidpointRounds: 3,
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

let vocabulary = normalizeVocabulary(RAW_VOCABULARY);

function init() {
  if (!Array.isArray(RAW_VOCABULARY) || !RAW_VOCABULARY.length) {
    $('#screen-root').innerHTML = '<p class="warning-note">No vocabulary loaded. Make sure js/vocabulary.js is included before js/style-explorer.js.</p>';
    return;
  }
  render();
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

  const initialScreen = takeDiverseTerms([...singleHigh, ...shortHigh, ...singleMedium], 28);
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

function render() {
  renderProgress();
  state.copied = false;
  const root = $('#screen-root');

  const renderers = {
    intro: renderIntro,
    preStyle: renderPreStyle,
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
}

function renderProgress() {
  const steps = ['intro', 'preStyle', 'routing', 'initialPositive', 'badFit', 'adaptive', 'midpoint', 'opposingPairs', 'summary'];
  const activeIndex = Math.max(0, steps.indexOf(state.screen));
  $('#progress').innerHTML = steps.map((_, index) => `<span class="progress-dot ${index === activeIndex ? 'is-active' : ''}"></span>`).join('');
}

function renderIntro() {
  return `
    <div class="step-card is-active title-card">
      <p class="eyebrow">Style explorer</p>
      <h1>Let’s find your style.</h1>
      <p class="subtext">Don’t worry about finding perfect words. This is just a way to give Michele a feel for what you’re drawn to, so your consultation can start in the right direction.</p>
      <div class="mini-note">
        <p>You’ll start with a couple of broad questions, then choose from a few small groups of words. There are no right answers — the goal is simply to give the consultation a better starting shape.</p>
      </div>
      <button class="primary-btn" type="button" data-go="preStyle">Continue</button>
    </div>
  `;
}

function renderPreStyle() {
  return `
    <div class="step-card is-active form-card">
      <p class="eyebrow">Starting point</p>
      <h1>A little direction first.</h1>
      <p class="subtext">These are just aesthetic notes, not final jewelry decisions. They help Michele understand the mood before you get into placement, anatomy, or specific jewelry.</p>

      <div class="question-block">
        <h2>Are there any colors or color families you’re drawn to?</h2>
        <div class="soft-chip-grid" role="group" aria-label="Color direction">
          ${COLOR_OPTIONS.map((option) => `
            <button class="color-chip ${state.preStyle.colorDirections.includes(option.id) ? 'is-selected' : ''}" type="button" data-color-id="${option.id}">${option.label}</button>
          `).join('')}
        </div>
      </div>

      <div id="other-color-wrap" class="form-stack conditional-field ${state.preStyle.colorDirections.includes('other') ? '' : 'is-hidden'}">
        <label class="field-label" for="other-color-details">Tell us a little more <span class="optional-mark">optional</span></label>
        <textarea id="other-color-details" class="soft-textarea" rows="2" data-field="otherColorDetails" placeholder="Ivory and gold, deep red, forest green, mixed metals, etc.">${escapeHTML(state.preStyle.otherColorDetails)}</textarea>
      </div>

      <div class="form-stack">
        <label class="field-label" for="style-idea-text">Do you already have a style or vibe in mind? <span class="optional-mark">optional</span></label>
        <textarea id="style-idea-text" class="soft-textarea" rows="4" data-field="styleIdeaText" placeholder="Examples: delicate and celestial, bold but still elegant, tiny and minimal, romantic but not too sweet…">${escapeHTML(state.preStyle.styleIdeaText)}</textarea>
      </div>

      <div class="button-row screen-actions">
        <button class="secondary-btn" type="button" data-go="intro">Back</button>
        <button class="primary-btn" type="button" data-route-style>Continue</button>
      </div>
    </div>
  `;
}

function renderRouting() {
  const isOptional = state.routing.hasMeaningfulStyleText;
  return `
    <div class="step-card is-active title-card">
      <p class="eyebrow">${isOptional ? 'Good starting point' : 'That’s what this is for'}</p>
      <h1>${isOptional ? 'You gave Michele a helpful start.' : 'Let’s find a few words together.'}</h1>
      <div class="route-card"><p>${isOptional ? ROUTE_OPTIONAL_COPY : ROUTE_REQUIRED_COPY}</p></div>
      ${isOptional ? `
        <div class="button-row screen-actions">
          <button class="secondary-btn" type="button" data-skip-summary>Skip to summary</button>
          <button class="primary-btn" type="button" data-start-explorer>Try the style explorer</button>
        </div>
      ` : `
        <button class="primary-btn" type="button" data-start-explorer>Start the style explorer</button>
      `}
    </div>
  `;
}

function renderInitialPositive() {
  return `
    <div class="step-card is-active form-card">
      <p class="eyebrow">First impressions</p>
      <h1>Pick a few words that feel close.</h1>
      <p class="subtext">Don’t think too hard. This first set is intentionally short — just enough to give us an initial direction.</p>
      <div class="style-word-grid">
        ${vocabulary.pools.initialScreen.map((term) => wordButton(term, state.selections.initialPositiveIds.includes(term.id), 'positive')).join('')}
      </div>
      <div class="button-row screen-actions">
        <button class="secondary-btn" type="button" data-go="routing">Back</button>
        <button class="primary-btn" type="button" data-go="badFit">Continue</button>
      </div>
    </div>
  `;
}

function renderBadFit() {
  const positive = new Set(state.selections.initialPositiveIds);
  const terms = vocabulary.pools.badFitEligible.filter((term) => !positive.has(term.id));
  return `
    <div class="step-card is-active form-card">
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
    <div class="step-card is-active form-card">
      <p class="eyebrow">Narrowing in</p>
      <p class="round-counter">Round ${state.adaptive.roundIndex + 1} of ${roundTotal}</p>
      <h1>Let’s narrow it in.</h1>
      <p class="subtext">Tap any that feel right. Skip anything that doesn’t. These should start to get more specific as we learn what you like.</p>
      <div class="adaptive-round-card">
        ${terms.map((term) => wordButton(term, selected.has(term.id), 'adaptive', true)).join('')}
      </div>
      <div class="button-row screen-actions">
        <button class="secondary-btn" type="button" data-adaptive-skip>Skip these</button>
        <button class="primary-btn" type="button" data-next-adaptive>Continue</button>
      </div>
    </div>
  `;
}

function renderMidpoint() {
  if (!state.midpoint.descriptors.length) {
    state.midpoint.descriptors = buildMidpointDescriptors();
  }
  return `
    <div class="step-card is-active form-card">
      <p class="eyebrow">Vibe check</p>
      <h1>These are the vibes we’re getting so far…</h1>
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
    </div>
  `;
}

function renderOpposingPairs() {
  if (!state.opposingPairs.shownDimensionIds.length) {
    state.opposingPairs.shownDimensionIds = choosePairDimensions();
  }
  return `
    <div class="step-card is-active form-card">
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
    </div>
  `;
}

function renderSummary() {
  if (!state.handoff) state.handoff = buildHandoff();

  return `
    <div class="step-card is-active review-card">
      <p class="eyebrow">Style summary</p>
      <h1>Your style.</h1>
      <p class="subtext">We’re turning your choices into a short style note. After you see it, you can tell us whether it feels right and add anything you want Michele to know.</p>

      ${renderGeneratedStyleSummary()}

      <div class="button-row screen-actions">
        <button class="secondary-btn" type="button" data-go="opposingPairs">Back</button>
        <button class="primary-btn" type="button" data-reset>Start over</button>
      </div>
    </div>
  `;
}

function renderGeneratedStyleSummary() {
  if (state.backend.status === 'loading') {
    return `
      <section class="client-summary-card is-loading" aria-live="polite">
        <div class="thinking-row">
          <span class="thinking-dot" aria-hidden="true"></span>
          <div>
            <h2>Building your style note…</h2>
            <p>Taking your word choices and shaping them into a short style summary.</p>
          </div>
        </div>
      </section>
    `;
  }

  if (state.backend.status === 'error') {
    return `
      <section class="client-summary-card error-card" aria-live="polite">
        <h2>We couldn’t build the style note yet.</h2>
        <p>${escapeHTML(state.backend.error || 'Something went wrong while building your style note.')}</p>
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
          <h2>We got the style note back, but not the client-facing version.</h2>
          <p>The backend response did not include <strong>clientStyleSummary</strong>. Try again, or check the Gemini response shape.</p>
          <button class="primary-btn" type="button" data-retry-handoff>Try again</button>
        </section>
      `;
    }

    return `
      <section class="client-summary-card" aria-live="polite">
        <p class="eyebrow summary-eyebrow">Your style</p>
        <h2>${escapeHTML(clientSummary)}</h2>
        ${renderSummaryFeedback()}
      </section>
    `;
  }

  return `
    <section class="client-summary-card" aria-live="polite">
      <h2>Ready to build your style note.</h2>
      <p>Tap below to submit your answers and build your style note.</p>
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

function renderSummaryFeedback() {
  return `
    <div class="summary-feedback">
      <p class="feedback-label">Does this feel like you?</p>
      <div class="rating-row" role="group" aria-label="Rate this style summary">
        ${[1, 2, 3, 4, 5].map((rating) => `
          <button class="rating-button ${state.clientFeedback.rating === rating ? 'is-selected' : ''}" type="button" data-summary-rating="${rating}" aria-label="${rating} out of 5">${rating}</button>
        `).join('')}
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
    state.backend.error = error?.message || 'The style note could not be generated.';
  }

  render();
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

  document.querySelectorAll('[data-color-id]').forEach((button) => {
    button.addEventListener('click', () => {
      toggleArrayValue(state.preStyle.colorDirections, button.dataset.colorId);
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
      state.routing.explorerStatus = 'completed';
      go('initialPositive');
    });
  }

  const skipSummary = $('[data-skip-summary]');
  if (skipSummary) {
    skipSummary.addEventListener('click', () => {
      state.routing.explorerStatus = 'skipped';
      state.handoff = buildHandoff();
      go('summary');
      requestHandoffSummary();
    });
  }

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
      state.handoff = buildHandoff();
      go('summary');
      requestHandoffSummary();
    });
  }

  const sendHandoff = $('[data-send-handoff]');
  if (sendHandoff) sendHandoff.addEventListener('click', requestHandoffSummary);

  const retryHandoff = $('[data-retry-handoff]');
  if (retryHandoff) retryHandoff.addEventListener('click', requestHandoffSummary);

  document.querySelectorAll('[data-summary-rating]').forEach((button) => {
    button.addEventListener('click', () => {
      state.clientFeedback.rating = Number(button.dataset.summaryRating);
      render();
    });
  });

  const feedbackComment = $('[data-feedback-comment]');
  if (feedbackComment) {
    feedbackComment.addEventListener('input', () => {
      state.clientFeedback.comment = feedbackComment.value;
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
  const shown = new Set([
    ...state.selections.initialPositiveIds,
    ...state.selections.badFitIds,
    ...state.selections.adaptiveShownIds,
    ...state.selections.adaptiveSelectedIds
  ]);

  const scored = vocabulary.pools.adaptiveRound
    .filter((term) => !shown.has(term.id))
    .map((term, index) => ({
      term,
      index,
      signal: term.topStyleSignal?.dimensionId || 'unknown',
      territory: term.sourceTerritories?.[0] || 'Other',
      score: cosineSimilarity(vector, term.scores) + varietyBoost(term, index)
    }))
    .sort((a, b) => b.score - a.score);

  const chosen = [];
  const usedSignals = new Set();
  const usedTerritories = new Set();

  // First pass: stay fairly close to the working vector, but force variety.
  scored.slice(0, 36).forEach((item) => {
    if (chosen.length >= 4) return;
    if (usedSignals.has(item.signal)) return;
    if (usedTerritories.has(item.territory)) return;
    chosen.push(item);
    usedSignals.add(item.signal);
    usedTerritories.add(item.territory);
  });

  // Second pass: allow same territory, but avoid repeating the same dimension signal.
  scored.forEach((item) => {
    if (chosen.length >= 4) return;
    if (chosen.some((selected) => selected.term.id === item.term.id)) return;
    if (usedSignals.has(item.signal)) return;
    chosen.push(item);
    usedSignals.add(item.signal);
  });

  // Final fallback: fill any remaining slots.
  scored.forEach((item) => {
    if (chosen.length >= 4) return;
    if (chosen.some((selected) => selected.term.id === item.term.id)) return;
    chosen.push(item);
  });

  return chosen.map((item) => item.term.id).slice(0, 4);
}

function varietyBoost(term, index) {
  const previouslySelectedTerms = state.selections.adaptiveSelectedIds
    .map((id) => vocabulary.termsById[id])
    .filter(Boolean);

  const sameTerritoryPenalty = term.sourceTerritories.some((territory) =>
    previouslySelectedTerms.some((selected) => selected.sourceTerritories.includes(territory))
  ) ? -0.08 : 0.05;

  const sameSignalPenalty = previouslySelectedTerms.some((selected) =>
    selected.topStyleSignal?.dimensionId === term.topStyleSignal?.dimensionId
  ) ? -0.08 : 0.04;

  return sameTerritoryPenalty + sameSignalPenalty + ((index % 11) * 0.002);
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
  const selected = [...state.selections.initialPositiveIds, ...state.selections.adaptiveSelectedIds]
    .map((id) => vocabulary.termsById[id])
    .filter(Boolean);

  const selectedCandidates = selected
    .sort((a, b) => b.metrics.vectorStrength - a.metrics.vectorStrength)
    .slice(0, 3);

  const nearbySynopsis = vocabulary.pools.synopsis
    .filter((term) => !selected.some((item) => item.id === term.id))
    .map((term) => ({ term, score: cosineSimilarity(vector, term.scores) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((item) => item.term);

  return unique([...selectedCandidates, ...nearbySynopsis].map((term) => term.id))
    .slice(0, 5)
    .map((id) => vocabulary.termsById[id])
    .filter(Boolean);
}

function choosePairDimensions() {
  const vector = currentStyleVector();
  const sorted = DIMENSIONS
    .map((dimension) => ({ id: dimension.id, abs: Math.abs(vector[dimension.id] || 0) }))
    .sort((a, b) => b.abs - a.abs);

  const strong = sorted.slice(0, 3).map((item) => item.id);
  const uncertain = sorted.slice().reverse().slice(0, 3).map((item) => item.id);
  return unique([...strong, ...uncertain]).slice(0, 6);
}

function buildHandoff() {
  const finalVector = currentStyleVector();
  const selectedColorDirections = state.preStyle.colorDirections.map((id) => COLOR_OPTIONS.find((item) => item.id === id)?.label || id);
  const strongestDimensions = DIMENSIONS
    .map((dimension) => ({
      id: dimension.id,
      label: dimension.label,
      score: finalVector[dimension.id] || 0,
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
    generatedAt: new Date().toISOString()
  };
}

function readableSummary(handoff) {
  return `
    <dl class="review-list">
      ${reviewRow('Colors', handoff.selectedColorDirections.join(', ') || 'None selected')}
      ${reviewRow('Style idea', handoff.freeTextStyleIdea || 'Not provided')}
      ${reviewRow('Explorer status', handoff.styleExplorerStatus)}
      ${reviewRow('Positive words', handoff.positiveInitialWords.map((item) => item.term).join(', ') || 'None')}
      ${reviewRow('Wrong direction', handoff.badFitWords.map((item) => item.term).join(', ') || 'None')}
      ${reviewRow('Adaptive picks', handoff.adaptiveWordsSelected.map((item) => item.term).join(', ') || 'None')}
      ${reviewRow('Strongest dimensions', handoff.strongestDimensions.map((item) => `${item.pole} (${item.score})`).join(', ') || 'None yet')}
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
    sourceTerritories: term.sourceTerritories,
    topStyleSignal: term.topStyleSignal
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
  return trimmed.length >= 40 || words.length >= 6;
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

function toggleArrayValue(list, value) {
  const index = list.indexOf(value);
  if (index >= 0) list.splice(index, 1);
  else list.push(value);
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
