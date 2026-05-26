const regions = [
  {
    id: 'lobe',
    label: 'Lobe',
    group: 'LOBES',
    type: 'dot',
    x: 185,
    y: 378,
    path: 'M142 326 C166 313 204 305 255 293 C257 333 241 385 209 416 C183 440 141 433 119 403 C96 371 108 342 142 326 Z',
    positions: [
      { x: 182, y: 382 },
      { x: 205, y: 352 },
      { x: 228, y: 324 },
      { x: 250, y: 300 }
    ],
    copy: 'The lobe is the soft lower part of the ear. It is often the most flexible area for multiple piercings, stacked placements, and jewelry changes.',
    helper: 'Tap the lobe area on the diagram to add each lobe piercing. Multiple taps create Lobe x2, Lobe x3, and so on.'
  },
  {
    id: 'helix',
    label: 'Helix',
    group: 'OUTER EAR',
    type: 'dot',
    x: 380,
    y: 178,
    path: 'M286 42 C360 50 419 107 428 181 C435 239 410 296 365 333 C350 319 356 298 374 276 C404 240 412 178 391 132 C372 90 331 68 286 65 Z',
    positions: [
      { x: 394, y: 205 },
      { x: 386, y: 176 },
      { x: 365, y: 148 },
      { x: 332, y: 126 }
    ],
    copy: 'The helix follows the outer rim of the upper ear. It can support one piercing or a run of multiple piercings along the curve.',
    helper: 'Tap along the outer rim to add helix piercings. The planner will count each tap as another helix placement.'
  },
  {
    id: 'forwardHelix',
    label: 'Forward Helix',
    group: 'OUTER EAR',
    type: 'dot',
    x: 169,
    y: 128,
    path: 'M151 82 C182 68 222 72 251 92 C236 111 215 131 203 156 C184 149 162 139 145 124 C134 112 136 93 151 82 Z',
    positions: [
      { x: 168, y: 127 },
      { x: 183, y: 108 }
    ],
    copy: 'The forward helix sits on the front-facing upper rim, near where the ear begins to fold into the head.',
    helper: 'Tap the upper front fold to mark forward helix interest or existing piercings.'
  },
  {
    id: 'flat',
    label: 'Flat',
    group: 'OUTER EAR',
    type: 'dot',
    x: 288,
    y: 103,
    path: 'M220 79 C258 54 317 60 356 93 C336 118 313 145 300 176 C265 164 230 145 202 119 C205 102 210 89 220 79 Z',
    positions: [
      { x: 288, y: 103 },
      { x: 312, y: 132 }
    ],
    copy: 'The flat is the broad, relatively open upper cartilage area inside the outer rim. It is a common spot for a single statement stud or clustered styling.',
    helper: 'Tap the broad upper cartilage area to add flat placements.'
  },
  {
    id: 'rook',
    label: 'Rook',
    group: 'INNER EAR',
    type: 'dot',
    x: 228,
    y: 168,
    path: 'M195 135 C220 134 252 143 274 160 C263 183 247 204 228 221 C204 204 190 179 188 153 C188 145 190 139 195 135 Z',
    positions: [
      { x: 228, y: 168 }
    ],
    copy: 'The rook is tucked into the upper inner fold. It depends heavily on anatomy and the prominence of that ridge.',
    helper: 'Tap the upper inner ridge to mark a rook.'
  },
  {
    id: 'daith',
    label: 'Daith',
    group: 'INNER EAR',
    type: 'ring',
    x: 216,
    y: 205,
    path: 'M176 174 C204 169 237 184 250 214 C238 238 215 257 188 261 C168 244 158 219 160 198 C162 187 168 178 176 174 Z',
    positions: [
      { x: 216, y: 205 }
    ],
    copy: 'The daith sits in the innermost cartilage fold. It is often shown with a ring because the jewelry follows the curve of the fold.',
    helper: 'Tap the inner curved fold to add daith interest. This one displays as a ring on the diagram.'
  },
  {
    id: 'conch',
    label: 'Conch',
    group: 'INNER EAR',
    type: 'dot',
    x: 286,
    y: 238,
    path: 'M241 188 C286 177 340 196 363 235 C346 279 305 318 253 327 C226 299 213 252 224 216 C228 204 234 194 241 188 Z',
    positions: [
      { x: 286, y: 238 },
      { x: 316, y: 198 },
      { x: 310, y: 282 }
    ],
    copy: 'The conch is the central bowl of the ear. It can be styled with a stud or, depending on anatomy and healing, jewelry that visually wraps the ear.',
    helper: 'Tap the center bowl area to add conch placements. Multiple taps can represent a constellation or multiple studs.'
  },
  {
    id: 'tragus',
    label: 'Tragus',
    group: 'INNER EAR',
    type: 'dot',
    x: 185,
    y: 250,
    path: 'M151 218 C178 211 204 225 214 250 C204 271 180 282 154 276 C138 258 136 234 151 218 Z',
    positions: [
      { x: 185, y: 250 }
    ],
    copy: 'The tragus is the small flap of cartilage near the opening of the ear canal. It is a compact, front-facing placement.',
    helper: 'Tap the small front flap to mark a tragus.'
  },
  {
    id: 'antiTragus',
    label: 'Anti-Tragus',
    group: 'INNER EAR',
    type: 'dot',
    x: 204,
    y: 302,
    path: 'M165 281 C195 278 224 293 238 318 C222 342 190 349 163 335 C148 318 148 296 165 281 Z',
    positions: [
      { x: 204, y: 302 }
    ],
    copy: 'The anti-tragus sits above the lobe and across from the tragus. It depends on how much defined cartilage is available there.',
    helper: 'Tap the lower inner ridge just above the lobe to add anti-tragus interest.'
  },
  {
    id: 'industrial',
    label: 'Industrial',
    group: 'ADVANCED',
    type: 'industrial',
    x: 285,
    y: 136,
    path: 'M163 104 C227 83 310 82 386 114 L382 160 C302 141 229 139 166 154 Z',
    positions: [
      { x: 172, y: 128 },
      { x: 376, y: 142 }
    ],
    copy: 'An industrial connects two cartilage piercings with one bar. It is very anatomy-dependent, so this planner treats it as an advanced idea rather than a simple dot.',
    helper: 'Tap the diagonal upper-ear zone to add industrial interest. It will show as a bar rather than a dot.'
  }
];

