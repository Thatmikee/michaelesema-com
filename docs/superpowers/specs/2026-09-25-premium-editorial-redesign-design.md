# Premium editorial redesign — design spec

Date: 2026-09-25 (revised after Opus sanity-check pass)
Branch: redesign/premium-editorial (based on main @ fbdd68c, post finance-repositioning merge)

## Problem

Michael repositioned michaelesema.com's copy and color to a finance/international-business-analyst framing, but judged the visual result "too poor and AI looking." He wants a genuinely premium, custom-feeling redesign, referencing an Instagram reel naming five techniques: React Three Fiber, Liquid Glass JS, Scroll World, Liquid Logo, Shader Gradient.

**Revision note:** a first draft of this spec was reviewed by an Opus pass explicitly briefed to be skeptical, given Michael no longer trusts automated taste checks after the first repositioning round still read as "AI looking" despite passing an accessibility audit and a design-taste audit. That review found the first draft was restrained in the right places but was building 3D/motion work on top of a design system that doesn't exist — no type scale, no spacing scale, ~15 color-token aliases that mislabel colors (e.g. `--red` actually resolves to mustard), three inconsistent mobile breakpoints, and a font-loading setup that's already broken and divergent between `index.html` and `src/index.css`. This revision restructures the plan around fixing that foundation first, and changes two specific decisions the review flagged as likely to fail (see "Changes from first draft" below).

## Design read

Reading this as: a personal authority site for a finance / international-business analyst addressing UK and West African professional readers, with an editorial-publication language, leaning toward native CSS + Tailwind + a real, sourced data artifact rather than decorative WebGL. Sans display type throughout (Michael's explicit choice over a serif editorial treatment). Portrait photo stays as-is (Michael's explicit choice, reopened and reconfirmed after the review flagged it).

## Changes from first draft (per Opus review + Michael's decisions)

1. **Foundation work is now Phase 0, done before or alongside Hero/About, not after.** Type scale, spacing scale, token cleanup, single breakpoint set, font-loading fix. Michael confirmed: fix the foundation first.
2. **Hero background field: SVG/canvas-2D contour rendering is now the primary approach, not the fallback.** The review's own fallback (cheap, no GPU, no risk of looking like a generic shader-gradient blob) is more editorial and lower-risk than starting with `@shadergradient/react`, whose signature output (iridescent blobby mesh) is itself a recognisable "AI site" tell. React Three Fiber is still in scope for the Hero if, during implementation, a hand-rolled r3f shader material produces a genuinely better contour-line result than SVG/canvas-2D — but SVG/canvas-2D ships first and is the bar the r3f version has to beat, not the other way around.
3. **The Hero data element becomes a real, legible small chart of the cited series (with its source as the caption), not a decorative field with a footnote.** This is the concrete difference between "evidence" and "lipstick on decoration" the review pushed for.
4. **About's 3D object is cut.** Michael confirmed: replace with a real artifact (a chart he's built, a Power BI screenshot, a credentials table) instead of a rotating geometric form with no real concept behind it. All React Three Fiber / WebGL budget for this redesign now lives in the Hero only.
5. **Portrait photo stays exactly as-is.** Reopened per the review's flag that it might be the single biggest contributor to the "AI looking" read, and reconfirmed by Michael: keep it unchanged, full-bleed, current crop and alt text.
6. **Named bugs get fixed as part of this work, not left standing:**
   - Uppercase headline text (`Hero.tsx`) currently has *negative* letter-spacing (`-1.5px`), which is backwards for all-caps type — needs positive tracking.
   - `index.css` currently hides the scrollbar sitewide (`scrollbar-width: none`, `::-webkit-scrollbar { display: none }`) — a known cheap-site tell and a usability regression. Restore the native scrollbar.
   - `index.css`'s `prefers-reduced-motion` rule currently kills *all* transitions globally (`transition-duration: 0.01ms !important`), including simple hover/focus feedback that isn't the kind of motion this preference is meant to suppress. Scope it to actual decorative/transform motion (drift, rotation, parallax-style effects), not micro-interaction feedback.
   - `::selection` uses a hardcoded blue (`#4d7cff`) that exists nowhere else in the palette — move it onto a real token.
7. **The five "Preserve" sections get less new motion, not more.** The first draft proposed adding `motion.whileInView` stagger reveals to sections that don't have them. The review is right that stacked fade-up-on-scroll is itself an AI-site motion signature, and the Hero already runs a 5-element staggered fade-up cascade. Preserve sections keep whatever motion they currently have; no new stagger patterns are added anywhere in this redesign.

