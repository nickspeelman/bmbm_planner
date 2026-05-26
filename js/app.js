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

const groups = ['LOBES', 'OUTER EAR', 'INNER EAR', 'ADVANCED'];
const interestLevels = [
  { id: 'curious', label: 'Curious', short: 'Curious', markerState: 'curious' },
  { id: 'maybe', label: 'Maybe', short: 'Maybe', markerState: 'maybe' },
  { id: 'love', label: 'Love it', short: 'Love it', markerState: 'love' }
];

const emptyRegionCounts = () => Object.fromEntries(regions.map((region) => [region.id, 0]));
const emptyFutureCounts = () => Object.fromEntries(
  regions.map((region) => [
    region.id,
    Object.fromEntries(interestLevels.map((level) => [level.id, 0]))
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
  renderTally($('#existing-tally'), 'existing');
  renderTally($('#future-tally'), 'future');
  renderDetailPanels();
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
  path.addEventListener('click', () => handleDiagramRegionTap(region.id, mode));
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
      const existingCount = state.existing[side][region.id] || 0;
      addRegionMarkers(markerLayer, region, existingCount, 'existing-muted', { removable: false });
    });
  }

  regions.forEach((region) => {
    if (mode === 'existing') {
      addRegionMarkers(markerLayer, region, state.existing[side][region.id] || 0, 'existing', {
        removable: true,
        mode: 'existing',
        regionId: region.id
      });
      return;
    }

    interestLevels.forEach((level) => {
      const count = state.future[side][region.id][level.id] || 0;
      addRegionMarkers(markerLayer, region, count, level.markerState, {
        removable: true,
        mode: 'future',
        regionId: region.id,
        interestId: level.id
      });
    });
  });
}

function addRegionMarkers(markerLayer, region, count, markerState, options = {}) {
  for (let index = 0; index < count; index += 1) {
    markerLayer.appendChild(makeMarker(region, markerState, index, options));
  }
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
    const point = markerPoint(region, index);
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
    const lift = index * 9;
    line.setAttribute('class', 'marker-bar');
    line.setAttribute('x1', 172);
    line.setAttribute('y1', 128 + lift);
    line.setAttribute('x2', 376);
    line.setAttribute('y2', 142 + lift);
    group.appendChild(line);

    [
      { x: 172, y: 128 + lift },
      { x: 376, y: 142 + lift }
    ].forEach((point) => {
      const endpoint = document.createElementNS(svgNS, 'circle');
      endpoint.setAttribute('class', 'marker-industrial-end');
      endpoint.setAttribute('cx', point.x);
      endpoint.setAttribute('cy', point.y);
      endpoint.setAttribute('r', 8.8);
      group.appendChild(endpoint);
    });

    if (options.removable) group.appendChild(makeMarkerHit('industrial', null, index));
    return group;
  }

  const point = markerPoint(region, index);
  const dot = document.createElementNS(svgNS, 'circle');
  dot.setAttribute('class', 'marker-dot');
  dot.setAttribute('cx', point.x);
  dot.setAttribute('cy', point.y);
  dot.setAttribute('r', markerState === 'love' ? 10.5 : 9.2);
  group.appendChild(dot);
  if (options.removable) group.appendChild(makeMarkerHit('dot', point, index));
  return group;
}

function makeMarkerHit(kind, point, index = 0) {
  if (kind === 'industrial') {
    const hit = document.createElementNS(svgNS, 'line');
    const lift = index * 9;
    hit.setAttribute('class', 'marker-remove-hit');
    hit.setAttribute('x1', 172);
    hit.setAttribute('y1', 128 + lift);
    hit.setAttribute('x2', 376);
    hit.setAttribute('y2', 142 + lift);
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
    state.existing[side][options.regionId] = Math.max(0, (state.existing[side][options.regionId] || 0) - 1);
    state.selectedRegion.existing = options.regionId;
    state.lastTouched = { id: options.regionId, mode: 'existing', source: 'marker-remove' };
  }

  if (options.mode === 'future') {
    state.future[side][options.regionId][options.interestId] = Math.max(0, (state.future[side][options.regionId][options.interestId] || 0) - 1);
    state.selectedRegion.future = options.regionId;
    state.lastTouched = { id: options.regionId, mode: 'future', source: 'marker-remove' };
  }

  renderStepThree();
}

function renderChips(container, mode) {
  const side = currentSide();
  container.innerHTML = '';

  groups.forEach((group) => {
    const groupRegions = regions.filter((region) => region.group === group);
    if (!groupRegions.length) return;

    const groupWrap = document.createElement('div');
    const label = document.createElement('p');
    const row = document.createElement('div');

    label.className = 'chip-group-label';
    label.textContent = group;
    row.className = 'chip-row';

    groupRegions.forEach((region) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = getChipClass(region.id, mode, side);
      chip.textContent = getChipLabel(region, mode, side);
      chip.setAttribute('aria-pressed', state.selectedRegion[mode] === region.id ? 'true' : 'false');
      chip.addEventListener('click', () => handleChipTap(region.id, mode));
      row.appendChild(chip);
    });

    groupWrap.appendChild(label);
    groupWrap.appendChild(row);
    container.appendChild(groupWrap);
  });
}