const regionGroups = [
  { id: 'outer', label: 'Outer', regionIds: ['helix', 'forwardHelix', 'flat', 'lobe'] },
  { id: 'inner', label: 'Inner', regionIds: ['rook', 'daith', 'conch', 'tragus', 'antiTragus'] },
  { id: 'other', label: 'Other', regionIds: ['industrial'] }
];
const interestLevels = [
  { id: 'love', label: 'Love it', short: 'Love it', markerState: 'love' },
  { id: 'maybe', label: 'Interested', short: 'Interested', markerState: 'maybe' },
  { id: 'curious', label: 'Curious', short: 'Curious', markerState: 'curious' }
];

const emptyRegionCounts = () => Object.fromEntries(regions.map((region) => [region.id, []]));
const emptyFutureCounts = () => Object.fromEntries(
  regions.map((region) => [
    region.id,
    Object.fromEntries(interestLevels.map((level) => [level.id, []]))
  ])
);

const state = {
  step: 1,
  earChoice: null,
  bothSimilar: null,
  lobeEditSide: 'left',
  mapSide: 'left',
  lobe: { left: null, right: null },
  existing: { left: emptyRegionCounts(), right: emptyRegionCounts() },
  future: { left: emptyFutureCounts(), right: emptyFutureCounts() },
  activeSection: 'existing',
  summaryExpanded: false,
  selectedRegion: { existing: null, future: null },
  lastTouched: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const svgNS = 'http://www.w3.org/2000/svg';

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
      state.step = 2;
      renderAll();
    });
  });
}

