(() => {
  'use strict';
  const root = document.getElementById('jewelry-explorer-root');
  if (!root) return;
  const endpoint = window.JEWELRY_CATALOG_URL ||
    'https://script.google.com/macros/s/AKfycbyFnw6x4nnQt9TW9jvrOg0IUe2mFxq_MTKcIPo_lTkTaLUc3VmjJ98CLmNAw4ASI98r6Q/exec?action=getJewelryCatalog';
  let products = [], decisions = [], notes = {}, gallery = false, loading = false;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeImage = value => { try { const url = new URL(value); return url.protocol === 'https:' ? url.href : ''; } catch { return ''; } };
  const selected = () => decisions.filter(d => d.liked).map(d => ({...products[d.index], comment: notes[products[d.index].id] || ''}));
  const handoff = () => ({schemaVersion:'1.0.0', storeId:'100498189', purpose:'taste-portfolio', reviewedCount:decisions.length, selections:selected()});
  function publish() {
    window.BMBMPlanner?.receiveJewelryExplorerUpdate(handoff());
    window.dispatchEvent(new CustomEvent('bmbm:jewelry-update', {detail:handoff()}));
  }
  window.BMBMJewelryExplorer = {getHandoff:handoff, openGallery() { gallery = true; render(); }};
  function photo(item) { return `<img class="jewelry-photo" src="${escape(safeImage(item.imageUrl))}" alt="${escape(item.name)}" draggable="false">`; }
  function render(error = '') {
    root.innerHTML = `<p class="eyebrow">Jewelry inspiration</p><h1>${gallery ? 'Your taste portfolio' : 'What catches your eye?'}</h1>
      <p class="subtext">${gallery ? 'Here’s what caught your eye. Tell Michele what you love about each piece, or remove anything that no longer feels right.' : 'Follow your first impression. We’re collecting inspiration for Michele to help shape your ear plan.'}</p>
      <p class="jewelry-status" role="status">${loading ? 'Loading jewelry…' : escape(error) || `${decisions.length} of ${products.length} explored · ${selected().length} liked`}</p>`;
    if (loading) return;
    if (error || !products.length) {
      root.insertAdjacentHTML('beforeend', '<p>The jewelry catalog is not available yet.</p><button class="primary-btn" data-retry>Try again</button>');
      root.querySelector('[data-retry]').onclick = load;
    } else if (gallery) {
      root.insertAdjacentHTML('beforeend', `<p>Add a note about what draws you to each piece.</p><div class="jewelry-gallery">${selected().map(item => `<article>${photo(item)}<h3>${escape(item.name)}</h3><label>What do you like?<textarea class="soft-textarea" data-note="${escape(item.id)}" maxlength="2000" placeholder="The shape, sparkle, color…">${escape(item.comment)}</textarea></label><button class="secondary-btn" data-remove="${escape(item.id)}">Remove</button></article>`).join('')}</div>${selected().length ? '' : '<p>No favorites yet. You can keep exploring or continue without any selections.</p>'}`);
      root.querySelectorAll('[data-note]').forEach(field => field.oninput = () => { notes[field.dataset.note] = field.value; publish(); });
      root.querySelectorAll('[data-remove]').forEach(button => button.onclick = () => { const d = decisions.find(d => String(products[d.index].id) === button.dataset.remove); d.liked = false; publish(); render(); });
    } else if (decisions.length < products.length) {
      const item = products[decisions.length];
      root.insertAdjacentHTML('beforeend', `<div class="jewelry-swipe-card" tabindex="0" aria-label="${escape(item.name)}. Right arrow to like, left arrow to pass."><div class="jewelry-image-stage">${photo(item)}</div><h2>${escape(item.name)}</h2><p class="jewelry-card-caption">A little inspiration. No commitment.</p></div><div class="jewelry-actions"><button class="secondary-btn" data-pass>← Pass</button><button class="primary-btn" data-like>♥ Like</button></div><p class="jewelry-swipe-hint">Swipe left to pass · swipe right to like</p>`);
      root.querySelector('[data-pass]').onclick = () => choose(false);
      root.querySelector('[data-like]').onclick = () => choose(true);
      const card = root.querySelector('.jewelry-swipe-card');
      card.onkeydown = e => { if (['ArrowLeft','ArrowRight'].includes(e.key)) { e.preventDefault(); choose(e.key === 'ArrowRight'); } };
      let start = null;
      card.onpointerdown = e => { if (e.isPrimary && e.button === 0) { start = {x:e.clientX,y:e.clientY}; card.setPointerCapture(e.pointerId); } };
      card.onpointermove = e => { if (start) card.style.transform = `translateX(${Math.max(-100,Math.min(100,e.clientX-start.x))}px)`; };
      card.onpointerup = e => { if (!start) return; const dx=e.clientX-start.x,dy=e.clientY-start.y; start=null; card.style.transform=''; if (Math.abs(dx)>65 && Math.abs(dx)>Math.abs(dy)*1.3) choose(dx>0); };
      card.onpointercancel = () => { start=null; card.style.transform=''; };
    }
    root.insertAdjacentHTML('beforeend', `<div class="jewelry-footer">${!gallery ? '<button class="primary-btn jewelry-end" data-end>End & review my jewelry</button>' : ''}${gallery && window.BMBMPlanner ? '<button class="primary-btn jewelry-end" data-done>Continue to your plan</button>' : ''}<div class="jewelry-footer-links">${decisions.length ? '<button class="jewelry-text-button" data-undo>Undo last swipe</button>' : ''}${gallery && decisions.length < products.length ? '<button class="jewelry-text-button" data-gallery>Keep exploring</button>' : ''}${window.BMBMPlanner ? '<button class="jewelry-text-button" data-back>Back to style</button>' : ''}</div></div>`);
    const bind = (selector, action) => { const button=root.querySelector(selector); if(button) button.onclick=action; };
    bind('[data-undo]', () => { decisions.pop(); gallery=false; publish(); render(); });
    bind('[data-gallery]', () => { gallery=!gallery; render(); });
    bind('[data-end]', () => { gallery=true; publish(); render(); });
    bind('[data-done]', () => { if (!gallery && products.length) { gallery=true; render(); return; } publish(); window.BMBMPlanner.goToStep(22); });
    bind('[data-back]', () => window.BMBMPlanner.goToStep(10));
    root.querySelectorAll('img').forEach(img => img.onerror = () => { img.replaceWith(Object.assign(document.createElement('p'),{textContent:'Image unavailable'})); });
  }
  function choose(liked) {
    if (root.querySelector('dialog[open]') || decisions.length>=products.length) return;
    decisions.push({index:decisions.length,liked});
    if(decisions.length===products.length) gallery=true;
    publish(); render();
    if(liked && !gallery && [5, 15].includes(selected().length)) offerToFinish();
  }
  function offerToFinish() {
    root.insertAdjacentHTML('beforeend', `<dialog class="jewelry-checkpoint" aria-labelledby="jewelry-checkpoint-title" aria-describedby="jewelry-checkpoint-copy"><p class="eyebrow">A lovely starting point</p><h2 id="jewelry-checkpoint-title">That gives Michele a pretty good idea.</h2><p class="subtext" id="jewelry-checkpoint-copy">You’ve liked ${selected().length} pieces. Do you want to keep going?</p><div class="jewelry-checkpoint-actions"><button class="primary-btn" data-checkpoint-end>End & see my summary</button><button class="secondary-btn" data-checkpoint-keep>Keep going</button></div></dialog>`);
    const dialog = root.querySelector('.jewelry-checkpoint');
    const continueExploring = () => { dialog.close(); dialog.remove(); root.querySelector('[data-like]')?.focus(); };
    dialog.querySelector('[data-checkpoint-end]').onclick = () => { dialog.close(); gallery=true; publish(); render(); };
    dialog.querySelector('[data-checkpoint-keep]').onclick = continueExploring;
    dialog.oncancel = event => { event.preventDefault(); continueExploring(); };
    dialog.showModal();
  }
  async function load() {
    if(loading) return;
    loading=true;render();
    try {
      let offset=0, catalog=[];
      do {
        const url=new URL(endpoint);url.searchParams.set('offset',offset);
        const response=await fetch(url, {signal:AbortSignal.timeout(30000)});
        if(!response.ok) throw new Error('Unable to load jewelry. Please try again.');
        const page=await response.json();
        if(!page.success || !Array.isArray(page.items)) throw new Error('The catalog connection needs to be configured.');
        catalog.push(...page.items); offset=page.nextOffset;
      } while(offset !== null && offset !== undefined);
      products=[...new Map(catalog.filter(p => p.id && safeImage(p.imageUrl)).map(p=>[String(p.id),p])).values()];
      loading=false;render();
    } catch(error) { loading=false;render(error.message); }
  }
  load();
})();
