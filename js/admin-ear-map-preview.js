const ADMIN_SVG_NS = 'http://www.w3.org/2000/svg';
const ADMIN_ID_TOKEN_STORAGE_KEY = 'bmbmAdminIdToken';

const adminState = {
  idToken: sessionStorage.getItem(ADMIN_ID_TOKEN_STORAGE_KEY) || '',
  adminUser: null,
  config: null,
  draftConfig: null,
  activeAnatomyKey: 'detached',
  selected: {
    detached: null,
    attached: null
  },
  selectedPointIndex: null,
  editMode: 'placements',
  selectedBoundaryPointIndex: null,
  boundaryDrag: null,
  drag: null,
  dirty: false,
  saving: false
};

const admin$ = (selector) => document.querySelector(selector);

window.handleGoogleCredential = async function handleGoogleCredential(response) {
  clearAdminLoginError();

  if (!response?.credential) {
    showAdminLoginError('Google did not return a credential. Please try signing in again.');
    return;
  }

  adminState.idToken = response.credential;
  sessionStorage.setItem(ADMIN_ID_TOKEN_STORAGE_KEY, adminState.idToken);

  await loadProtectedAdminConfig();
};

document.addEventListener('DOMContentLoaded', initAdminPage);

function initAdminPage() {
  setupAdminSignOut();
  setupAdminDragHandlers();

  if (adminState.idToken) {
    setAdminLoginStatus('Checking saved sign-in…');
    loadProtectedAdminConfig();
  }
}

function setupAdminDragHandlers() {
  document.addEventListener('pointermove', handleAdminPointerMove);
  document.addEventListener('pointerup', handleAdminPointerUp);
  document.addEventListener('pointercancel', handleAdminPointerUp);

  document.addEventListener('pointermove', handleAdminBoundaryPointerMove);
  document.addEventListener('pointerup', handleAdminBoundaryPointerUp);
  document.addEventListener('pointercancel', handleAdminBoundaryPointerUp);
}

function setupAdminSignOut() {
  const signOutButton = admin$('#admin-signout-btn');
  if (!signOutButton) return;

  signOutButton.addEventListener('click', () => {
    sessionStorage.removeItem(ADMIN_ID_TOKEN_STORAGE_KEY);
    adminState.idToken = '';
    adminState.adminUser = null;
    adminState.config = null;
    adminState.draftConfig = null;
    showLoginView();
    setAdminLoginStatus('Signed out.');
  });
}

async function loadProtectedAdminConfig() {
  clearAdminLoginError();
  setAdminLoginStatus('Checking access…');

  try {
    const payload = await postAdminAction('getAdminEarMapConfig', {
      idToken: adminState.idToken
    });

    if (!payload.success) {
      throw new Error(payload.error || 'Admin access denied.');
    }

    const validationErrors = validateAdminEarMapConfig(payload.config);
    if (validationErrors.length) {
      throw new Error(`Loaded config is invalid: ${validationErrors.join(' | ')}`);
    }

    adminState.adminUser = payload.adminUser || null;
    adminState.draftConfig = payload.draftConfig || null;
    adminState.config = getEditableAdminConfigFromPayload(payload);

    showAdminAppView();
    renderAdminPreview();
  } catch (error) {
    console.error('[admin-ear-map] Protected config load failed:', error);
    sessionStorage.removeItem(ADMIN_ID_TOKEN_STORAGE_KEY);
    adminState.idToken = '';
    showLoginView();
    showAdminLoginError(error.message || String(error));
  }
}

async function postAdminAction(action, body = {}) {
  if (!window.BMBM_APPS_SCRIPT_URL || window.BMBM_APPS_SCRIPT_URL.includes('PASTE_YOUR')) {
    throw new Error('Missing BMBM_APPS_SCRIPT_URL in admin/index.html.');
  }

  const url = new URL(window.BMBM_APPS_SCRIPT_URL);
  url.searchParams.set('action', action);

  const response = await fetch(url.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8'
    },
    body: JSON.stringify({
      ...body,
      action
    })
  });

  const text = await response.text();

  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error(`Apps Script did not return JSON: ${text.slice(0, 300)}`);
  }
}

function getEditableAdminConfigFromPayload(payload) {
  const draftConfig = payload?.draftConfig;

  // Most likely shape:
  // {
  //   config: { ...actual ear map config... },
  //   updatedAt: "...",
  //   updatedBy: "..."
  // }
  if (draftConfig?.config) {
    return draftConfig.config;
  }

  // Fallback in case your backend saves the draft config directly.
  if (draftConfig?.anatomies && draftConfig?.regionGroups) {
    return draftConfig;
  }

  return payload.config;
}

function showLoginView() {
  admin$('#admin-login')?.classList.remove('is-hidden');
  admin$('#admin-app')?.classList.add('is-hidden');
}

function showAdminAppView() {
  const login = admin$('#admin-login');
  const app = admin$('#admin-app');
  const userCard = admin$('#admin-user-card');
  const userEmail = admin$('#admin-user-email');
  const adminStatus = admin$('#admin-status');
  const debugPanel = admin$('#admin-debug-panel');

  if (login) login.classList.add('is-hidden');
  if (app) app.classList.remove('is-hidden');
  if (userCard) userCard.classList.remove('is-hidden');

  if (userEmail) {
    userEmail.textContent = adminState.adminUser?.email || 'unknown user';
  }

  if (adminStatus) {
    const draftText = adminState.draftConfig
      ? ` Draft available from ${adminState.draftConfig.updatedAt || 'unknown date'}.`
      : ' No draft config saved yet.';

    adminStatus.textContent = `Loaded published config version ${adminState.config?.version || 'unknown'}.${draftText}`;
  }

  if (debugPanel) {
    debugPanel.classList.remove('is-hidden');
    debugPanel.textContent = 'Choose an anatomy and region, then tap the ear to add or move default placements.';
  }
}