function setupStepTwo() {
  $$('[data-similar-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      state.bothSimilar = button.dataset.similarChoice;
      if (state.bothSimilar === 'yes') {
        state.lobeEditSide = 'left';
      }
      if (state.bothSimilar === 'no') {
        state.lobeEditSide = state.lobe.left ? 'right' : 'left';
      }
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
        if (!state.lobe.left) {
          state.lobeEditSide = 'left';
        } else if (!state.lobe.right) {
          state.lobeEditSide = 'right';
        } else {
          state.step = 3;
        }
      } else if (state.earChoice === 'both') {
        state.lobe.left = choice;
        state.lobe.right = choice;
        state.step = 3;
      } else {
        state.lobe[state.earChoice] = choice;
        state.step = 3;
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
      state.selectedRegion.existing = null;
      state.selectedRegion.future = null;
      renderAll();
    });
  });

  $$('[data-summary-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      state.summaryExpanded = !state.summaryExpanded;
      renderMapSteps();
    });
  });

  const finishButton = $('#finish-btn');
  if (finishButton) {
    finishButton.addEventListener('click', () => {
      state.summaryExpanded = true;
      renderMapSteps();
    });
  }
}

function renderAll() {
  renderSteps();
  renderProgress();
  renderStepOne();
  renderStepTwo();
  renderMapSteps();
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
    return Boolean(state.lobe.left && state.lobe.right);
  }

  return Boolean(state.lobe[state.earChoice]);
}

function renderMapSteps() {
  renderMapWorkspace('existing');
  renderMapWorkspace('future');
}

function renderMapWorkspace(mode) {
  const isBoth = state.earChoice === 'both';
  const prefix = mode === 'existing' ? 'existing' : 'future';

  const sideToggle = $(`#${prefix}-map-side-toggle`);
  if (sideToggle) sideToggle.classList.toggle('is-hidden', !isBoth);

  $$('[data-map-side]').forEach((button) => {
    button.classList.toggle('is-selected', button.dataset.mapSide === state.mapSide);
  });

  const stage = $(`#${prefix}-ear-stage`);
  if (stage) renderEarStage(stage, mode);

  const chips = $(`#${prefix}-region-chips`);
  if (chips) renderRegionPalette(chips, mode);

  const detail = $(`#${prefix}-detail-panel`);
  if (detail) renderDetailPanel(detail, mode);

  renderSummary(mode);

  const tally = $(`#${prefix}-tally-panel`);
  if (tally) renderTally(tally, mode);
}

function currentSide() {
  if (state.earChoice === 'left') return 'left';
  if (state.earChoice === 'right') return 'right';
  return state.mapSide;
}

function anatomyForSide(side) {
  const selected = state.lobe[side] || 'detached';
  return selected === 'attached' ? 'attached' : 'detached';
}

function regionById(id) {
  return regions.find((region) => region.id === id);
}

function countPlacements(value) {
  return Array.isArray(value) ? value.length : Number(value || 0);
}

function placementPointFromEvent(event) {
  const svg = event.currentTarget.ownerSVGElement;
  if (!svg) return null;

  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;

  const matrix = svg.getScreenCTM();
  if (!matrix) return null;

  const transformed = point.matrixTransform(matrix.inverse());
  return { x: transformed.x, y: transformed.y };
}

function fallbackPlacement(region, index = 0) {
  if (region?.type === 'industrial') return industrialPlacement(region);
  return markerPoint(region, index);
}

function industrialPlacement(region) {
  const [start, end] = region?.positions || [];
  return {
    start: start || { x: 172, y: 128 },
    end: end || { x: 376, y: 142 }
  };
}

