# michaelesema.com — Diagnostic Report

## 5xx Root Cause Analysis

### Finding 1: SPA fallback — PRESENT (not the cause)
- `public/_redirects` contains `/* /index.html 200` and is correctly placed in `public/` so Vite copies it to `dist/` on build.
- `dist/_redirects` confirms this is already working.
- This is NOT the cause of 5xx errors.

### Finding 2: Dual config (netlify.toml + wrangler.toml) — LOW RISK
- `netlify.toml` specifies `publish = "dist"` and a `[[redirects]]` www-redirect block.
- `wrangler.toml` specifies `pages_build_output_dir = "dist"`.
- Cloudflare Pages reads `wrangler.toml` and ignores `netlify.toml`. No conflict.
- The `[[redirects]]` in `netlify.toml` is Netlify-only syntax; Cloudflare uses `_redirects`. Both exist and are correct for their respective platforms.

### Finding 3: Most likely 5xx cause — Cloudflare Pages build environment
The code, routing, SPA fallback, and output directory are all correct. If Google Search Console reports 5xx, the most probable causes are:
1. **Build failure at deploy time** — a TypeScript error or missing dependency causing the `dist/` directory to be empty or stale. Cloudflare Pages serves the last successful build if the latest fails silently. Check the Cloudflare Pages dashboard > Deployments for any failed builds.
2. **Cloudflare Pages project pointing to wrong output dir** — if the Pages project was configured before `wrangler.toml` was added, the dashboard setting may override to a wrong directory. Verify in the dashboard that the publish directory is set to `dist`.
3. **GSC reporting lag** — GSC 5xx errors may reflect a previous bad deploy rather than the current live state. Check the exact URLs and timestamps in GSC.

### Finding 4: Route /thesis — CONFIRMED CORRECT
- `src/App.tsx` maps `/thesis` to `<ThesisPage />`.
- `ThesisPage.tsx` exists and renders full content (no redirect, no placeholder).
- Route is declared before the catch-all `path="*"`. No routing conflict.

### Finding 5: Header navigation — CONFIRMED CORRECT
- `src/components/Nav.tsx` already contains:
  - `{ label: 'The Signal', href: 'https://mykei.io/signal', external: true }`
  - `{ label: 'Mykei Securities', href: 'https://mykei.io', external: true }`
- Both appear in desktop and mobile menus. No changes needed.

### Finding 6: Colour palette — ACCEPTABLE
- Body background: `#FFFFFF` (white). Acceptable.
- `--bg-warm: #F9F8F6` used in ThesisPage body section. Acceptable.
- `var(--dark)` (`#0A0B0A`) used as background in Connect.tsx — this is an intentional dark CTA section, a specific UI element. Permitted under project rules.
- No pure black backgrounds on page-level layouts.

---

## Code Changes Made This Session

- [x] `index.html` line 7: replaced em dash in meta description with "Founder and CEO"
- [x] `index.html` line 48: replaced two em dashes in Person schema description with commas and colon
- [x] `index.html` line 65: replaced em dash in alumni description with period
- [x] `index.html` line 85: replaced em dash in FAQ answer with comma
- [x] `index.html` line 89: replaced em dash in FAQ answer with comma
- [x] `index.html` line 117: replaced em dash in WebSite schema description with comma

No em dashes remain in any rendered HTML, JSON-LD, or prose. Remaining dashes are:
- JSX code comments only (not rendered)
- Academic citation page range `588-608` in ThesisPage (en dash, standard scholarly format, preserved)

---

## Steps Required in Cloudflare Dashboard

1. Go to **Cloudflare Pages** > michaelesema project > **Deployments**.
2. Check the latest deployment status. If it shows a build error, read the build log.
3. Confirm the **Build settings** show:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. If the output directory is blank or wrong, update it to `dist` and trigger a new deploy.
5. After the next successful deploy, request re-indexing of affected URLs in Google Search Console (Inspect URL > Request Indexing).

---

## Checklist

- [x] SPA fallback redirect confirmed in place
- [x] /thesis route confirmed wired to ThesisPage component
- [x] Header contains "The Signal" and "Mykei Securities" external links
- [x] Colour palette verified — no violations
- [x] Em/en dashes purged from all rendered prose in index.html
- [ ] Cloudflare dashboard build log check (requires dashboard access)
- [ ] Re-index affected URLs in GSC after confirming clean deploy