function setAdminLoginStatus(message) {
  const status = admin$('#admin-login-status');
  if (status) status.textContent = message || '';
}

function showAdminLoginError(message) {
  const error = admin$('#admin-login-error');
  if (!error) return;
  error.textContent = message || 'Something went wrong.';
  error.classList.remove('is-hidden');
  setAdminLoginStatus('');
}

function clearAdminLoginError() {
  const error = admin$('#admin-login-error');
  if (!error) return;
  error.textContent = '';
  error.classList.add('is-hidden');
}

function validateAdminEarMapConfig(config) {
  const errors = [];

  if (!config || typeof config !== 'object') {
    return ['Config must be an object.'];
  }

  if (!config.viewBox) errors.push('Missing viewBox.');
  if (!Array.isArray(config.regionGroups)) errors.push('Missing regionGroups array.');

  if (!config.anatomies || typeof config.anatomies !== 'object') {
    errors.push('Missing anatomies object.');
    return errors;
  }

  ['detached', 'attached'].forEach((anatomyKey) => {
    const anatomy = config.anatomies[anatomyKey];

    if (!anatomy) {
      errors.push(`Missing anatomy: ${anatomyKey}.`);
      return;
    }

    if (!anatomy.baseImage) {
      errors.push(`${anatomyKey} is missing baseImage.`);
    }

    if (!Array.isArray(anatomy.regions)) {
      errors.push(`${anatomyKey} is missing regions array.`);
      return;
    }

    anatomy.regions.forEach((region, index) => {
      const label = `${anatomyKey}.regions[${index}]`;

      if (!region.id) errors.push(`${label} is missing id.`);
      if (!region.label) errors.push(`${label} is missing label.`);
      if (!region.type) errors.push(`${label} is missing type.`);
      if (!region.path) errors.push(`${label} is missing path.`);
      if (!Array.isArray(region.positions)) errors.push(`${label} is missing positions array.`);
    });
  });

  return errors;
}

function renderAdminPreview() {
  const root = admin$('#admin-preview-root');
  if (!root || !adminState.config) return;

  ensureAdminSelection();

  root.innerHTML = '';
  root.appendChild(renderAdminEditor());
}

function ensureAdminSelection() {
  const config = adminState.config;
  if (!config?.anatomies) return;

  if (!config.anatomies[adminState.activeAnatomyKey]) {
    adminState.activeAnatomyKey = Object.keys(config.anatomies)[0] || 'detached';
  }

  ['detached', 'attached'].forEach((anatomyKey) => {
    const anatomy = config.anatomies[anatomyKey];
    if (!anatomy?.regions?.length) return;

    const selectedId = adminState.selected[anatomyKey];
    const selectedStillExists = anatomy.regions.some((region) => region.id === selectedId);

    if (!selectedId || !selectedStillExists) {
      adminState.selected[anatomyKey] = getOrderedRegions(anatomy.regions)[0]?.id || null;
    }
  });

  const selectedRegion = getSelectedAdminRegion();

  if (!selectedRegion) {
    adminState.selectedPointIndex = null;
    return;
  }

  normalizeAdminRegionPositions(selectedRegion);

  if (selectedRegion.type === 'industrial') {
    if (adminState.selectedPointIndex !== 0 && adminState.selectedPointIndex !== 1) {
      adminState.selectedPointIndex = 0;
    }
    return;
  }

  if (
    adminState.selectedPointIndex !== null &&
    !selectedRegion.positions[adminState.selectedPointIndex]
  ) {
    adminState.selectedPointIndex = null;
  }
}

function renderAdminEditor() {
  const anatomyKey = adminState.activeAnatomyKey;
  const anatomy = adminState.config.anatomies[anatomyKey];

  const card = document.createElement('section');
  card.className = 'admin-preview-card admin-editor-card';

  const top = document.createElement('div');
  top.className = 'admin-editor-top';

  const heading = document.createElement('h2');
  heading.textContent = adminState.editMode === 'boundary'
  ? 'Region shape editor'
  : 'Default placement editor';

  top.appendChild(heading);
  top.appendChild(renderAdminEditorControls());

  card.appendChild(top);

  const layout = document.createElement('div');
  layout.className = 'admin-map-layout';

  const stage = document.createElement('div');
  stage.className = 'admin-stage';
  stage.appendChild(renderEarCanvas(anatomyKey, anatomy));

  const regionList = renderRegionList(anatomyKey, anatomy);

  layout.appendChild(stage);
  layout.appendChild(regionList);
  card.appendChild(layout);

  const detail = document.createElement('div');
  detail.className = 'admin-detail';
  detail.id = `admin-detail-${anatomyKey}`;
  card.appendChild(detail);

  renderRegionDetail(detail, anatomyKey);

  return card;
}

