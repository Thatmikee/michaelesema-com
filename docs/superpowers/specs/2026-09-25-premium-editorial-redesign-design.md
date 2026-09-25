# Premium editorial redesign — design spec

Date: 2026-09-25
Branch: redesign/premium-editorial (based on main @ fbdd68c, post finance-repositioning merge)

## Problem

Michael repositioned michaelesema.com's copy and color to a finance/international-business-analyst framing, but judged the visual result "too poor and AI looking." He wants a genuinely premium, custom-feeling redesign, referencing an Instagram reel naming five techniques: React Three Fiber, Liquid Glass JS, Scroll World, Liquid Logo, Shader Gradient.

## Design read

Reading this as: a personal authority site for a finance / international-business analyst addressing UK and West African professional readers, with an editorial-publication language, leaning toward native CSS + Tailwind + a data-derived WebGL background element, restrained motion. Sans display type throughout (Michael's explicit choice over a serif editorial treatment).

## Dials

- Hero + About: **Redesign - Overhaul**. Work / Focus / Thinking-in-public / Connect / Footer: **Redesign - Preserve** (light touch: spacing, hierarchy, motion polish only; layout and copy unchanged).
- `DESIGN_VARIANCE: 6`, `MOTION_INTENSITY: 4`, `VISUAL_DENSITY: 3`.
- MOTION_INTENSITY 4 means: entry transitions and slow ambient drift are in scope. Scroll-hijacking, pinning, parallax and marquees are **out of scope** — this rules out the reel's "Scroll World" idea entirely. Of the five reel techniques, two make the cut (React Three Fiber, Shader Gradient); Liquid Glass JS, Scroll World and Liquid Logo do not fit the calm-authority direction Michael chose and are excluded.

## Technique fit decisions (from brainstorming)

| Technique | In scope? | Where |
|---|---|---|
| React Three Fiber | Yes | Hero background field, About credentials object |
| Shader Gradient | Yes, via `@shadergradient/react` (real npm package, github.com/ruucm/shadergradient, built on r3f + three + three-stdlib + camera-controls) if it fits the contour-field look; otherwise a hand-rolled r3f shader material | Hero background field |
| Liquid Glass JS | No | — reads as agency/creative-studio decoration, not analyst |
| Scroll World (scroll-hijacking) | No | — MOTION_INTENSITY 4 explicitly excludes pin/scrub/hijack patterns |
| Liquid Logo | No | — no rationale for a finance-analyst personal brand; logo stays as-is (wordmark + mustard dot) |

## Hero redesign

- Layout unchanged: two-column grid, portrait photo full-bleed in the right column, unchanged (crop, prominence, alt text all preserved — this was Michael's explicit non-negotiable).
- Left column: drop the secondary grey credentials paragraph (currently lines ~80-92 of `Hero.tsx`) to stay within the hero's 4-text-element budget once the sourced caption is added. Keep: accent dash, name, headline (with mustard underline highlight, unchanged), CTAs.
- Right column background (currently a flat `--hero-bg` plate behind the photo): replaced with a slow-drifting, near-monochrome contour-line field generated from a real dataset Michael follows (e.g. NGN/USD monthly closes, or a debt-to-GDP series — final series TBD with Michael at implementation time). One contour line in `--highlight` (mustard) as the only color accent; everything else in neutral tones from existing CSS variables.
- Caption: small (~11px), letterspaced, bottom-left of the right column. Format: `[SERIES NAME] monthly close, [YEAR RANGE]. [SOURCE].` — no em/en dashes, max one middle-dot-equivalent separator (use a period instead). Example: `NGN/USD monthly close, 2016-2026. Central Bank of Nigeria.`
- Motion: drift only (slow, continuous, low-amplitude). No mouse-tracking, no hover response. Justification (one sentence, per the motion-must-be-motivated rule): the drift signals the series is ongoing, not a static decorative image.
- Reduced motion / mobile (<860px): pre-baked static image of the same render, same position, same caption. Zero WebGL cost below the breakpoint. Canvas lazy-loads after first paint on larger viewports and cross-fades in via a plain CSS opacity transition — never a `framer-motion` component, since the existing Hero tree is built entirely on `motion.div`/`motion.h1` and Three.js must not share a render tree with Motion (they compete for frames).
- LCP must never depend on WebGL: the portrait `<img>` remains the largest contentful paint element and loads exactly as it does today.

## About redesign

- Full layout rework (exact layout TBD in implementation planning): pairs editorial type with a real 3D object relevant to Michael's credentials — e.g. a slow-rotating minimal geometric form built from his three institutions/timeline (Benson Idahosa University, Nigerian Defence Academy, Manchester Metropolitan University), replacing the current two-column plain-text layout.
- This is where the "real" r3f depth moment lives, since About has layout room the Hero does not.
- Same motion rules apply: slow rotation only, reduced-motion gets a static rendering, no scroll-hijack.

## Work / Focus / Thinking-in-public / Connect / Footer

- Layout, copy and information architecture unchanged.
- Light touch: refine spacing/rhythm, add `motion.whileInView` stagger reveals where not already present, tidy type hierarchy. No new dependencies, no 3D, no shader work here.

## Color system

- Existing tokens (`--accent` teal, `--highlight` mustard, `--section-tint`, etc. from the prior recolor round) carry over unchanged.
- New: a dark-mode token set is added (see below) including a dark variant for the Hero contour field — not just inverted colors, a deliberately designed dark palette.

## Dark mode (new scope, not in the prior round)

- Real `prefers-color-scheme: dark` support, added site-wide as part of this redesign (Michael's explicit choice over staying light-only).
- Token strategy: CSS variables under `:root` (light) redefined under `@media (prefers-color-scheme: dark)` — consistent with the existing single-variable-source architecture in `src/index.css`.
- No pure `#000000` / pure `#ffffff` in the dark palette (off-black, off-white per standard practice).
- The Hero contour field gets its own dark-mode color mapping, not just an inverted light-mode render.

## Typography

- No serif. Sans display for headlines and body (Michael's explicit override of the agent's serif-editorial suggestion). Editorial feel comes from spacing, hierarchy and restraint, not serif letterforms.
- Fix while touching this: fonts are currently loaded via a render-blocking `<link>`/`@import` combination in both `index.html` and `src/index.css`, requesting overlapping weight sets of the same families. Self-host via `@font-face` + `font-display: swap`, remove the duplicate declaration. This matters more once the Hero carries a WebGL layer, since font loading is on the same critical path as LCP.

## New dependencies

```
npm install three @react-three/fiber
npm install -D @types/three
```

Evaluate `@shadergradient/react` (github.com/ruucm/shadergradient) at implementation time as a possible base for the Hero field before hand-rolling a shader material — it is a real, maintained package built on the same r3f/three stack, MIT-style open source, actively published (v2.4.20 as of this writing). If its built-in gradient primitives don't produce a convincing contour-line look, fall back to a hand-rolled `@react-three/fiber` shader material using the same dependencies.

## Fallback path (if WebGL proves risky)

Animated SVG/canvas-2D contour lines: same field, same palette, same caption, same position, drawn as ~40 stroked paths with slow `stroke-dashoffset`/noise drift. No GPU dependency, a few KB instead of ~150-200KB gzipped for three+r3f. Because the mobile deliverable is already a baked still of the exact composition, building the still first keeps this fallback nearly free and the whole decision reversible.

## Hard implementation rules

1. Three.js / R3F code is isolated in its own lazy-loaded client leaf component. It never shares a render tree with `framer-motion` components.
2. `prefers-reduced-motion: reduce` stops all custom motion (drift, rotation) entirely — static frame, not slowed.
3. No WebGL below the 860px breakpoint (matches Hero's existing mobile breakpoint) — pre-baked static image instead.
4. Colour values used by the 3D/shader work come from the existing CSS custom properties (`--accent`, `--highlight`, `--ink`, etc.) or their dark-mode equivalents — never a new locally-declared hex value. This codebase has shipped divergent, un-sourced color values twice before (five golds, six creams); this redesign does not repeat that.
5. LCP is never gated on WebGL load.
6. No scroll-hijacking, pinning, or parallax anywhere (MOTION_INTENSITY 4 ceiling).

## Open items for implementation planning (not blocking spec approval)

- Exact dataset/series for the Hero contour field (needs a real, citable source Michael is comfortable attributing).
- Exact geometry for the About 3D object (moodboard/prototype before locking).
- Whether `@shadergradient/react` or a hand-rolled shader material ships in the Hero.
