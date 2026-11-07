# Project State: Carrot Core Pages

## Overview
Static marketing and product documentation website for **Carrot Core Creations**, hosted via GitHub Pages (custom domain `carrot-core.com` via Cloudflare).

---

## Current Status & Snapshot

* **Active Focus:** Maintenance, documentation modernization, and asset preparation for BrainIQue sub-games.
* **BrainIQue Suite Architecture:**
  * Primary suite showcase live at [`BrainIQue/brainique.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/brainique.html) with 5 game cards.
  * Suite privacy live at [`BrainIQue/privacy.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/privacy.html).
  * 5 dedicated sub-game pages established under [`BrainIQue/games/`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/games/):
    * `mergemathica/mergemathica.html`
    * `thumbstack/thumbstack.html`
    * `moduku/moduku.html`
    * `ohmyword/ohmyword.html`
    * `woahdle/woahdle.html`
* **Layout & Grid Refactor:**
  * Fixed card column squishing by separating "Games Included" and "Features & Design" onto independent full-width grid rows (`#games` and `#features` with `grid-column: 1 / -1`).
* **Git Status:**
  * Branch: `main` up-to-date with remote (`origin/main`).
  * Most recent commit: `4db50ad` ("feat: add BrainIQue suite product hub and 5 sub-game pages").

---

## Lessons Learned & Error Prevention Rules

1. **3-Tier Relative Path Nesting:**
   * Pages located in `BrainIQue/games/<game>/<game>.html` are 3 directories deep.
   * Root assets (`styles.css`, `CCSquare.png`, `assets/`, `scripts/`) must reference `../../../` (never `../../`).
   * Suite links (e.g. BrainIQue hub, suite privacy) reference `../../` (e.g. `../../brainique.html`).

2. **Full-Width Project Card Grids:**
   * The default `.content-grid` is a 2-column layout (`1.4fr` / `0.85fr`).
   * Never place a multi-card `.project-list` inside a shared 2-column `.content-grid` alongside an `aside.panel`. It must always occupy a standalone row styled with `.site-page #<id>.content-grid { grid-template-columns: minmax(0, 1fr); width: 100%; }` and `grid-column: 1 / -1`.

3. **Workspace Boundary:**
   * NEVER edit files in the native apps repository (`/Users/natie/Code/Carrot Core/Games/Brainique`). That repo is strictly for read-only game rules and description references.

---

## Pending Work & Backlog

* [ ] Add official screenshots and game-specific icons for Thumbstack, Moduku, Oh My Word!, and Woahdle once provided by the owner.
* [ ] Remove `.DS_Store` across the repo, untrack `mergemathica/.DS_Store`, and commit root `.gitignore`.
* [ ] Verify Knowitpad product and privacy page when ready to publish on the homepage.
