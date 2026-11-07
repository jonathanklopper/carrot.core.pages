# Architecture Decision Records (ADRs)

## ADR-001: Zero-Toolchain Static Architecture on GitHub Pages
* **Status**: Accepted
* **Date**: 2026-05-04

### Context
Carrot Core Creations requires a lightweight marketing and product documentation site hosted on GitHub Pages with Cloudflare custom domain routing (`carrot-core.com`).

### Decision
Do not introduce modern JavaScript frontend frameworks (React, Vue, Next.js, Astro), bundlers (Vite, Webpack), CSS preprocessors (Tailwind, Sass), or package managers (npm, pnpm). The entire site is authored in plain semantic HTML5, pure CSS3 variables, and vanilla JavaScript.

### Consequences
* **Positive**: Instant deployment upon git push; zero build pipeline failures; zero dependency vulnerabilities; perfectly hand-editable markup.
* **Negative**: Shared components (such as header, theme script, and footer) are duplicated across HTML files rather than imported via templates. Agents must update all files consistently when touching shared UI behaviors.

---

## ADR-002: BrainIQue Nested Suite Hierarchy (`BrainIQue/games/`)
* **Status**: Accepted
* **Date**: 2026-11-07

### Context
BrainIQue evolved from a standalone 2048 game (`Mergemathica`) into an all-in-one puzzle suite containing five distinct games (`Mergemathica`, `Thumbstack`, `Moduku`, `Oh My Word!`, `Woahdle`). The marketing site needed to reflect this hierarchy without polluting the root directory or breaking legacy URLs.

### Decision
1. Retain legacy `/mergemathica/` intact at root for URL continuity, but remove its navigation card from `index.html`.
2. Create `/BrainIQue/brainique.html` as the central suite product hub.
3. Nest all sub-game pages inside a dedicated subfolder: `/BrainIQue/games/<game>/<game>.html`.

### Consequences
* **Positive**: Clean separation of product concerns; clean root directory; preserves existing App Store links and search indices.
* **Important Constraint**: Sub-game pages are three levels deep. All root assets (`styles.css`, `CCSquare.png`, `assets/`, `scripts/`) must be linked with `../../../` (e.g. `../../../styles.css`), while suite-level links use `../../` (e.g. `../../brainique.html`).

---

## ADR-003: Full-Width Container Pattern for Nested Project Grids
* **Status**: Accepted
* **Date**: 2026-11-07

### Context
The default `.site-page .content-grid` is a 2-column layout (`minmax(0, 1.4fr) minmax(280px, 0.85fr)`). Placing both "Games Included" and "Features & Design" in the same grid row squeezed the games panel into ~380px, causing the internal 2-column `.project-list` cards to collapse to ~150px and overflow text.

### Decision
1. Give major showcase sections their own independent full-width rows:
   - `<section class="content-grid" id="projects">` (on `index.html`)
   - `<section class="content-grid" id="games">` (on `brainique.html`)
   - `<section class="content-grid" id="features">` (on `brainique.html`)
2. Target these sections in `styles.css` with:
   ```css
   .site-page #projects.content-grid,
   .site-page #games.content-grid,
   .site-page #features.content-grid {
     grid-template-columns: minmax(0, 1fr);
     width: 100%;
   }
   .site-page #projects > .panel,
   .site-page #games > .panel,
   .site-page #features > .panel {
     grid-column: 1 / -1;
     width: 100%;
     max-width: none;
   }
   ```

### Consequences
* Cards inside `.project-list` now consistently have sufficient horizontal space (~320px+ each) across desktop and tablet viewports, ensuring text wraps cleanly without border collision.
