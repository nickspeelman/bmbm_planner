# Theme Explorer patch notes

Patched the Theme Explorer as a focused revision. The flow and file structure are intentionally preserved so this can still be integrated into the larger planner app later.

## Changes made

### Word-selection copy

- Changed the word screen headline to: `Which word feels worth exploring?`
- Changed the helper text to: `Choose the word that gives you the clearest next direction. It does not have to be the closest match.`
- Changed the loading text from nearby-word language to: `Finding words worth exploring…`
- Increased the displayed candidate count from 5 to 6.

### Follow-up prompt frame

- Replaced the rotating follow-up prompt bank with one universal prompt shape:
  - `Use “{display}” as a starting point.`
  - `What does “{display}” make you think of?`
- Removed the client-facing `Try a different question` button from the follow-up screen.
- Kept the existing answer-length helper and textarea placeholder.
- Follow-up prompt selection does not use set type, grammar, part of speech, question frames, prompt categories, articles, or plurality.

### Journey context in prompt window

- Added a compact journey context panel to the follow-up screen:
  - `Exploring`
  - `{initial door label}: {initial short answer}`
  - `Words so far: {selected words joined by ·}`
- Added a collapsed `Show earlier answers` section when previous follow-up answers exist.

### Embedding/ranking logic

- Replaced single-input closest-word ranking with four core embedding lenses:
  - direct: `{journey text}`
  - image: `image, object, place, color, texture, movement: {journey text}`
  - symbol: `symbol, metaphor, motif, association: {journey text}`
  - scene: `memory, detail, scene, atmosphere: {journey text}`
- Added micro-lens candidate discovery. Micro lenses nominate candidates only; final scoring still uses the four core lenses.
- Micro lenses:
  - image, object, place, color, texture, movement
  - symbol, metaphor, motif, association
  - memory, detail, scene, atmosphere
- Removed exact/close answer-match boosts from the active ranking path.
- Added a literal-text penalty for words that appear in the client’s own typed answers.
- Added greedy batch diversity using embedding distance so the app does not simply show the top six near-synonyms.
- Kept keyword and diverse fallback paths for cases where browser embeddings fail.

## Files changed

- `js/theme-explorer.js`
- `js/theme-ranking.js`
- `css/theme-explorer.css`
- `data/theme_prompt_bank.json`

## Files preserved

- `data/theme_vocabulary.json`
- `index.html`
- supporting JS files except the files listed above

### Explicit journey-part weighting

- Changed candidate scoring so the app no longer embeds one large journey block and lets long answers dominate accidentally.
- The app now embeds separate journey parts through the four core lenses and blends them with explicit nominal weights:
  - startingPoint: 0.30
  - initialDetails: 0.20
  - latestAnswer: 0.30
  - earlierAnswers: 0.12
  - selectedWords: 0.08
- Weights are normalized across whatever journey parts exist for the current round.
- `selectedWords` is intentionally low-weight so clicked words steer lightly without trapping the next batch in near-synonyms of earlier selections.
- Follow-up answer text is weighted more heavily than clicked words because typed client language should carry more signal than word-card selections.
- Micro-lens discovery still uses the compact whole-journey text, while final candidate scoring uses the weighted journey-part/core-lens blend.

### Initial prompt split and final screen tweaks

- Split the initial entry into two lightweight screens:
  - first screen: `What are we exploring?` with the door-specific short prompt
  - second screen: the door-specific detail prompt
- Kept the original combined `initial_prompt` renderer as a fallback to the detail prompt screen for compatibility with older state.
- Removed `Theme path` and `Words that shaped this theme` from the active final review screen while preserving those details in saved-theme detail views and exported theme objects.
- Added an editable `Theme name` field at the top of the final review screen.
- The default theme name is still generated from the selected words; if the client edits it, the custom name is saved into the theme card and export object.
- Added `themeNameOverride` to the journey state without changing the overall saved theme/export structure.


## Final-screen title/path tweak

- Updated the editable final-page theme name so its generated default uses all chosen words joined with `·`.
- Restored the theme path at the top of the final review screen, directly under the editable title.
- Kept the larger final-card detail simplified; the separate “Words that shaped this theme” block is still hidden on the active final review screen.