function renderAdminEditorControls() {
  const wrap = document.createElement('div');
  wrap.className = 'admin-editor-controls';

  const anatomyGroup = document.createElement('div');
  anatomyGroup.className = 'admin-control-group';

  const anatomyLabel = document.createElement('div');
  anatomyLabel.className = 'admin-control-label';
  anatomyLabel.textContent = 'Anatomy';

  const anatomyTabs = document.createElement('div');
  anatomyTabs.className = 'admin-segmented';

  ['detached', 'attached'].forEach((anatomyKey) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = adminState.activeAnatomyKey === anatomyKey ? 'is-selected' : '';
    button.textContent = anatomyKey === 'detached' ? 'Detached' : 'Attached';
    button.addEventListener('click', () => {
      adminState.activeAnatomyKey = anatomyKey;
      adminState.selectedPointIndex = null;
      renderAdminPreview();
    });
    anatomyTabs.appendChild(button);
  });

  anatomyGroup.appendChild(anatomyLabel);
  anatomyGroup.appendChild(anatomyTabs);

  const modeGroup = document.createElement('div');
  modeGroup.className = 'admin-control-group';

  const modeLabel = document.createElement('div');
  modeLabel.className = 'admin-control-label';
  modeLabel.textContent = 'Edit mode';

  const modeTabs = document.createElement('div');
  modeTabs.className = 'admin-edit-mode-tabs';

  [
    { id: 'placements', label: 'Placements' },
    { id: 'boundary', label: 'Region shape' }
  ].forEach((mode) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = adminState.editMode === mode.id ? 'is-selected' : '';
    button.textContent = mode.label;

    button.addEventListener('click', () => {
      adminState.editMode = mode.id;
      adminState.selectedPointIndex = null;
      adminState.selectedBoundaryPointIndex = null;
      adminState.drag = null;
      adminState.boundaryDrag = null;
      renderAdminPreview();
    });

    modeTabs.appendChild(button);
  });

  modeGroup.appendChild(modeLabel);
  modeGroup.appendChild(modeTabs);

  const saveGroup = document.createElement('div');
  saveGroup.className = 'admin-save-row';

  const saveButton = document.createElement('button');
  saveButton.type = 'button';
  saveButton.className = 'admin-action-btn';
  saveButton.disabled = adminState.saving || !adminState.dirty;
  saveButton.textContent = adminState.saving
    ? 'Saving…'
    : adminState.dirty
      ? 'Save draft'
      : 'Saved';

  saveButton.addEventListener('click', saveAdminDraftConfig);

  const publishButton = document.createElement('button');
  publishButton.type = 'button';
  publishButton.className = 'admin-action-btn';
  publishButton.disabled = adminState.saving || adminState.dirty;
  publishButton.textContent = 'Publish draft';

  publishButton.addEventListener('click', publishAdminDraftConfig);

  const saveNote = document.createElement('p');
  saveNote.className = 'admin-status';
  saveNote.textContent = adminState.dirty
    ? 'You have unsaved placement changes.'
    : 'No unsaved placement changes.';

  saveGroup.appendChild(saveButton);
  saveGroup.appendChild(publishButton);
  saveGroup.appendChild(saveNote);

  wrap.appendChild(anatomyGroup);
  wrap.appendChild(modeGroup);
  wrap.appendChild(saveGroup);

  return wrap;
}

function renderEarCanvas(anatomyKey, anatomy) {
  const config = adminState.config;
  const canvas = document.createElement('div');
  canvas.className = 'admin-ear-canvas';
  canvas.dataset.anatomyKey = anatomyKey;

  const img = document.createElement('img');
  img.className = 'admin-ear-base';
  img.src = adminAssetUrl(anatomy.baseImage);
  img.alt = `${anatomyKey} ear map preview`;

  const regionLayer = document.createElementNS(ADMIN_SVG_NS, 'svg');
  regionLayer.setAttribute(
    'class',
    adminState.editMode === 'boundary'
      ? 'admin-region-layer is-boundary-editing'
      : 'admin-region-layer'
  );
  regionLayer.setAttribute('viewBox', config.viewBox);
  regionLayer.setAttribute('aria-label', `${anatomyKey} ear regions`);

  const markerLayer = document.createElementNS(ADMIN_SVG_NS, 'svg');
  markerLayer.setAttribute('class', 'admin-marker-layer');
  markerLayer.setAttribute('viewBox', config.viewBox);
  markerLayer.setAttribute('aria-label', `${anatomyKey} placement editor`);
  markerLayer.dataset.anatomyKey = anatomyKey;

  anatomy.regions.forEach((region) => {
    regionLayer.appendChild(makeAdminRegionPath(anatomyKey, region));
  });

  const selectedRegion = getSelectedAdminRegion(anatomyKey);

  if (selectedRegion && adminState.editMode === 'placements') {
    addAdminEditableMarkers(markerLayer, anatomyKey, selectedRegion);
  }

  if (selectedRegion && adminState.editMode === 'boundary') {
    addAdminBoundaryEditor(markerLayer, anatomyKey, selectedRegion);
  }

  canvas.addEventListener('click', (event) => handleAdminCanvasClick(event, anatomyKey));

  canvas.appendChild(img);
  canvas.appendChild(regionLayer);
  canvas.appendChild(markerLayer);

  return canvas;
}

function makeAdminRegionPath(anatomyKey, region) {
  const path = document.createElementNS(ADMIN_SVG_NS, 'path');

  path.setAttribute('d', region.path);
  path.setAttribute('class', getAdminRegionClass(anatomyKey, region.id));
  path.setAttribute('aria-label', `${region.label} region`);

  return path;
}

function getAdminRegionClass(anatomyKey, regionId) {
  return [
    'admin-region',
    adminState.selected[anatomyKey] === regionId ? 'is-selected' : ''
  ].filter(Boolean).join(' ');
}

