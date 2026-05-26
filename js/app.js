const placements = [
  // Coordinates use the same coordinate system as the source-mapped ear SVGs:
  // viewBox 0 0 454.96 568.7. These positions are tuned to the uploaded
  // Stack Bar source topology: earhead/forward helix, rook, flat, helix,
  // tragus, daith, conch, anti-tragus, and lobe.
  { id: 'lobe', label: 'Lobe', group: 'LOBES', x: 182, y: 382, type: 'dot', copy: 'A classic lower-lobe placement with lots of jewelry flexibility.' },
  { id: 'upperLobe', label: 'Upper Lobe', group: 'LOBES', x: 207, y: 350, type: 'dot', copy: 'A soft stacked-lobe option that can add balance and sparkle.' },
  { id: 'helix', label: 'Helix', group: 'OUTER EAR', x: 394, y: 205, type: 'dot', copy: 'An outer-ear placement that can feel delicate, bold, or layered.' },
  { id: 'forwardHelix', label: 'Forward Helix', group: 'OUTER EAR', x: 168, y: 127, type: 'dot', copy: 'A small forward placement that can look refined and intentional.' },
  { id: 'flat', label: 'Flat', group: 'OUTER EAR', x: 288, y: 103, type: 'dot', copy: 'A broad upper-ear placement that can showcase a statement piece.' },
  { id: 'conch', label: 'Conch', group: 'INNER EAR', x: 286, y: 238, type: 'dot', copy: 'A center-ear piercing that can feel subtle or bold depending on jewelry.' },
  { id: 'tragus', label: 'Tragus', group: 'INNER EAR', x: 185, y: 250, type: 'dot', copy: 'A tiny front-ear placement that can add a polished little detail.' },
  { id: 'antiTragus', label: 'Anti-Tragus', group: 'INNER EAR', x: 204, y: 302, type: 'dot', copy: 'A lower inner-ear placement that depends on shape and spacing.' },
  { id: 'daith', label: 'Daith', group: 'INNER EAR', x: 216, y: 205, type: 'ring', copy: 'A curved inner-ear piercing often styled with a small ring.' },
  { id: 'rook', label: 'Rook', group: 'INNER EAR', x: 228, y: 168, type: 'dot', copy: 'A tucked upper-inner placement with a sculptural feel.' },
  {
    id: 'industrial',
    label: 'Industrial',
    group: 'ADVANCED',
    x: 286,
    y: 135,
    type: 'industrial',
    x1: 172,
    y1: 128,
    x2: 376,
    y2: 142,
    copy: 'A connected barbell-style piercing that depends on anatomy and placement.'
  }
];

const groups = ['LOBES', 'OUTER EAR', 'INNER EAR', 'ADVANCED'];
const futureStates = ['none', 'curious', 'love', 'maybe'];
const futureLabels = {
  none: '',
  curious: '○',
  love: '♥',
  maybe: '◌'
};

const state = {
  step: 1,
  earChoice: null,
  bothSimilar: null,
  lobeEditSide: 'left',
  mapSide: 'left',
  lobe: { left: null, right: null },
  existing: { left: {}, right: {} },
  future: { left: {}, right: {} },
  activeSection: 'existing',
  lastTouched: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function init() {
  setupStepOne();
  setupStepTwo();
  setupNavigation();
  setupMapControls();
  renderAll();
}

function setupStepOne() {
  $$('[data-ear-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      state.earChoice = button.dataset.earChoice;
      if (state.earChoice === 'left') state.mapSide = 'left';
      if (state.earChoice === 'right') state.mapSide = 'right';
      renderAll();
    });
  });
}

function setupStepTwo() {
  $$('[data-similar-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      state.bothSimilar = button.dataset.similarChoice;
      if (state.bothSimilar === 'yes') state.lobeEditSide = 'left';
      renderAll();
    });
  });

  $$('[data-lobe-side]').forEach((button) => {
    button.addEventListener('click', () => {
      state.lobeEditSide = button.dataset.lobeSide;
      renderAll();
    });
  });

  $$('[data-lobe-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      const choice = button.dataset.lobeChoice;

      if (state.earChoice === 'both' && state.bothSimilar === 'no') {
        state.lobe[state.lobeEditSide] = choice;
      } else if (state.earChoice === 'both') {
        state.lobe.left = choice;
        state.lobe.right = choice;
      } else {
        state.lobe[state.earChoice] = choice;
      }

      renderAll();
    });
  });
}

function setupNavigation() {
  $$('[data-next-step]').forEach((button) => {
    button.addEventListener('click', () => {
      state.step = Number(button.dataset.nextStep);
      renderAll();
    });
  });

  $$('[data-prev-step]').forEach((button) => {
    button.addEventListener('click', () => {
      state.step = Number(button.dataset.prevStep);
      renderAll();
    });
  });
}