function getChipClass(id, mode, side) {
  const classes = ['chip'];
  if (state.selectedRegion[mode] === id) classes.push('is-selected-region');

  if (mode === 'existing' && (state.existing[side][id] || 0) > 0) {
    classes.push('has-count');
  }

  if (mode === 'future' && totalFutureRegionCount(side, id) > 0) {
    classes.push('has-count');
  }

  return classes.join(' ');
}

function getChipLabel(region, mode, side) {
  if (mode === 'existing') {
    const count = state.existing[side][region.id] || 0;
    return count > 0 ? `${region.label} ×${count}` : region.label;
  }

  const count = totalFutureRegionCount(side, region.id);
  return count > 0 ? `${region.label} ×${count}` : region.label;
}

function handleChipTap(id, mode) {
  state.selectedRegion[mode] = id;
  state.lastTouched = { id, mode, source: 'chip' };
  renderStepThree();
}

function handleDiagramRegionTap(id, mode) {
  const side = currentSide();
  state.selectedRegion[mode] = id;
  state.lastTouched = { id, mode, source: 'diagram' };

  if (mode === 'existing') {
    state.existing[side][id] = (state.existing[side][id] || 0) + 1;
  }

  renderStepThree();

  const detailId = mode === 'existing' ? 'existing-detail' : 'future-detail';
  const detail = $(`#${detailId}`);
  detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function addFutureInterest(regionId, interestId) {
  const side = currentSide();
  state.future[side][regionId][interestId] += 1;
  state.selectedRegion.future = regionId;
  state.lastTouched = { id: regionId, mode: 'future', source: 'interest-helper' };
  renderStepThree();
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
      : 'Tap the diagram to choose a placement, then pick Curious, Maybe, or Love it.';
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
      label: `${region.label} ×${state.existing[side][region.id] || 0}`,
      count: state.existing[side][region.id] || 0
    }))
    .filter((entry) => entry.count > 0);
}

function futureTallyEntries(side) {
  const entries = [];
  regions.forEach((region) => {
    interestLevels.forEach((level) => {
      const count = state.future[side][region.id][level.id] || 0;
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
    state.existing[side][entry.regionId] = Math.max(0, (state.existing[side][entry.regionId] || 0) - 1);
  } else {
    state.future[side][entry.regionId][entry.interestId] = Math.max(0, (state.future[side][entry.regionId][entry.interestId] || 0) - 1);
  }
  state.selectedRegion[mode] = entry.regionId;
  state.lastTouched = { id: entry.regionId, mode, source: 'tally' };
  renderStepThree();
}

function totalFutureRegionCount(side, id) {
  return interestLevels.reduce((total, level) => total + (state.future[side][id][level.id] || 0), 0);
}

function renderDetailPanels() {
  renderDetailPanel($('#existing-detail'), 'existing');
  renderDetailPanel($('#future-detail'), 'future');
}

function renderDetailPanel(panel, mode) {
  const selectedId = state.selectedRegion[mode];
  panel.classList.toggle('is-hidden', !selectedId);

  if (!selectedId) return;

  const region = regionById(selectedId);

  if (mode === 'existing') {
    panel.innerHTML = `
      <h3>${region.label}</h3>
      <p>${region.copy}</p>
      <p class="detail-helper"><strong>Tap this region on the diagram to add one existing piercing.</strong> Tap an existing marker on the ear, or tap the matching summary row below, to remove one.</p>
    `;
    return;
  }

  const side = currentSide();
  const currentCounts = interestLevels
    .map((level) => ({ ...level, count: state.future[side][region.id][level.id] || 0 }))
    .filter((level) => level.count > 0);
  const currentText = currentCounts.length
    ? currentCounts.map((level) => `${level.label} ×${level.count}`).join(' · ')
    : 'No interest level selected yet.';

  panel.innerHTML = `
    <h3>${region.label}</h3>
    <p>${region.copy}</p>
    <p class="detail-helper"><strong>Current selection:</strong> ${currentText}</p>
    <div class="interest-actions" role="group" aria-label="Choose interest level for ${region.label}">
      ${interestLevels.map((level) => `
        <button type="button" data-add-interest="${level.id}" data-region-id="${region.id}">${level.label}</button>
      `).join('')}
    </div>
    <p class="detail-helper small">Tap an interest level to add one ${region.label}. Tap a marker on the ear, or tap the matching summary row below, to remove one.</p>
  `;

  panel.querySelectorAll('[data-add-interest]').forEach((button) => {
    button.addEventListener('click', () => addFutureInterest(button.dataset.regionId, button.dataset.addInterest));
  });
}

document.addEventListener('DOMContentLoaded', init);