function addAdminEditableMarkers(markerLayer, anatomyKey, region) {
  normalizeAdminRegionPositions(region);

  if (region.type === 'industrial') {
    addAdminEditableIndustrialMarker(markerLayer, anatomyKey, region);
    return;
  }

  region.positions.forEach((point, index) => {
    const group = document.createElementNS(ADMIN_SVG_NS, 'g');
    group.setAttribute('class', 'admin-edit-point');
    group.classList.toggle('is-selected', adminState.selectedPointIndex === index);
    group.dataset.pointIndex = String(index);
    group.setAttribute('tabindex', '0');
    group.setAttribute('role', 'button');
    group.setAttribute('aria-label', `${region.label} placement ${index + 1}`);

    group.addEventListener('pointerdown', (event) => handleAdminPointPointerDown(event, anatomyKey, index));
    group.addEventListener('click', (event) => {
      event.stopPropagation();
      adminState.selectedPointIndex = index;
      renderAdminPreview();
    });

    if (region.type === 'ring') {
      const ring = document.createElementNS(ADMIN_SVG_NS, 'circle');
      ring.setAttribute('class', 'admin-marker-ring');
      ring.setAttribute('cx', point.x);
      ring.setAttribute('cy', point.y);
      ring.setAttribute('r', 18 + Math.min(index, 2) * 2);

      const hit = document.createElementNS(ADMIN_SVG_NS, 'circle');
      hit.setAttribute('class', 'admin-marker-hit');
      hit.setAttribute('cx', point.x);
      hit.setAttribute('cy', point.y);
      hit.setAttribute('r', 22);

      group.appendChild(ring);
      group.appendChild(hit);
    } else {
      const dot = document.createElementNS(ADMIN_SVG_NS, 'circle');
      dot.setAttribute('class', 'admin-marker-dot');
      dot.setAttribute('cx', point.x);
      dot.setAttribute('cy', point.y);
      dot.setAttribute('r', 8.5);

      const hit = document.createElementNS(ADMIN_SVG_NS, 'circle');
      hit.setAttribute('class', 'admin-marker-hit');
      hit.setAttribute('cx', point.x);
      hit.setAttribute('cy', point.y);
      hit.setAttribute('r', 18);

      group.appendChild(dot);
      group.appendChild(hit);
    }

    markerLayer.appendChild(group);
  });
}

function addAdminEditableIndustrialMarker(markerLayer, anatomyKey, region) {
  const start = region.positions[0];
  const end = region.positions[1];

  const line = document.createElementNS(ADMIN_SVG_NS, 'line');
  line.setAttribute('class', 'admin-industrial-bar');
  line.setAttribute('x1', start.x);
  line.setAttribute('y1', start.y);
  line.setAttribute('x2', end.x);
  line.setAttribute('y2', end.y);
  markerLayer.appendChild(line);

  [start, end].forEach((point, index) => {
    const group = document.createElementNS(ADMIN_SVG_NS, 'g');
    group.setAttribute('class', 'admin-edit-point');
    group.classList.toggle('is-selected', adminState.selectedPointIndex === index);
    group.dataset.pointIndex = String(index);
    group.setAttribute('tabindex', '0');
    group.setAttribute('role', 'button');
    group.setAttribute('aria-label', index === 0 ? 'Industrial start point' : 'Industrial end point');

    group.addEventListener('pointerdown', (event) => handleAdminPointPointerDown(event, anatomyKey, index));
    group.addEventListener('click', (event) => {
      event.stopPropagation();
      adminState.selectedPointIndex = index;
      renderAdminPreview();
    });

    const endpoint = document.createElementNS(ADMIN_SVG_NS, 'circle');
    endpoint.setAttribute('class', 'admin-industrial-end');
    endpoint.setAttribute('cx', point.x);
    endpoint.setAttribute('cy', point.y);
    endpoint.setAttribute('r', 8.8);

    const hit = document.createElementNS(ADMIN_SVG_NS, 'circle');
    hit.setAttribute('class', 'admin-marker-hit');
    hit.setAttribute('cx', point.x);
    hit.setAttribute('cy', point.y);
    hit.setAttribute('r', 18);

    group.appendChild(endpoint);
    group.appendChild(hit);
    markerLayer.appendChild(group);
  });
}

function renderRegionList(anatomyKey, anatomy) {
  const list = document.createElement('div');
  list.className = 'admin-region-list';

  const orderedRegions = getOrderedRegions(anatomy.regions);

  orderedRegions.forEach((region) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = getAdminRegionButtonClass(anatomyKey, region.id);
    button.textContent = `${region.label} · ${region.type}`;
    button.addEventListener('click', () => selectAdminRegion(anatomyKey, region.id));
    list.appendChild(button);
  });

  return list;
}

function getOrderedRegions(regions) {
  const config = adminState.config;
  const regionById = Object.fromEntries(regions.map((region) => [region.id, region]));
  const ordered = [];

  config.regionGroups.forEach((group) => {
    group.regionIds.forEach((regionId) => {
      if (regionById[regionId]) {
        ordered.push(regionById[regionId]);
      }
    });
  });

  regions.forEach((region) => {
    if (!ordered.some((item) => item.id === region.id)) {
      ordered.push(region);
    }
  });

  return ordered;
}

function getAdminRegionButtonClass(anatomyKey, regionId) {
  return [
    'admin-region-button',
    adminState.selected[anatomyKey] === regionId ? 'is-selected' : ''
  ].filter(Boolean).join(' ');
}

function selectAdminRegion(anatomyKey, regionId) {
  adminState.activeAnatomyKey = anatomyKey;
  adminState.selected[anatomyKey] = regionId;
  adminState.selectedPointIndex = null;
  renderAdminPreview();
}