function hasIndustrialPlacement(side, mode, regionId) {
  if (mode === 'existing') {
    return countPlacements(state.existing[side][regionId]) > 0;
  }

  return totalFutureRegionCount(side, regionId) > 0;
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
      <svg class="region-layer" viewBox="0 0 454.96 568.7" aria-label="Ear region map"></svg>
      <svg class="marker-layer" viewBox="0 0 454.96 568.7" aria-hidden="true"></svg>
    </div>
  `;

  const regionLayer = container.querySelector('.region-layer');
  const markerLayer = container.querySelector('.marker-layer');

  regions.forEach((region) => {
    regionLayer.appendChild(makeRegionPath(region, mode));
  });

  renderMarkers(markerLayer, mode, side);
}

function makeRegionPath(region, mode) {
  const path = document.createElementNS(svgNS, 'path');
  const selected = state.selectedRegion[mode] === region.id;
  path.setAttribute('d', region.path);
  path.setAttribute('class', `ear-region ${selected ? 'is-selected' : ''}`);
  path.setAttribute('role', 'button');
  path.setAttribute('tabindex', '0');
  path.setAttribute('aria-label', `${region.label} region`);
  path.addEventListener('click', (event) => handleDiagramRegionTap(region.id, mode, placementPointFromEvent(event)));
  path.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleDiagramRegionTap(region.id, mode);
    }
  });
  return path;
}

function renderMarkers(markerLayer, mode, side) {
  if (mode === 'future') {
    regions.forEach((region) => {
      const existingPlacements = state.existing[side][region.id] || [];
      addRegionMarkers(markerLayer, region, existingPlacements, 'existing-current', { removable: false });
    });
  }

  regions.forEach((region) => {
    if (mode === 'existing') {
      addRegionMarkers(markerLayer, region, state.existing[side][region.id] || [], 'existing', {
        removable: true,
        mode: 'existing',
        regionId: region.id
      });
      return;
    }

    interestLevels.forEach((level) => {
      const placements = state.future[side][region.id][level.id] || [];
      addRegionMarkers(markerLayer, region, placements, level.markerState, {
        removable: true,
        mode: 'future',
        regionId: region.id,
        interestId: level.id
      });
    });
  });
}

function addRegionMarkers(markerLayer, region, placements, markerState, options = {}) {
  const points = Array.isArray(placements)
    ? placements
    : Array.from({ length: Number(placements || 0) }, (_, index) => fallbackPlacement(region, index));

  points.forEach((point, index) => {
    markerLayer.appendChild(makeMarker(region, markerState, index, { ...options, point, placementIndex: index }));
  });
}

function markerPoint(region, index) {
  const base = region.positions[index % region.positions.length] || { x: region.x, y: region.y };
  const lap = Math.floor(index / region.positions.length);
  const offsets = [
    { x: 0, y: 0 },
    { x: 12, y: -8 },
    { x: -11, y: 9 },
    { x: 9, y: 11 },
    { x: -9, y: -10 }
  ];
  const offset = offsets[lap % offsets.length];
  return { x: base.x + offset.x, y: base.y + offset.y };
}

function makeMarker(region, markerState, index = 0, options = {}) {
  const group = document.createElementNS(svgNS, 'g');
  group.classList.add('ear-marker', `state-${markerState}`);
  if (options.removable) {
    group.classList.add('is-removable');
    group.setAttribute('role', 'button');
    group.setAttribute('tabindex', '0');
    group.setAttribute('aria-label', `Remove one ${region.label}`);
    group.addEventListener('click', (event) => {
      event.stopPropagation();
      removeMarker(options);
    });
    group.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        removeMarker(options);
      }
    });
  }

  if (region.type === 'ring') {
    const point = options.point || markerPoint(region, index);
    const ring = document.createElementNS(svgNS, 'circle');
    ring.setAttribute('class', 'marker-ring');
    ring.setAttribute('cx', point.x);
    ring.setAttribute('cy', point.y);
    ring.setAttribute('r', 18 + Math.min(index, 2) * 2);
    group.appendChild(ring);
    if (options.removable) group.appendChild(makeMarkerHit('ring', point, index));
    return group;
  }

  if (region.type === 'industrial') {
    const line = document.createElementNS(svgNS, 'line');
    const { start, end } = industrialPlacement(region);

    line.setAttribute('class', 'marker-bar');
    line.setAttribute('x1', start.x);
    line.setAttribute('y1', start.y);
    line.setAttribute('x2', end.x);
    line.setAttribute('y2', end.y);
    group.appendChild(line);

    [start, end].forEach((point) => {
      const endpoint = document.createElementNS(svgNS, 'circle');
      endpoint.setAttribute('class', 'marker-industrial-end');
      endpoint.setAttribute('cx', point.x);
      endpoint.setAttribute('cy', point.y);
      endpoint.setAttribute('r', 8.8);
      group.appendChild(endpoint);
    });

    if (options.removable) group.appendChild(makeMarkerHit('industrial', { start, end }, index));
    return group;
  }

  const point = options.point || markerPoint(region, index);
  const dot = document.createElementNS(svgNS, 'circle');
  dot.setAttribute('class', 'marker-dot');
  dot.setAttribute('cx', point.x);
  dot.setAttribute('cy', point.y);
  dot.setAttribute('r', markerState === 'existing-current' ? 11.8 : markerState === 'love' ? 10.8 : markerState === 'maybe' ? 10.2 : 9.4);
  group.appendChild(dot);
  if (options.removable) group.appendChild(makeMarkerHit('dot', point, index));
  return group;
}

function makeMarkerHit(kind, point, index = 0) {
  if (kind === 'industrial') {
    const hit = document.createElementNS(svgNS, 'line');
    const start = point?.start || { x: 172, y: 128 };
    const end = point?.end || { x: 376, y: 142 };
    hit.setAttribute('class', 'marker-remove-hit');
    hit.setAttribute('x1', start.x);
    hit.setAttribute('y1', start.y);
    hit.setAttribute('x2', end.x);
    hit.setAttribute('y2', end.y);
    return hit;
  }

  const hit = document.createElementNS(svgNS, 'circle');
  hit.setAttribute('class', 'marker-remove-hit');
  hit.setAttribute('cx', point.x);
  hit.setAttribute('cy', point.y);
  hit.setAttribute('r', kind === 'ring' ? 28 + Math.min(index, 2) * 2 : 19);
  return hit;
}

function removeMarker(options) {
  const side = currentSide();
  if (options.mode === 'existing') {
    const placements = state.existing[side][options.regionId] || [];
    placements.splice(options.placementIndex ?? placements.length - 1, 1);
    state.selectedRegion.existing = options.regionId;
    state.lastTouched = { id: options.regionId, mode: 'existing', source: 'marker-remove' };
  }

  if (options.mode === 'future') {
    const placements = state.future[side][options.regionId][options.interestId] || [];
    placements.splice(options.placementIndex ?? placements.length - 1, 1);
    state.selectedRegion.future = options.regionId;
    state.lastTouched = { id: options.regionId, mode: 'future', source: 'marker-remove' };
  }

  renderMapSteps();
}

function renderRegionPalette(container, mode) {
  const side = currentSide();
  container.innerHTML = '';

  regionGroups.forEach((group) => {
    const groupEl = document.createElement('section');
    groupEl.className = 'region-palette-group';

    const label = document.createElement('p');
    label.className = 'region-palette-label';
    label.textContent = group.label;
    groupEl.appendChild(label);

    const chipRow = document.createElement('div');
    chipRow.className = 'region-palette-chips';

    group.regionIds
      .map(regionById)
      .filter(Boolean)
      .forEach((region) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = getChipClass(region.id, mode, side);
        chip.textContent = getChipLabel(region, mode, side);
        chip.setAttribute('aria-pressed', state.selectedRegion[mode] === region.id ? 'true' : 'false');
        chip.addEventListener('click', () => handleChipTap(region.id, mode));
        chipRow.appendChild(chip);
      });

    groupEl.appendChild(chipRow);
    container.appendChild(groupEl);
  });
}

function getChipClass(id, mode, side) {
  const classes = ['chip'];
  if (state.selectedRegion[mode] === id) classes.push('is-selected-region');

  if (mode === 'existing' && countPlacements(state.existing[side][id]) > 0) {
    classes.push('has-count');
  }

  if (mode === 'future' && totalFutureRegionCount(side, id) > 0) {
    classes.push('has-count');
  }

  return classes.join(' ');
}

function getChipLabel(region) {
  return region.label;
}

function handleChipTap(id, mode) {
  state.selectedRegion[mode] = id;
  state.lastTouched = { id, mode, source: 'chip' };
  renderMapSteps();
}

function handleDiagramRegionTap(id, mode, point = null) {
  const side = currentSide();
  const region = regionById(id);
  const fallbackIndex = mode === 'existing'
    ? countPlacements(state.existing[side][id])
    : totalFutureRegionCount(side, id);
  const placement = region.type === 'industrial'
    ? industrialPlacement(region)
    : point || fallbackPlacement(region, fallbackIndex);

  state.selectedRegion[mode] = id;
  state.lastTouched = { id, mode, source: 'diagram', point: placement };

  if (mode === 'existing') {
    if (region.type === 'industrial') {
      if (!hasIndustrialPlacement(side, mode, id)) state.existing[side][id].push(placement);
    } else {
      state.existing[side][id].push(placement);
    }
  }

  renderMapSteps();
}

function addFutureInterest(regionId, interestId) {
  const side = currentSide();
  const region = regionById(regionId);
  const existingPlacements = state.future[side][regionId][interestId];
  const placement = region.type === 'industrial'
    ? industrialPlacement(region)
    : (state.lastTouched?.mode === 'future' && state.lastTouched?.id === regionId && state.lastTouched?.point)
      ? state.lastTouched.point
      : fallbackPlacement(region, countPlacements(existingPlacements));

  if (region.type === 'industrial') {
    interestLevels.forEach((level) => {
      state.future[side][regionId][level.id] = [];
    });
    state.future[side][regionId][interestId] = [placement];
  } else {
    existingPlacements.push(placement);
  }

  state.selectedRegion.future = regionId;
  state.lastTouched = { id: regionId, mode: 'future', source: 'interest-helper', point: placement };
  renderMapSteps();
}

function renderTally(container, mode) {
  const side = currentSide();
  container.innerHTML = '';

  const entries = mode === 'existing' ? existingTallyEntries(side) : futureTallyEntries(side);

  const heading = document.createElement('h3');
  heading.textContent = mode === 'existing' ? 'Have' : 'Want / Interested In';
  container.appendChild(heading);

  if (!entries.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-tally';
    empty.textContent = mode === 'existing'
      ? 'Tap the diagram to add piercings you already have.'
      : 'Tap the diagram to choose a placement, then pick Love it, Interested, or Curious.';
    container.appendChild(empty);
    return;
  }

  const list = document.createElement('div');
  list.className = 'tally-list';

  entries.forEach((entry) => {
    const item = document.createElement('div');
    item.className = 'tally-item';
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `Remove one ${entry.label}`);
    item.addEventListener('click', () => decrementTally(entry, mode));
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        decrementTally(entry, mode);
      }
    });

    const text = document.createElement('span');
    text.className = 'tally-label';
    text.textContent = entry.label;

    const remove = document.createElement('span');
    remove.className = 'tally-remove';
    remove.textContent = '−';
    remove.setAttribute('aria-hidden', 'true');

    item.appendChild(text);
    item.appendChild(remove);
    list.appendChild(item);
  });

  container.appendChild(list);
}

function existingTallyEntries(side) {
  return regions
    .map((region) => ({
      regionId: region.id,
      label: `${region.label} ×${countPlacements(state.existing[side][region.id])}`,
      count: countPlacements(state.existing[side][region.id])
    }))
    .filter((entry) => entry.count > 0);
}

function futureTallyEntries(side) {
  const entries = [];
  regions.forEach((region) => {
    interestLevels.forEach((level) => {
      const count = countPlacements(state.future[side][region.id][level.id]);
      if (count > 0) {
        entries.push({
          regionId: region.id,
          interestId: level.id,
          label: `${region.label} ×${count} — ${level.short}`,
          count
        });
      }
    });
  });
  return entries;
}

function decrementTally(entry, mode) {
  const side = currentSide();
  if (mode === 'existing') {
    state.existing[side][entry.regionId].pop();
  } else {
    state.future[side][entry.regionId][entry.interestId].pop();
  }
  state.selectedRegion[mode] = entry.regionId;
  state.lastTouched = { id: entry.regionId, mode, source: 'tally' };
  renderMapSteps();
}

function totalFutureRegionCount(side, id) {
  return interestLevels.reduce((total, level) => total + countPlacements(state.future[side][id][level.id]), 0);
}

function renderSummary(mode) {
  const side = currentSide();
  const prefix = mode === 'existing' ? 'existing' : 'future';
  const entries = mode === 'existing' ? existingTallyEntries(side) : futureTallyEntries(side);
  const emptyText = mode === 'existing' ? 'Current piercings: none yet' : 'Ideas: none yet';
  const filledText = mode === 'existing'
    ? `Current piercings: ${entries.map((entry) => entry.label).join(', ')}`
    : `Ideas: ${entries.map((entry) => entry.label).join(', ')}`;

  const line = $(`#${prefix}-summary-line`);
  const toggle = $(`#${prefix}-summary-toggle`);
  const drawer = $(`#${prefix}-summary-drawer`);

  if (line) line.textContent = entries.length ? filledText : emptyText;
  if (toggle) toggle.setAttribute('aria-expanded', state.summaryExpanded ? 'true' : 'false');
  if (drawer) drawer.classList.toggle('is-hidden', !state.summaryExpanded);
}


