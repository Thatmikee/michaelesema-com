// The palette for code that cannot read CSS variables (the glass shader).
// Keep in step with the :root variables at the top of site.css.
// Contrast on snow #fafafa: ink 17.7, grey #595959 6.7. Teal #0a7a70 is the
// focus ring (5.0 on snow); it appears nowhere else. The penguin has no colour.
export const INK = { hex: '#111111', rgb: [17, 17, 17] as const }
// The glass edge has no colour: where the three colour channels split, the edge stays ink.
export const FRINGE = { rgb: INK.rgb }
