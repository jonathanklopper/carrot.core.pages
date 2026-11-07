# Project Context

This is a static marketing and documentation website for Carrot Core Creations, hosted on GitHub Pages with Cloudflare custom domain routing (`carrot-core.com`).

---

## Site Map

* [`index.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/index.html) — Studio landing page (hero, projects grid, about panel, privacy link)
* [`BrainIQue/brainique.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/brainique.html) — BrainIQue puzzle suite product hub
* [`BrainIQue/privacy.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/privacy.html) — BrainIQue suite privacy policy
* [`BrainIQue/games/mergemathica/mergemathica.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/games/mergemathica/mergemathica.html) — Mergemathica sub-game page
* [`BrainIQue/games/thumbstack/thumbstack.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/games/thumbstack/thumbstack.html) — Thumbstack sub-game page
* [`BrainIQue/games/moduku/moduku.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/games/moduku/moduku.html) — Moduku sub-game page
* [`BrainIQue/games/ohmyword/ohmyword.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/games/ohmyword/ohmyword.html) — Oh My Word! sub-game page
* [`BrainIQue/games/woahdle/woahdle.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/BrainIQue/games/woahdle/woahdle.html) — Woahdle sub-game page
* [`gravemistake/gravemistake.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/gravemistake/gravemistake.html) — Grave Mistake product page
* [`gravemistake/privacy.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/gravemistake/privacy.html) — Grave Mistake privacy page
* [`knowitpad/knowitpad.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/knowitpad/knowitpad.html) — Knowitpad product page
* [`knowitpad/privacy.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/knowitpad/privacy.html) — Knowitpad privacy page
* [`mergemathica/mergemathica.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/mergemathica/mergemathica.html) — Legacy standalone Mergemathica product page (kept intact)
* [`mergemathica/privacy.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/mergemathica/privacy.html) — Legacy standalone Mergemathica privacy page
* [`privacy.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/privacy.html) — Umbrella privacy policy
* [`support.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/support.html) — Support & feedback routing
* [`thankyouforyourfeedback.html`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/thankyouforyourfeedback.html) — Feedback confirmation page

---

## Shared Styling & Design System

* [`styles.css`](file:///Users/natie/Code/Carrot%20Core/carrot-core-pages.com/styles.css) is the central stylesheet for the whole site.
* `body.site-page` drives landing and product page styling.
* `body.policy-page` drives privacy policy styling.
* Design principles:
  * Apple Liquid Glass frosted translucent material design
  * Warm color palette (`--surface`, `--surface-strong`, `--accent`)
  * Standardized centered footer with `CCSquare.png` and copyright

---

## Relative Path Conventions

* **From Root (`/`):**
  * Stylesheet: `./styles.css`
  * Brand icon: `./CCSquare.png`
* **From Product / Privacy subfolders (Level 1, e.g. `/BrainIQue/`, `/gravemistake/`):**
  * Stylesheet: `../styles.css`
  * Brand icon: `../CCSquare.png`
  * Home: `../index.html`
* **From Sub-game subfolders (Level 2, e.g. `/BrainIQue/games/<game>/`):**
  * Stylesheet: `../../../styles.css`
  * Brand icon: `../../../CCSquare.png`
  * Home: `../../../index.html`
  * Suite Hub: `../../brainique.html`

---

## Local Verification Commands

```bash
# Link & asset verification
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
            print(f"BROKEN: {f} -> {link}")
            errors += 1
if errors == 0: print("All relative links resolve 100%!")
PY
```