## Dials

- Hero: **Redesign - Overhaul** (background field + data chart + copy/type fixes; layout, portrait and CTAs otherwise unchanged). About: **Redesign - Overhaul** (real artifact replaces plain two-column prose; 3D object cut). Work / Focus / Thinking-in-public / Connect / Footer: **Redesign - Preserve** (foundation fixes — type scale, spacing scale, tokens — apply everywhere; no new layout, copy, or motion).
- `DESIGN_VARIANCE: 6`, `MOTION_INTENSITY: 3` (revised down from 4 — no new stagger motion, existing motion simplified rather than expanded), `VISUAL_DENSITY: 3`.
- Of the reel's five techniques: React Three Fiber is conditionally in scope (Hero field, only if it beats the SVG/canvas-2D baseline). Shader Gradient, Liquid Glass JS, Scroll World and Liquid Logo are all out of scope — none fit the calm-authority register or the MOTION_INTENSITY ceiling.

## Phase 0: Foundation (blocks everything else)

This is genuinely new scope compared to the first draft, and it's the part Michael and the review agree matters most.

1. **Type scale.** Replace the ~14 hardcoded `"'Poppins', sans-serif"` / `"'Outfit', sans-serif"` string literals and six ad-hoc `clamp()` triples in `Hero.tsx` + `About.tsx` (and audit the rest of `src/components`, `src/pages` while touching this) with a defined scale: a small number of named sizes (e.g. display, h1, h2, body-lg, body, small, micro), each with a fixed line-height and letter-spacing (positive tracking on any uppercase/caps usage), expressed as CSS custom properties or a shared TS/CSS token file — not per-component magic numbers.
2. **Spacing scale.** Replace ad-hoc `clamp()` paddings/margins with a fixed-unit scale (e.g. 4px or 8px base). Apply consistently across Hero, About, and the Preserve sections as they're touched.
3. **Single breakpoint set.** Retire the current three independent breakpoints (860px in `Hero.tsx`, 720px in `About.tsx`, 640px in `index.css`). Define two tokens: a nav/mobile-menu breakpoint and a layout-grid-collapse breakpoint, and use them everywhere a two-column layout currently collapses.
4. **Color token cleanup.** Collapse the ~15 existing aliases (`--red`, `--gold`, `--yellow`, `--navy`, etc., several of which resolve to the same hex and are named for colors they aren't — `--red` is mustard) down to real semantic names (`--accent`, `--highlight`, `--ink`, `--surface`, etc., building on what the prior recolor round already introduced). Fix `::selection`'s hardcoded blue. This must happen before dark-mode tokens are added, not alongside them — dark mode is defined against the clean semantic set, not the alias graph.
5. **Font-loading fix.** `index.html`'s `<link>` and `index.css`'s `@import` currently request different, overlapping font sets (the `<link>` omits Poppins entirely; weights differ between the two). Resolve to one consistent, self-hosted font contract (`@font-face` + `font-display: swap`) covering exactly the families/weights actually used on the pages in scope for this redesign. Playfair Display stays loaded only if it's still genuinely used by out-of-scope pages (`ESInterview.tsx`, `TheftCounter.tsx`) — not reintroduced anywhere touched by this redesign, per Michael's sans-only decision.
6. **Global CSS bug fixes** listed in "Changes from first draft" item 6 above (scrollbar, reduced-motion scoping, uppercase tracking).

## Hero redesign

- Layout unchanged: two-column grid, portrait photo full-bleed in the right column, **completely unchanged** — crop, prominence, alt text, no shader/filter treatment on the photo itself.
- Left column: drop the secondary grey credentials paragraph (currently ~lines 80-92 of `Hero.tsx`) to stay within the hero's 4-text-element budget once the sourced caption is added. Keep: accent dash, name, headline (mustard underline highlight unchanged, letter-spacing fixed to positive per the bug above), CTAs.
- Right column background (currently a flat `--hero-bg` plate behind the photo): replaced with a real, legible small chart — rendered as SVG/canvas-2D contour-style line work first — of a genuine dataset Michael follows (e.g. NGN/USD monthly closes, or a debt-to-GDP series; final series confirmed with Michael at implementation time, since he needs to be comfortable citing the source). One line in `--highlight` (mustard) as the only color accent against neutral tones from the cleaned-up token set.
- Caption: small, letterspaced, bottom-left of the right column, using the new micro/small type tokens. Format: `[SERIES NAME] monthly close, [YEAR RANGE]. [SOURCE].` — no em/en dashes, no more than one separator per line (period, not middle-dot). Example: `NGN/USD monthly close, 2016-2026. Central Bank of Nigeria.`
- Motion: slow, continuous, low-amplitude drift only, on the chart element — never on the portrait, never under the body text. No mouse-tracking, no hover response. One-sentence justification (motion-must-be-motivated rule): the drift signals the series is live, not a static decorative image.
- Reduced motion / mobile (below the layout-grid-collapse breakpoint): pre-baked static image of the same render, same position, same caption. If the primary implementation is SVG/canvas-2D (not WebGL), this is cheap by construction — the same markup just isn't animated.
- If a hand-rolled React Three Fiber version is attempted and actually ships (conditional, see "Changes from first draft" item 2): it must be an isolated, lazy-loaded client leaf, never sharing a render tree with the existing `framer-motion` components, cross-fading in via plain CSS opacity — never a `motion.div`. LCP must never depend on it; the portrait `<img>` remains the largest contentful paint element exactly as today.

## About redesign

- Real, concrete artifact replaces the current plain two-column prose layout: a chart Michael has actually built (e.g. a Power BI screenshot, or a rendering of real data he's worked with), or a clearly-dated credentials/experience table. No 3D object, no generic rotating geometry.
- Type gets the same treatment as Hero: current body copy runs at Outfit 300 (thin) 14-16px across six paragraphs of centered prose, which reads weak for an editorial/authority register — revise to the new type scale's body tokens (heavier weight, larger size) as part of this section's overhaul.
- The current 1fr/1fr two-column grid (two paragraphs left, one right) leaves a visibly unbalanced layout — resolved as part of the redesign, not preserved.

## Work / Focus / Thinking-in-public / Connect / Footer

- Layout, copy and information architecture unchanged.
- Foundation fixes apply (type scale, spacing scale, tokens, breakpoints) as these sections are touched for that reason.
- No new motion is added. Whatever stagger/fade motion currently exists stays as-is or is simplified — not expanded.

## Color system

- Built on the cleaned-up semantic tokens from Phase 0 (not the current alias graph).
- Dark mode: real `prefers-color-scheme: dark` support, defined against the clean token set. Includes a deliberately-designed dark palette for the Hero chart element, not an inverted light-mode render. No pure `#000000` / pure `#ffffff`.

## Typography

- No serif anywhere touched by this redesign. Sans display for headlines and body.
- Self-hosted fonts (Phase 0), one consistent contract between `index.html` and `index.css`.
- Type scale (Phase 0) replaces all hardcoded font-family strings and ad-hoc sizes in the components this redesign touches.

## New dependencies (conditional)

```
npm install three @react-three/fiber
npm install -D @types/three
```

Only installed if, during implementation, a hand-rolled r3f shader material for the Hero chart genuinely outperforms the SVG/canvas-2D baseline. If the SVG/canvas-2D version is good enough (likely, given the review's read that it's the more editorial choice anyway), these dependencies are never added and the redesign ships with zero new runtime dependencies beyond what's already installed.

## Hard implementation rules

1. If React Three Fiber is used, it's isolated in its own lazy-loaded client leaf component, never sharing a render tree with `framer-motion` components.
2. `prefers-reduced-motion: reduce` stops all decorative/transform motion (drift, rotation) entirely — static frame, not slowed. Simple hover/focus feedback transitions are unaffected (fixing the current bug where reduced-motion kills everything).
3. No WebGL (if used at all) below the layout-grid-collapse breakpoint — pre-baked static rendering instead.
4. Colour values used anywhere in this redesign come from the cleaned-up semantic CSS custom properties — never a new locally-declared hex value.
5. LCP is never gated on anything beyond the portrait `<img>` loading as it does today.
6. No scroll-hijacking, pinning, parallax, or new stagger-reveal motion anywhere (MOTION_INTENSITY 3 ceiling).
7. Native scrollbar stays visible sitewide.

## Open items for implementation planning (not blocking spec approval)

- Exact dataset/series for the Hero chart (needs a real, citable source Michael is comfortable attributing).
- Exact artifact for About (chart, screenshot, or table — Michael to confirm which real piece of work to feature).
- Named type scale values and spacing unit (concrete numbers to be finalized during implementation planning, informed by the current site's actual content).
- Whether the Hero chart ships as SVG/canvas-2D only, or a conditional r3f version is attempted and compared.
