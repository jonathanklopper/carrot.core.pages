# AGENTS.md — Universal Agent Operating Guide

This repository is a lightweight static marketing and documentation website for **Carrot Core Creations**, hosted on GitHub Pages (custom domain `carrot-core.com` via Cloudflare).

This file is the **universal operating guide for all AI coding agents** (Antigravity/Gemini, OpenCode/Qwen, Claude Code, and ChatGPT/Codex).
Read this file first, then consult [`docs/project-map.md`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/docs/project-map.md) and [`PROJECT_STATE.md`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/PROJECT_STATE.md) before making changes.

---

## 🎯 Mission & Priority Order

1. **Keep the site working on GitHub Pages:** Raw static HTML/CSS/JS only.
2. **Preserve the visual language:** Apple Liquid Glass aesthetics, warm color palette, soft translucent surfaces, restrained motion.
3. **Make tightly scoped edits:** Prefer small, targeted HTML/CSS patches over structural rewrites.
4. **Maintain path and theme integrity:** Verify all relative paths (`../../..`), navigation links, and localStorage theme persistence.

---

## 🚫 Hard Constraints (Non-Negotiables)

* **No Frameworks or Bundlers:** Do NOT introduce React, Vue, Tailwind, Astro, Next.js, Vite, or any build step. Pages must serve directly from the repository root.
* **Workspace Boundary:** Do NOT make any changes outside this repository! The native apps workspace (`/Users/natie/Code/Carrot Core/Games/Brainique`) is strictly for read-only reference.
* **Preserve Legacy URLs:** Keep `/mergemathica/mergemathica.html` and `/mergemathica/privacy.html` intact on disk for legacy App Store review links.
* **Do Not Convert to a SPA:** Keep plain, multi-page HTML architecture.
* **Never Commit `.DS_Store`:** Always ensure `.DS_Store` is ignored and deleted.

---

## 🗺️ Key Routes & File Index

* [`index.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/index.html): Studio landing page (hero, projects grid, about panel, privacy link)
* [`styles.css`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/styles.css): Shared central stylesheet driving `.site-page` and `.policy-page`
* [`CCSquare.png`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/CCSquare.png): Shared brand icon and default favicon
* [`CNAME`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/CNAME): Cloudflare custom domain configuration (`carrot-core.com`)

### Product Hubs
* [`BrainIQue/brainique.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/brainique.html): BrainIQue puzzle suite showcase (5-in-1 cards)
* [`BrainIQue/privacy.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/privacy.html): BrainIQue suite privacy policy
* [`gravemistake/gravemistake.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/gravemistake/gravemistake.html): Grave Mistake zombie shooter page
* [`knowitpad/knowitpad.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/knowitpad/knowitpad.html): Knowitpad minimal text editor page

### BrainIQue Sub-Games (`BrainIQue/games/`)
* [`BrainIQue/games/mergemathica/mergemathica.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/games/mergemathica/mergemathica.html): 2048 number and logic puzzle
* [`BrainIQue/games/thumbstack/thumbstack.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/games/thumbstack/thumbstack.html): Reverse-Klondike solitaire with colored glass numbers
* [`BrainIQue/games/moduku/moduku.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/games/moduku/moduku.html): Dimension-shifting Sudoku & polyomino jigsaw logic puzzle
* [`BrainIQue/games/ohmyword/ohmyword.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/games/ohmyword/ohmyword.html): Anagram & vocabulary round challenge
* [`BrainIQue/games/woahdle/woahdle.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/games/woahdle/woahdle.html): Multi-length word-guessing challenge

---

## 📐 Relative Path Conventions (Critical Rule)

Because pages are nested at different directory depths, relative paths must be strictly checked:

| Depth Level | Examples | Path to `styles.css` | Path to `CCSquare.png` | Path to `index.html` | Path to BrainIQue Hub |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Root (0)** | `index.html` | `./styles.css` | `./CCSquare.png` | `./index.html` | `./BrainIQue/brainique.html` |
| **Level 1** | `BrainIQue/brainique.html`, `gravemistake/gravemistake.html` | `../styles.css` | `../CCSquare.png` | `../index.html` | `./brainique.html` |
| **Level 2 (Sub-games)** | `BrainIQue/games/<game>/<game>.html` | `../../../styles.css` | `../../../CCSquare.png` | `../../../index.html` | `../../brainique.html` |

> [!CAUTION]
> The most frequent regression in this repo is using `../../styles.css` inside `BrainIQue/games/<game>/`. Because it is nested 3 directories deep, it **must** be `../../../styles.css`.

---

## 🎨 Layout & CSS Rules

* **Shared CSS:** Centralized in [`styles.css`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/styles.css). Avoid scattered inline styles.
* **Full-Width Showcase Containers:** Major project/game card grids must use independent row sections with full-width rules:
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
  *Never* place a `.project-list` inside a shared 2-column `.content-grid` alongside an `aside.panel`; doing so squishes cards to ~150px and clips card text.

---

## 🌗 Theme Rules

* **Storage Key:** `carrot-core-creations-theme`
* Driven by setting `data-theme="dark"` or `"light"` on `document.documentElement`.
* Every page includes a standardized vanilla `<script>` block that reads `localStorage` and falls back to `prefers-color-scheme: dark`. Keep this script identical across pages.

---

## 🧪 Verification Protocol

Always execute these two lightweight verification scripts before concluding any task:

### 1. Relative Link & Asset Integrity Check
```bash
python3 - <<'PY'
import re
from pathlib import Path
root = Path(".")
errors = 0
for f in root.glob("**/*.html"):
    text = f.read_text()
    for link in re.findall(r'(?:href|src)=["\']([^"\']+)["\']', text):
        if link.startswith(("http", "#", "mailto:", "itms-apps:", "macappstore:")): continue
        target = (f.parent / link.split("?")[0]).resolve()
        if not target.exists():
            print(f"BROKEN LINK in {f}: {link} -> {target}")
            errors += 1
if errors == 0: print("All relative links and assets resolve successfully!")
PY
```

### 2. HTTP Route Check (via Python Server)
```bash
python3 -m http.server 8000 &
PID=$!
sleep 1
python3 - <<'PY'
import urllib.request
routes = ["index.html", "BrainIQue/brainique.html", "BrainIQue/privacy.html", "BrainIQue/games/mergemathica/mergemathica.html", "gravemistake/gravemistake.html", "knowitpad/knowitpad.html"]
for r in routes:
    with urllib.request.urlopen(f"http://127.0.0.1:8000/{r}") as res:
        assert res.status == 200, f"Failed: {r}"
print("All routes returned 200 OK!")
PY
kill $PID
```