function setupMapControls() {
  $$('[data-map-side]').forEach((button) => {
    button.addEventListener('click', () => {
      state.mapSide = button.dataset.mapSide;
      renderAll();
    });
  });

  $('#to-future-btn').addEventListener('click', () => {
    state.activeSection = 'future';
    state.lastTouched = null;
    renderAll();
  });

  $('#back-to-existing-btn').addEventListener('click', () => {
    state.activeSection = 'existing';
    state.lastTouched = null;
    renderAll();
  });
}

function renderAll() {
  renderSteps();
  renderProgress();
  renderStepOne();
  renderStepTwo();
  renderStepThree();
}

function renderSteps() {
  $$('.step-card').forEach((card) => {
    card.classList.toggle('is-active', Number(card.dataset.step) === state.step);
  });
}

function renderProgress() {
  $$('.progress-dot').forEach((dot) => {
    dot.classList.toggle('is-active', Number(dot.dataset.progress) === state.step);
  });
}

function renderStepOne() {
  $$('[data-ear-choice]').forEach((button) => {
    button.classList.toggle('is-selected', button.dataset.earChoice === state.earChoice);
  });

  $('#both-helper').classList.toggle('is-hidden', state.earChoice !== 'both');
  $('[data-next-step="2"]').disabled = !state.earChoice;
}

function renderStepTwo() {
  const isBoth = state.earChoice === 'both';
  $('#both-similar-panel').classList.toggle('is-hidden', !isBoth);
  $('#side-lobe-tabs').classList.toggle('is-hidden', !(isBoth && state.bothSimilar === 'no'));

  $$('[data-similar-choice]').forEach((button) => {
    button.classList.toggle('is-selected', button.dataset.similarChoice === state.bothSimilar);
  });

  $$('[data-lobe-side]').forEach((button) => {
    button.classList.toggle('is-selected', button.dataset.lobeSide === state.lobeEditSide);
  });

  const visibleChoice = getVisibleLobeChoice();
  $$('[data-lobe-choice]').forEach((button) => {
    button.classList.toggle('is-selected', button.dataset.lobeChoice === visibleChoice);
  });

  $('#lobe-continue').disabled = !canContinueFromLobe();
}

function getVisibleLobeChoice() {
  if (state.earChoice === 'both' && state.bothSimilar === 'no') {
    return state.lobe[state.lobeEditSide];
  }
  if (state.earChoice === 'both') return state.lobe.left;
  return state.lobe[state.earChoice];
}

function canContinueFromLobe() {
  if (!state.earChoice) return false;

  if (state.earChoice === 'both') {
    if (!state.bothSimilar) return false;
    if (state.bothSimilar === 'yes') return Boolean(state.lobe.left && state.lobe.right);
    return Boolean(state.lobe.left && state.lobe.right);
  }

  return Boolean(state.lobe[state.earChoice]);
}

function renderStepThree() {
  const isBoth = state.earChoice === 'both';
  $('#map-side-toggle').classList.toggle('is-hidden', !isBoth);

  $$('[data-map-side]').forEach((button) => {
    button.classList.toggle('is-selected', button.dataset.mapSide === state.mapSide);
  });

  $('#existing-section').classList.toggle('is-active', state.activeSection === 'existing');
  $('#future-section').classList.toggle('is-active', state.activeSection === 'future');

  renderEarStage($('#ear-stage-existing'), 'existing');
  renderEarStage($('#ear-stage-future'), 'future');
  renderChips($('#existing-chips'), 'existing');
  renderChips($('#future-chips'), 'future');
  renderDetailPanels();
}

function currentSide() {
  if (state.earChoice === 'left') return 'left';
  if (state.earChoice === 'right') return 'right';
  return state.mapSide;
}

function anatomyForSide(side) {
  // In v0, "not sure" uses detached as the neutral fallback.
  const selected = state.lobe[side] || 'detached';
  return selected === 'attached' ? 'attached' : 'detached';
}

function renderEarStage(container, mode) {
  const side = currentSide();
  const anatomy = anatomyForSide(side);
  const imgSrc = `assets/ear-${anatomy}.svg`;
  const isRight = side === 'right';

  container.classList.toggle('is-right', isRight);
  container.innerHTML = `
    <div class="ear-canvas">
      <img class="ear-base" src="${imgSrc}" alt="Interactive ${anatomy} lobe ear map" />
      <svg class="marker-layer" viewBox="0 0 454.96 568.7" aria-hidden="true"></svg>
      <div class="hit-layer"></div>
    </div>
  `;

  const markerLayer = container.querySelector('.marker-layer');
  const hitLayer = container.querySelector('.hit-layer');

  placements.forEach((placement) => {
    const markerState = getMarkerState(placement.id, mode, side);
    if (markerState !== 'none') {
      markerLayer.appendChild(makeMarker(placement, markerState));
    }

    const hit = document.createElement('button');
    hit.type = 'button';
    hit.className = `ear-hit hit-${placement.id}`;
    hit.style.setProperty('--x', `${(placement.x / 454.96) * 100}%`);
    hit.style.setProperty('--y', `${(placement.y / 568.7) * 100}%`);
    hit.setAttribute('aria-label', placement.label);
    hit.addEventListener('click', () => handlePlacementTap(placement.id, mode));
    hitLayer.appendChild(hit);
  });
}

