# Codebase Project Map

## Overview
This repository is the static marketing and documentation website for **Carrot Core Creations**, hosted on GitHub Pages with Cloudflare custom domain `carrot-core.com`.

---

## Directory Hierarchy & File Index

```
.
├── index.html                   # Studio landing page (hero, projects grid, about panel)
├── styles.css                   # Central stylesheet for the entire website
├── CCSquare.png                 # Primary Carrot Core brand mark / favicon
├── CNAME                        # Cloudflare custom domain routing (carrot-core.com)
├── AGENTS.md                    # Universal operating guide for all AI coding agents
├── PROJECT_STATE.md             # Active continuity snapshot, status, & lessons learned
├── PROJECT_CONTEXT.md           # High-level architecture, design, & theme context
│
├── BrainIQue/                   # BrainIQue Puzzle Suite Section
│   ├── brainique.html           # Main suite showcase page (cards linking to sub-games)
│   ├── privacy.html             # BrainIQue-specific privacy policy
│   ├── icon.png                 # Suite icon asset
│   └── games/                   # Sub-game individual landing pages
│       ├── mergemathica/
│       │   ├── mergemathica.html
│       │   └── icon.png
│       ├── thumbstack/
│       │   ├── thumbstack.html
│       │   └── icon.png
│       ├── moduku/
│       │   ├── moduku.html
│       │   └── icon.png
│       ├── ohmyword/
│       │   ├── ohmyword.html
│       │   └── icon.png
│       └── woahdle/
│           ├── woahdle.html
│           └── icon.png
│
├── gravemistake/                # Grave Mistake Product Section
│   ├── gravemistake.html        # Watch game product page with video & screenshot gallery
│   ├── privacy.html             # Grave Mistake privacy policy
│   ├── icon.png                 # App icon
│   └── screenshots/             # Gameplay screenshots & MP4 video
│
├── knowitpad/                   # Knowitpad Product Section
│   ├── knowitpad.html           # macOS minimal editor page (unlinked placeholder on home)
│   ├── privacy.html             # Knowitpad privacy policy
│   ├── icon.png                 # App icon
│   └── screenshots/             # Mac screenshots
│
├── mergemathica/                # Legacy Standalone Mergemathica Section
│   ├── mergemathica.html        # Legacy 2048 page (kept intact for legacy URLs/reviews)
│   ├── privacy.html             # Legacy privacy policy
│   ├── icon.png                 # Original app icon
│   └── screenshots/             # Original screenshots
│
├── assets/                      # Shared store badges & vector assets
│   ├── appstore_ios.svg
│   └── appstore_mac.svg
│
├── scripts/                     # Shared client-side scripts
│   └── media-gallery.js         # Screenshot modal & video gallery player
│
├── docs/                        # Agent Architecture & Reference Documentation
│   ├── project-map.md           # This index & quick lookup reference
│   └── architecture-decisions.md # Architecture Decision Records (ADRs)
│
├── privacy.html                 # Studio-wide umbrella privacy policy
├── support.html                 # Central support & feedback routing
└── thankyouforyourfeedback.html # Form submission confirmation page
```

---

## Quick Lookup Table

| I want to change... | Start here | Notes & Dependencies |
| :--- | :--- | :--- |
| **Homepage Layout or Copy** | [`index.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/index.html) | Uses `.site-page`, links to product hubs |
| **Global Styles or Colors** | [`styles.css`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/styles.css) | Affects both `.site-page` and `.policy-page` |
| **BrainIQue Suite Showcase** | [`BrainIQue/brainique.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/brainique.html) | Uses `#games` and `#features` full-width grid |
| **A BrainIQue Sub-Game Page** | `BrainIQue/games/<game>/<game>.html` | 3-tier relative path rule (`../../../styles.css`) |
| **A Privacy Policy** | `<product>/privacy.html` | Uses `.policy-page`, duplicated intentionally |
| **Grave Mistake Product** | [`gravemistake/gravemistake.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/gravemistake/gravemistake.html) | Uses `watch-gallery` and `media-gallery.js` |
| **Theme Switching Logic** | Inline `<script>` in each HTML file | Driven by `carrot-core-creations-theme` key |
| **Routing / Custom Domain** | [`CNAME`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/CNAME) | Must contain `carrot-core.com` |

---

## Relative Path Matrix

| Location | Path to `styles.css` | Path to `CCSquare.png` | Path to `index.html` | Path to Suite Hub |
| :--- | :--- | :--- | :--- | :--- |
| **Root (`/`)** | `./styles.css` | `./CCSquare.png` | `./index.html` | `./BrainIQue/brainique.html` |
| **Level 1 (`/BrainIQue/`, `/gravemistake/`)** | `../styles.css` | `../CCSquare.png` | `../index.html` | N/A |
| **Level 2 (`/BrainIQue/games/<game>/`)** | `../../../styles.css` | `../../../CCSquare.png` | `../../../index.html` | `../../brainique.html` |