function renderRegionDetail(container, anatomyKey) {
  const selectedId = adminState.selected[anatomyKey];
  const anatomy = adminState.config.anatomies[anatomyKey];

  if (!selectedId) {
    container.innerHTML = `
      <h3>No region selected</h3>
      <p>Choose a region from the region list.</p>
    `;
    return;
  }

  const region = anatomy.regions.find((item) => item.id === selectedId);

  if (!region) {
    container.innerHTML = `
      <h3>Region not found</h3>
      <p>The selected region could not be found in this anatomy config.</p>
    `;
    return;
  }

  normalizeAdminRegionPositions(region);

  const industrialLength = region.type === 'industrial'
    ? getIndustrialLength(region)
    : null;

  const pointRows = region.positions.map((point, index) => {
    const label = region.type === 'industrial'
      ? index === 0 ? 'Start point' : 'End point'
      : `Placement ${index + 1}`;

    return `
      <div class="admin-point-row ${adminState.selectedPointIndex === index ? 'is-selected' : ''}">
        <div>
          <strong>${escapeAdminHtml(label)}</strong>
          <div class="admin-point-meta">
            x: ${Number(point.x).toFixed(1)}, y: ${Number(point.y).toFixed(1)}
          </div>
        </div>
        <button type="button" data-admin-point-select="${index}">Select</button>
      </div>
    `;
  }).join('');

  const deleteButton = region.type === 'industrial'
    ? ''
    : `
      <button
        type="button"
        class="admin-danger-btn"
        id="admin-delete-point-btn"
        ${adminState.selectedPointIndex === null ? 'disabled' : ''}
      >
        Delete selected point
      </button>
    `;

  const helperText = adminState.editMode === 'boundary'
    ? 'Drag boundary points to reshape the selected hit area. Tap the ear to add a new boundary point.'
    : region.type === 'industrial'
      ? 'Select Start or End, then tap or drag on the ear to move that endpoint.'
      : 'Tap the ear to add a default placement. Drag a point to move it.';

  const boundaryWarning = adminState.editMode === 'boundary'
    ? '<p class="admin-boundary-warning">When this region is edited, its curved SVG path will be saved as a simple polygon hit area.</p>'
    : '';

  const editorRows = adminState.editMode === 'boundary'
    ? renderBoundaryPointListHtml(region)
    : `
      <div class="admin-point-list">
        ${pointRows || '<p class="admin-status">No default placements yet.</p>'}
      </div>

      <div class="admin-save-row">
        ${deleteButton}
      </div>
    `;

  container.innerHTML = `
    <h3>${escapeAdminHtml(region.label)}</h3>
    <p>${escapeAdminHtml(region.copy || 'No description saved.')}</p>

    <p class="admin-editor-help">${escapeAdminHtml(helperText)}</p>

    ${boundaryWarning}

    <dl>
      <div class="admin-detail-row">
        <dt>ID</dt>
        <dd>${escapeAdminHtml(region.id)}</dd>
      </div>

      <div class="admin-detail-row">
        <dt>Type</dt>
        <dd>${escapeAdminHtml(region.type)}</dd>
      </div>

      <div class="admin-detail-row">
        <dt>Group</dt>
        <dd>${escapeAdminHtml(region.group || 'Not set')}</dd>
      </div>

      <div class="admin-detail-row">
        <dt>Positions</dt>
        <dd>${region.positions.length}</dd>
      </div>

      ${
        industrialLength
          ? `<div class="admin-detail-row">
              <dt>Bar length</dt>
              <dd>${industrialLength.toFixed(1)} SVG units</dd>
            </div>`
          : ''
      }
    </dl>

    ${editorRows}
  `;

  container.addEventListener('click', (event) => {
    const placementSelectButton = event.target.closest('[data-admin-point-select]');
    if (placementSelectButton) {
      adminState.selectedPointIndex = Number(placementSelectButton.dataset.adminPointSelect);
      renderAdminPreview();
      return;
    }

    const deletePlacementButton = event.target.closest('#admin-delete-point-btn');
    if (deletePlacementButton && !deletePlacementButton.disabled) {
      deleteSelectedAdminPoint();
      return;
    }

    const boundarySelectButton = event.target.closest('[data-admin-boundary-select]');
    if (boundarySelectButton) {
      adminState.selectedBoundaryPointIndex = Number(boundarySelectButton.dataset.adminBoundarySelect);
      renderAdminPreview();
      return;
    }

    const deleteBoundaryButton = event.target.closest('#admin-delete-boundary-point-btn');
    if (deleteBoundaryButton && !deleteBoundaryButton.disabled) {
      deleteSelectedAdminBoundaryPoint();
    }
  }, { once: true });
}
function handleAdminCanvasClick(event, anatomyKey) {
  if (adminState.editMode === 'boundary') {
    handleAdminBoundaryCanvasClick(event, anatomyKey);
    return;
  }

  if (event.defaultPrevented) return;

  const selectedRegion = getSelectedAdminRegion(anatomyKey);
  if (!selectedRegion) return;

  const svg = event.currentTarget.querySelector('.admin-marker-layer');
  if (!svg) return;

  const point = clientPointToAdminSvgPoint(event, svg);
  if (!point) return;

  normalizeAdminRegionPositions(selectedRegion);

  if (selectedRegion.type === 'industrial') {
    const targetIndex = adminState.selectedPointIndex === 1 ? 1 : 0;
    selectedRegion.positions[targetIndex] = point;
    adminState.selectedPointIndex = targetIndex;
  } else {
    selectedRegion.positions.push(point);
    adminState.selectedPointIndex = selectedRegion.positions.length - 1;
  }

  markAdminConfigDirty();
  renderAdminPreview();
}

function handleAdminPointPointerDown(event, anatomyKey, pointIndex) {
  event.preventDefault();
  event.stopPropagation();

  adminState.activeAnatomyKey = anatomyKey;
  adminState.selectedPointIndex = pointIndex;
  adminState.drag = {
    anatomyKey,
    pointIndex
  };

  renderAdminPreview();
}

