# Project State: Carrot Core Pages

## Overview
Static marketing and product documentation website for **Carrot Core Creations** hosted via GitHub Pages (custom domain `carrot-core.com` via Cloudflare).

## Current Site Architecture & Routes

### Root Pages
- `index.html`: Studio homepage with hero, projects grid, about panel, and local-first privacy statement.
- `privacy.html`: General studio privacy policy.
- `support.html`: Support routing.
- `styles.css`: Central shared stylesheet driving both `.site-page` and `.policy-page`.

### Product & Suite Sections
1. **BrainIQue (`BrainIQue/`)** - Modern 5-in-1 Apple puzzle game suite:
   - `BrainIQue/brainique.html`: Main suite showcase hub page linking to sub-games, listing features, and telemetry/privacy.
   - `BrainIQue/privacy.html`: Privacy policy for BrainIQue.
   - `BrainIQue/icon.png`: App suite icon.
   - **Sub-games (`BrainIQue/games/`)**:
     - `mergemathica/mergemathica.html`: 2048 number and logic puzzle.
     - `thumbstack/thumbstack.html`: Reverse-Klondike numbers solitaire with frosted glass tiles.
     - `moduku/moduku.html`: Dimension-shifting Sudoku & polyomino jigsaw logic puzzle.
     - `ohmyword/ohmyword.html`: Fast-paced anagram and vocabulary round challenge.
     - `woahdle/woahdle.html`: Tactical multi-length word guessing challenge.
2. **Grave Mistake (`gravemistake/`)** - Apple Watch zombie shooter:
   - `gravemistake/gravemistake.html`: Product page.
   - `gravemistake/privacy.html`: Privacy policy.
3. **Knowitpad (`knowitpad/`)** - Minimal macOS text editor:
   - `knowitpad/knowitpad.html`: Product page.
   - `knowitpad/privacy.html`: Privacy policy.
4. **Legacy Standalone Mergemathica (`mergemathica/`)**:
   - Preserved intact for legacy links / App Store reviews, but removed from home page navigation in favor of BrainIQue.

## Relative Path Conventions
- **Root (`/`)**:
  - Stylesheet: `./styles.css`
  - Brand icon: `./CCSquare.png`
- **First-level (`/BrainIQue/`, `/gravemistake/`, `/knowitpad/`)**:
  - Stylesheet: `../styles.css`
  - Brand icon: `../CCSquare.png`
  - Home: `../index.html`
- **Sub-game level (`/BrainIQue/games/<game>/`)**:
  - Stylesheet: `../../styles.css`
  - Brand icon: `../../CCSquare.png`
  - Hub: `../../brainique.html`
  - Home: `../../../index.html`
  - Suite Privacy: `../../privacy.html`

## Status & Next Steps
- [x] Initialized `PROJECT_STATE.md` and updated `AGENTS.md`.
- [x] BrainIQue suite structure created (`BrainIQue/` and `BrainIQue/games/`).
- [ ] Home page navigation updated to showcase BrainIQue.
- [ ] BrainIQue suite product page and privacy policy generated.
- [ ] Five sub-game pages generated with rich content based on game rules and design specs.
- [ ] Route and link integrity verified.