function getMarkerState(id, mode, side) {
  const hasExisting = state.existing[side][id] === 1;

  if (mode === 'existing') {
    return hasExisting ? 'existing' : 'none';
  }

  const futureState = state.future[side][id] || 0;
  if (futureState === 0) return hasExisting ? 'existing' : 'none';
  if (futureState === 1) return 'curious';
  if (futureState === 2) return 'love';
  return 'maybe';
}

function makeMarker(placement, markerState) {
  const svgNS = 'http://www.w3.org/2000/svg';
  const group = document.createElementNS(svgNS, 'g');
  group.classList.add('ear-marker', `state-${markerState}`);

  if (placement.type === 'ring') {
    const ring = document.createElementNS(svgNS, 'circle');
    ring.setAttribute('class', 'marker-ring');
    ring.setAttribute('cx', placement.x);
    ring.setAttribute('cy', placement.y);
    ring.setAttribute('r', 19);
    group.appendChild(ring);
    return group;
  }

  if (placement.type === 'industrial') {
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('class', 'marker-bar');
    line.setAttribute('x1', placement.x1);
    line.setAttribute('y1', placement.y1);
    line.setAttribute('x2', placement.x2);
    line.setAttribute('y2', placement.y2);
    group.appendChild(line);

    [
      { x: placement.x1, y: placement.y1 },
      { x: placement.x2, y: placement.y2 }
    ].forEach((point) => {
      const endpoint = document.createElementNS(svgNS, 'circle');
      endpoint.setAttribute('class', 'marker-industrial-end');
      endpoint.setAttribute('cx', point.x);
      endpoint.setAttribute('cy', point.y);
      endpoint.setAttribute('r', 9.2);
      group.appendChild(endpoint);
    });

    return group;
  }

  const dot = document.createElementNS(svgNS, 'circle');
  dot.setAttribute('class', 'marker-dot');
  dot.setAttribute('cx', placement.x);
  dot.setAttribute('cy', placement.y);
  dot.setAttribute('r', markerState === 'love' ? 10.4 : 9.2);
  group.appendChild(dot);
  return group;
}

function renderChips(container, mode) {
  const side = currentSide();
  container.innerHTML = '';

  groups.forEach((group) => {
    const groupWrap = document.createElement('div');
    const label = document.createElement('p');
    const row = document.createElement('div');

    label.className = 'chip-group-label';
    label.textContent = group;
    row.className = 'chip-row';

    placements.filter((placement) => placement.group === group).forEach((placement) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = getChipClass(placement.id, mode, side);
      chip.textContent = getChipLabel(placement, mode, side);
      chip.addEventListener('click', () => handlePlacementTap(placement.id, mode));
      row.appendChild(chip);
    });

    groupWrap.appendChild(label);
    groupWrap.appendChild(row);
    container.appendChild(groupWrap);
  });
}

function getChipClass(id, mode, side) {
  const classes = ['chip'];

  if (mode === 'existing') {
    if (state.existing[side][id] === 1) classes.push('is-existing');
    return classes.join(' ');
  }

  const value = state.future[side][id] || 0;
  if (value === 1) classes.push('is-curious');
  if (value === 2) classes.push('is-love');
  if (value === 3) classes.push('is-maybe');
  return classes.join(' ');
}

function getChipLabel(placement, mode, side) {
  if (mode === 'existing') return placement.label;

  const value = state.future[side][placement.id] || 0;
  const prefix = futureLabels[futureStates[value]];
  return prefix ? `${prefix} ${placement.label}` : placement.label;
}

function handlePlacementTap(id, mode) {
  const side = currentSide();
  const placement = placements.find((item) => item.id === id);
  state.lastTouched = { id, mode };

  if (mode === 'existing') {
    state.existing[side][id] = state.existing[side][id] === 1 ? 0 : 1;
  } else {
    const current = state.future[side][id] || 0;
    state.future[side][id] = (current + 1) % 4;
  }

  renderStepThree();

  const detailId = mode === 'existing' ? 'existing-detail' : 'future-detail';
  const detail = $(`#${detailId}`);
  detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderDetailPanels() {
  renderDetailPanel($('#existing-detail'), 'existing');
  renderDetailPanel($('#future-detail'), 'future');
}

function renderDetailPanel(panel, mode) {
  const shouldShow = state.lastTouched && state.lastTouched.mode === mode;
  panel.classList.toggle('is-hidden', !shouldShow);

  if (!shouldShow) return;

  const placement = placements.find((item) => item.id === state.lastTouched.id);
  panel.innerHTML = `
    <h3>${placement.label}</h3>
    <p>${placement.copy}</p>
  `;
}

document.addEventListener('DOMContentLoaded', init);