function handleAdminPointerMove(event) {
  if (!adminState.drag) return;

  const { anatomyKey, pointIndex } = adminState.drag;
  const region = getSelectedAdminRegion(anatomyKey);
  if (!region?.positions?.[pointIndex]) return;

  const svg = document.querySelector(`.admin-marker-layer[data-anatomy-key="${anatomyKey}"]`);
  if (!svg) return;

  const point = clientPointToAdminSvgPoint(event, svg);
  if (!point) return;

  region.positions[pointIndex] = point;
  markAdminConfigDirty();

  updateDraggedAdminPointDom(svg, region, pointIndex);
}

function handleAdminPointerUp() {
  if (!adminState.drag) return;
  adminState.drag = null;
  renderAdminPreview();
}

function updateDraggedAdminPointDom(svg, region, pointIndex) {
  const point = region.positions[pointIndex];
  const group = svg.querySelector(`.admin-edit-point[data-point-index="${pointIndex}"]`);
  if (!group || !point) return;

  group.querySelectorAll('circle').forEach((circle) => {
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
  });

  if (region.type === 'industrial') {
    const line = svg.querySelector('.admin-industrial-bar');
    const start = region.positions[0];
    const end = region.positions[1];

    if (line && start && end) {
      line.setAttribute('x1', start.x);
      line.setAttribute('y1', start.y);
      line.setAttribute('x2', end.x);
      line.setAttribute('y2', end.y);
    }
  }
}

function deleteSelectedAdminPoint() {
  const region = getSelectedAdminRegion();

  if (!region || region.type === 'industrial') return;
  if (adminState.selectedPointIndex === null) return;
  if (!region.positions[adminState.selectedPointIndex]) return;

  region.positions.splice(adminState.selectedPointIndex, 1);
  adminState.selectedPointIndex = null;

  markAdminConfigDirty();
  renderAdminPreview();
}

async function publishAdminDraftConfig() {
  if (adminState.saving) return;

  if (adminState.dirty) {
    showAdminStatusMessage('Save the draft before publishing.');
    return;
  }

  const confirmed = window.confirm(
    'Publish this draft to the public planner? This will update what clients see.'
  );

  if (!confirmed) return;

  adminState.saving = true;
  renderAdminPreview();
  showAdminStatusMessage('Publishing draft…');

  try {
    const payload = await postAdminAction('publishDraftEarMapConfig', {
      idToken: adminState.idToken
    });

    if (!payload.success) {
      throw new Error(payload.error || 'Publish failed.');
    }

    adminState.config = payload.publishedConfig || payload.config || adminState.config;
    adminState.draftConfig = payload.draftConfig || null;
    adminState.dirty = false;
    adminState.saving = false;

    showAdminStatusMessage('Draft published. Public planner config has been updated.');
    renderAdminPreview();
  } catch (error) {
    console.error('[admin-ear-map] Publish failed:', error);
    adminState.saving = false;
    showAdminStatusMessage(error.message || String(error));
    renderAdminPreview();
  }
}

async function saveAdminDraftConfig() {
  if (adminState.saving || !adminState.dirty) return;

  const validationErrors = validateAdminEarMapConfig(adminState.config);
  if (validationErrors.length) {
    showAdminStatusMessage(`Cannot save: ${validationErrors.join(' | ')}`);
    return;
  }

  adminState.saving = true;
  renderAdminPreview();
  showAdminStatusMessage('Saving draft…');

  try {
    const payload = await postAdminAction('saveDraftEarMapConfig', {
      idToken: adminState.idToken,
      config: getCleanAdminConfigForSave()
    });

    if (!payload.success) {
      throw new Error(payload.error || 'Draft save failed.');
    }

    adminState.draftConfig = payload.draftConfig || payload.config || adminState.draftConfig;
    adminState.config = getEditableAdminConfigFromPayload({
      config: adminState.config,
      draftConfig: adminState.draftConfig
    });

    adminState.dirty = false;
    adminState.saving = false;

    showAdminStatusMessage('Draft saved.');
    renderAdminPreview();
  } catch (error) {
    console.error('[admin-ear-map] Draft save failed:', error);
    adminState.saving = false;
    showAdminStatusMessage(error.message || String(error));
    renderAdminPreview();
  }
}

function markAdminConfigDirty() {
  adminState.dirty = true;
}

function showAdminStatusMessage(message) {
  const status = admin$('#admin-status');
  if (status) status.textContent = message || '';
}

function getSelectedAdminRegion(anatomyKey = adminState.activeAnatomyKey) {
  const anatomy = adminState.config?.anatomies?.[anatomyKey];
  const selectedId = adminState.selected[anatomyKey];

  if (!anatomy || !selectedId) return null;

  return anatomy.regions.find((region) => region.id === selectedId) || null;
}

function normalizeAdminRegionPositions(region) {
  if (!Array.isArray(region.positions)) {
    region.positions = [];
  }

  if (region.type !== 'industrial') return;

  const fallbackStart = {
    x: Number(region.x || 220),
    y: Number(region.y || 180)
  };

  const fallbackEnd = {
    x: fallbackStart.x + 90,
    y: fallbackStart.y + 55
  };

  if (!region.positions[0]) {
    region.positions[0] = fallbackStart;
  }

  if (!region.positions[1]) {
    region.positions[1] = fallbackEnd;
  }

  region.positions = [
    region.positions[0],
    region.positions[1]
  ];
}

