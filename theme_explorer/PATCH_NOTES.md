# Theme Explorer Visual Motif Final Patch

This patch keeps the journey cue-picking logic from the previous best-lens version, but changes the final word screen into a dedicated visual motif pass.

## Journey cue picking

- Still uses cumulative labeled journey text.
- Still uses best corrected core lens + light second-lens support.
- Still uses micro-lens discovery, generic baseline correction, specificity bonus, and diversity selection.

## Final visual motif mode

The final word screen now uses its own motif-oriented embedding inputs instead of the broad journey-cue lenses.

### Final motif lenses

- `direct`: plain relevance to the cumulative text
- `visual`: visual motif, image, shape, object, color, texture
- `symbol`: symbol, motif, emblem, recurring image
- `material`: material, surface, pattern, detail, ornament
- `scene`: place, atmosphere, scene, visual detail

### Final micro lenses

The final candidate pool is discovered with motif-specific micro lenses, including:

- image
- object
- place
- shape
- pattern
- texture
- movement
- color
- light
- material
- surface
- symbol
- motif
- emblem
- atmosphere

### Final baseline correction

The final baseline is also motif-specific. It penalizes words that are generically pretty, symbolic, abstract, or theme-like unless they are especially relevant to the current journey.

Additional abstract penalty is applied for candidates close to broad abstract/emotion/value language, so the final list should lean more toward visual motifs than general theme concepts.

## Final bucket changes

The final screen now uses visual motif buckets:

- Images and objects
- Shapes, patterns, and textures
- Colors, materials, and light
- Symbols and motifs
- Scenes and atmosphere
- Worth another look

The first five buckets prioritize new words. `Worth another look` is still reserved for words that appeared earlier but were not selected.

## Final scoring blend

Final word scoring now blends:

- motif-text score: `0.55`
- selected cue embedding score: `0.25`
- direct relevance to cumulative text: `0.20`

The selected cue score still uses both average selected-cue similarity and max selected-cue similarity.

## Validation

Ran:

```bash
node --check js/theme-ranking.js
node --check js/theme-explorer.js
```
