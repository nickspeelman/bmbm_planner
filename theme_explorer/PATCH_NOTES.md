# Theme Explorer Patch Notes

## Changes in this patch

### Stronger attractor penalty

- Raised `GENERIC_BASELINE_WEIGHT` from `0.45` to `0.75`.
- Kept the existing specificity bonus so candidate words are rewarded when they fit the actual journey better than generic theme-language baselines.
- Baseline lenses still include image/symbol/scene plus inner/meaning language, so broad symbolic attractors should need a stronger journey-specific reason to appear.

### Clearer optional-theme entry flow

- The intro screen now makes it explicit that a client does not need a theme at all.
- The first screen still only explains that themes are optional and does not lead with the Theme Explorer.
- The second screen asks the two open-ended questions, and makes clear they can answer either, both, or neither.
- The third screen offers either word prompts or skipping the section.

### Pre-explorer answers are no longer shown in explorer result cards

- The two open-ended pre-explorer responses are still saved and exported.
- They are hidden from the Theme Explorer result/review card.
- They now appear on the saved-themes selection screen, where the client is deciding what to submit.

### Final words are grouped into lens buckets

- Replaced the two-section final word picker with lens-based buckets:
  - Close to what you wrote
  - Images and details
  - Symbols and patterns
  - Scenes and atmosphere
  - Worth another look
- The first four buckets only use words that have not appeared before.
- “Worth another look” is reserved for words shown earlier but not selected.
- Each bucket is built from candidates whose strongest scoring lens matches that bucket, with diversity filtering still applied.

### Validation

- Ran `node --check` against all JavaScript files.