function clientPointToAdminSvgPoint(event, svg) {
  if (!svg || typeof svg.createSVGPoint !== 'function') return null;

  const svgPoint = svg.createSVGPoint();
  svgPoint.x = event.clientX;
  svgPoint.y = event.clientY;

  const ctm = svg.getScreenCTM();
  if (!ctm) return null;

  const transformed = svgPoint.matrixTransform(ctm.inverse());

  return {
    x: Number(transformed.x.toFixed(2)),
    y: Number(transformed.y.toFixed(2))
  };
}

function getIndustrialLength(region) {
  const start = region.positions[0];
  const end = region.positions[1];

  if (!start || !end) return null;

  const dx = end.x - start.x;
  const dy = end.y - start.y;

  return Math.sqrt(dx * dx + dy * dy);
}

function addAdminBoundaryEditor(markerLayer, anatomyKey, region) {
  const points = getEditableBoundaryPoints(region);
  if (points.length < 2) return;

  const linePath = document.createElementNS(ADMIN_SVG_NS, 'path');
  linePath.setAttribute('class', 'admin-boundary-line');
  linePath.setAttribute('d', pointsToAdminPath(points));
  markerLayer.appendChild(linePath);

  points.forEach((point, index) => {
    const group = document.createElementNS(ADMIN_SVG_NS, 'g');
    group.setAttribute('class', 'admin-boundary-edit-point');
    group.dataset.boundaryPointIndex = String(index);

    group.addEventListener('pointerdown', (event) => {
      handleAdminBoundaryPointPointerDown(event, anatomyKey, index);
    });

    group.addEventListener('click', (event) => {
      event.stopPropagation();
      adminState.selectedBoundaryPointIndex = index;
      renderAdminPreview();
    });

    const dot = document.createElementNS(ADMIN_SVG_NS, 'circle');
    dot.setAttribute('class', [
      'admin-boundary-point',
      adminState.selectedBoundaryPointIndex === index ? 'is-selected' : ''
    ].filter(Boolean).join(' '));
    dot.setAttribute('cx', point.x);
    dot.setAttribute('cy', point.y);
    dot.setAttribute('r', 7.5);

    const hit = document.createElementNS(ADMIN_SVG_NS, 'circle');
    hit.setAttribute('class', 'admin-boundary-hit');
    hit.setAttribute('cx', point.x);
    hit.setAttribute('cy', point.y);
    hit.setAttribute('r', 18);

    group.appendChild(dot);
    group.appendChild(hit);
    markerLayer.appendChild(group);
  });
}

function getEditableBoundaryPoints(region) {
  if (Array.isArray(region.boundaryPoints) && region.boundaryPoints.length >= 3) {
    return region.boundaryPoints;
  }

  const parsedPoints = parseAdminPathToBoundaryPoints(region.path);

  region.boundaryPoints = parsedPoints.length >= 3
    ? parsedPoints
    : fallbackBoundaryPointsForRegion(region);

  return region.boundaryPoints;
}

function parseAdminPathToBoundaryPoints(path) {
  if (!path) return [];

  const tokens = String(path)
    .replace(/,/g, ' ')
    .match(/[a-zA-Z]|-?\d*\.?\d+/g);

  if (!tokens) return [];

  const points = [];
  let index = 0;
  let command = null;

  while (index < tokens.length) {
    const token = tokens[index];

    if (/^[a-zA-Z]$/.test(token)) {
      command = token;
      index += 1;
    }

    if (!command) {
      index += 1;
      continue;
    }

    const upper = command.toUpperCase();

    if (upper === 'M' || upper === 'L') {
      const x = Number(tokens[index]);
      const y = Number(tokens[index + 1]);

      if (Number.isFinite(x) && Number.isFinite(y)) {
        points.push({ x, y });
      }

      index += 2;
      continue;
    }

    if (upper === 'C') {
      const x = Number(tokens[index + 4]);
      const y = Number(tokens[index + 5]);

      if (Number.isFinite(x) && Number.isFinite(y)) {
        points.push({ x, y });
      }

      index += 6;
      continue;
    }

    if (upper === 'Q') {
      const x = Number(tokens[index + 2]);
      const y = Number(tokens[index + 3]);

      if (Number.isFinite(x) && Number.isFinite(y)) {
        points.push({ x, y });
      }

      index += 4;
      continue;
    }

    if (upper === 'Z') {
      break;
    }

    index += 1;
  }

  return dedupeAdminBoundaryPoints(points);
}

function dedupeAdminBoundaryPoints(points) {
  const cleaned = [];

  points.forEach((point) => {
    const previous = cleaned[cleaned.length - 1];

    if (
      !previous ||
      Math.abs(previous.x - point.x) > 0.01 ||
      Math.abs(previous.y - point.y) > 0.01
    ) {
      cleaned.push(point);
    }
  });

  return cleaned;
}

function fallbackBoundaryPointsForRegion(region) {
  const centerX = Number(region.x || 220);
  const centerY = Number(region.y || 220);
  const radius = 36;

  return [
    { x: centerX, y: centerY - radius },
    { x: centerX + radius, y: centerY },
    { x: centerX, y: centerY + radius },
    { x: centerX - radius, y: centerY }
  ];
}

function pointsToAdminPath(points) {
  if (!Array.isArray(points) || !points.length) return '';

  const [first, ...rest] = points;

  return [
    `M ${roundAdminSvgNumber(first.x)} ${roundAdminSvgNumber(first.y)}`,
    ...rest.map((point) => `L ${roundAdminSvgNumber(point.x)} ${roundAdminSvgNumber(point.y)}`),
    'Z'
  ].join(' ');
}