function interestButtonSubtext(id) {
  if (id === 'love') return 'Top choice';
  if (id === 'maybe') return 'Worth discussing';
  if (id === 'curious') return 'Open to it';
  return '';
}

function interestButtonIcon(id) {
  if (id === 'love') return '★';
  if (id === 'maybe') return '◆';
  if (id === 'curious') return '?';
  return '•';
}

function renderDetailPanel(panel, mode) {
  const selectedId = state.selectedRegion[mode];
  panel.classList.toggle('is-hidden', !selectedId);

  if (!selectedId) return;

  const region = regionById(selectedId);
  const actionText = mode === 'existing'
    ? (region.type === 'industrial'
      ? 'Tap the highlighted area once to place the industrial bar.'
      : 'Tap the highlighted area to add one you already have.')
    : (region.type === 'industrial'
      ? 'Tap the highlighted area, then choose an interest level. Only one industrial idea can be saved.'
      : 'Tap the highlighted area to choose an exact placement, then pick an interest level.');

  if (mode === 'existing') {
    panel.innerHTML = `
      <button class="helper-close" type="button" aria-label="Close helper">×</button>
      <h3>${region.label}</h3>
      <p>${region.copy}</p>
      <p class="detail-helper"><strong>${actionText}</strong> Tap a marker or summary item to remove one.</p>
    `;
    panel.querySelector('.helper-close').addEventListener('click', () => {
      state.selectedRegion.existing = null;
      renderMapSteps();
    });
    return;
  }

  const side = currentSide();
  const currentCounts = interestLevels
    .map((level) => ({ ...level, count: countPlacements(state.future[side][region.id][level.id]) }))
    .filter((level) => level.count > 0);
  const currentText = currentCounts.length
    ? currentCounts.map((level) => `${level.label} ×${level.count}`).join(' · ')
    : 'No interest level selected yet.';

  panel.innerHTML = `
    <button class="helper-close" type="button" aria-label="Close helper">×</button>
    <div class="interest-primary">
      <p class="interest-kicker">${region.label}</p>
      <h3>How interested are you?</h3>
      <div class="interest-actions primary-interest-actions" role="group" aria-label="Choose interest level for ${region.label}">
        ${interestLevels.map((level) => `
          <button class="interest-choice interest-${level.id}" type="button" data-add-interest="${level.id}" data-region-id="${region.id}">
            <span class="interest-choice-icon" aria-hidden="true">${interestButtonIcon(level.id)}</span>
            <span class="interest-choice-label">${level.label}</span>
            <span class="interest-choice-sub">${interestButtonSubtext(level.id)}</span>
          </button>
        `).join('')}
      </div>
      <p class="detail-helper small interest-current"><strong>Saved:</strong> ${currentText}</p>
    </div>
    <div class="region-context">
      <p><strong>About the ${region.label}:</strong> ${region.copy}</p>
      <p class="detail-helper small">${region.type === 'industrial' ? 'Industrial can only be saved once. Choosing another level replaces the previous one.' : 'Tap the ear first for exact placement. Tap a marker or summary item to remove one.'}</p>
    </div>
  `;

  panel.querySelector('.helper-close').addEventListener('click', () => {
    state.selectedRegion.future = null;
    renderMapSteps();
  });

  panel.querySelectorAll('[data-add-interest]').forEach((button) => {
    button.addEventListener('click', () => addFutureInterest(button.dataset.regionId, button.dataset.addInterest));
  });
}

document.addEventListener('DOMContentLoaded', init);