function roundAdminSvgNumber(value) {
  return Number(value).toFixed(1).replace(/\.0$/, '');
}

function handleAdminBoundaryCanvasClick(event, anatomyKey) {
  if (event.defaultPrevented) return;

  const selectedRegion = getSelectedAdminRegion(anatomyKey);
  if (!selectedRegion) return;

  const svg = event.currentTarget.querySelector('.admin-marker-layer');
  if (!svg) return;

  const point = clientPointToAdminSvgPoint(event, svg);
  if (!point) return;

  const points = getEditableBoundaryPoints(selectedRegion);

  const insertIndex = findAdminBoundaryInsertIndex(points, point);
  points.splice(insertIndex, 0, point);

  selectedRegion.path = pointsToAdminPath(points);
  adminState.selectedBoundaryPointIndex = insertIndex;

  markAdminConfigDirty();
  renderAdminPreview();
}

function findAdminBoundaryInsertIndex(points, point) {
  if (!Array.isArray(points) || points.length < 2) return points.length;

  let bestIndex = points.length;
  let bestDistance = Infinity;

  for (let index = 0; index < points.length; index += 1) {
    const nextIndex = (index + 1) % points.length;
    const distance = distanceToAdminSegment(point, points[index], points[nextIndex]);

    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = nextIndex;
    }
  }

  return bestIndex;
}

function distanceToAdminSegment(point, start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;

  if (dx === 0 && dy === 0) {
    return Math.hypot(point.x - start.x, point.y - start.y);
  }

  const t = Math.max(
    0,
    Math.min(
      1,
      ((point.x - start.x) * dx + (point.y - start.y) * dy) / (dx * dx + dy * dy)
    )
  );

  const projected = {
    x: start.x + t * dx,
    y: start.y + t * dy
  };

  return Math.hypot(point.x - projected.x, point.y - projected.y);
}

function handleAdminBoundaryPointPointerDown(event, anatomyKey, pointIndex) {
  event.preventDefault();
  event.stopPropagation();

  adminState.activeAnatomyKey = anatomyKey;
  adminState.selectedBoundaryPointIndex = pointIndex;
  adminState.boundaryDrag = {
    anatomyKey,
    pointIndex
  };

  renderAdminPreview();
}

function handleAdminBoundaryPointerMove(event) {
  if (!adminState.boundaryDrag) return;

  const { anatomyKey, pointIndex } = adminState.boundaryDrag;
  const region = getSelectedAdminRegion(anatomyKey);
  if (!region) return;

  const points = getEditableBoundaryPoints(region);
  if (!points[pointIndex]) return;

  const svg = document.querySelector(`.admin-marker-layer[data-anatomy-key="${anatomyKey}"]`);
  if (!svg) return;

  const point = clientPointToAdminSvgPoint(event, svg);
  if (!point) return;

  points[pointIndex] = point;
  region.path = pointsToAdminPath(points);

  markAdminConfigDirty();
  updateDraggedAdminBoundaryPointDom(svg, region, pointIndex);
}

function handleAdminBoundaryPointerUp() {
  if (!adminState.boundaryDrag) return;
  adminState.boundaryDrag = null;
  renderAdminPreview();
}

function updateDraggedAdminBoundaryPointDom(svg, region, pointIndex) {
  const points = getEditableBoundaryPoints(region);
  const point = points[pointIndex];
  const group = svg.querySelector(`.admin-boundary-edit-point[data-boundary-point-index="${pointIndex}"]`);
  if (!group || !point) return;

  group.querySelectorAll('circle').forEach((circle) => {
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
  });

  const line = svg.querySelector('.admin-boundary-line');
  if (line) {
    line.setAttribute('d', pointsToAdminPath(points));
  }
}

function renderBoundaryPointListHtml(region) {
  const points = getEditableBoundaryPoints(region);

  const rows = points.map((point, index) => `
    <div class="admin-point-row ${adminState.selectedBoundaryPointIndex === index ? 'is-selected' : ''}">
      <div>
        <strong>Boundary point ${index + 1}</strong>
        <div class="admin-point-meta">x: ${Number(point.x).toFixed(1)}, y: ${Number(point.y).toFixed(1)}</div>
      </div>
      <button type="button" data-admin-boundary-select="${index}">Select</button>
    </div>
  `).join('');

  return `
    <div class="admin-point-list">
      ${rows || '<p class="admin-status">No boundary points found.</p>'}
    </div>

    <div class="admin-save-row">
      <button type="button" class="admin-danger-btn" id="admin-delete-boundary-point-btn" ${adminState.selectedBoundaryPointIndex === null || points.length <= 3 ? 'disabled' : ''}>
        Delete selected boundary point
      </button>
    </div>
  `;
}

function deleteSelectedAdminBoundaryPoint() {
  const region = getSelectedAdminRegion();

  if (!region) return;

  const points = getEditableBoundaryPoints(region);

  if (adminState.selectedBoundaryPointIndex === null) return;
  if (!points[adminState.selectedBoundaryPointIndex]) return;
  if (points.length <= 3) return;

  points.splice(adminState.selectedBoundaryPointIndex, 1);
  region.path = pointsToAdminPath(points);
  adminState.selectedBoundaryPointIndex = null;

  markAdminConfigDirty();
  renderAdminPreview();
}

function adminAssetUrl(path) {
  if (!path) return '';

  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('/') ||
    path.startsWith('../')
  ) {
    return path;
  }

  return `../${path}`;
}

function escapeAdminHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getCleanAdminConfigForSave() {
  return JSON.parse(JSON.stringify(adminState.config, (key, value) => {
    if (key === 'boundaryPoints') return undefined;
    return value;
  }));
}
