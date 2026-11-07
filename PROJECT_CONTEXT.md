# Project Context

This is a static GitHub Pages site for Carrot Core Creations.

## Site Map

- [index.html](./index.html)
  - Landing page
  - Links to BrainIQue and Grave Mistake
- [BrainIQue/brainique.html](./BrainIQue/brainique.html)
  - BrainIQue puzzle suite product page (hub for 5 sub-games)
- [BrainIQue/privacy.html](./BrainIQue/privacy.html)
  - BrainIQue privacy page
- [BrainIQue/games/mergemathica/mergemathica.html](./BrainIQue/games/mergemathica/mergemathica.html)
  - Mergemathica sub-game page
- [BrainIQue/games/thumbstack/thumbstack.html](./BrainIQue/games/thumbstack/thumbstack.html)
  - Thumbstack sub-game page
- [BrainIQue/games/moduku/moduku.html](./BrainIQue/games/moduku/moduku.html)
  - Moduku sub-game page
- [BrainIQue/games/ohmyword/ohmyword.html](./BrainIQue/games/ohmyword/ohmyword.html)
  - Oh My Word! sub-game page
- [BrainIQue/games/woahdle/woahdle.html](./BrainIQue/games/woahdle/woahdle.html)
  - Woahdle sub-game page
- [gravemistake/gravemistake.html](./gravemistake/gravemistake.html)
  - Grave Mistake product page
- [gravemistake/privacy.html](./gravemistake/privacy.html)
  - Grave Mistake privacy page
- [knowitpad/knowitpad.html](./knowitpad/knowitpad.html)
  - Knowitpad product page
- [knowitpad/privacy.html](./knowitpad/privacy.html)
  - Knowitpad privacy page
- [mergemathica/mergemathica.html](./mergemathica/mergemathica.html)
  - Legacy standalone Mergemathica product page (intact, not linked from home)
- [mergemathica/privacy.html](./mergemathica/privacy.html)
  - Legacy standalone Mergemathica privacy page

## Shared Styling

- [styles.css](./styles.css) is the shared stylesheet for the whole site
- `site-page` drives landing/product page styling
- `policy-page` drives privacy page styling

Important shared UI behaviors:

- Shared theme toggle
- Shared centered footer treatment
- Shared warm color palette

## Shared Theme Logic

Each page currently contains a small inline script that:

- reads `localStorage.getItem("carrot-core-creations-theme")`
- falls back to `prefers-color-scheme`
- writes `data-theme` to the root HTML element
- updates the toggle button label

If theme behavior changes, update all pages consistently.

## Relative Path Rules

From root:

- stylesheet: `./styles.css`
- brand icon: `./CCSquare.png`

From product/privacy subfolders:

- shared stylesheet: `../styles.css`
- shared brand icon: `../CCSquare.png`
- page-local icon: `./icon.png`
- home page: `../index.html`

Most likely regression in this repo: broken relative paths after a quick edit.

## Current Content Structure

Landing page currently has:

- hero
- capability strip
- projects section
- studio/about section

Product pages currently have:

- hero
- capability strip
- features/details
- why/support section

Privacy pages currently have:

- privacy header
- single card content block
- centered brand footer

## Known Intentional Simplicity

- Privacy pages are still very similar and may be edited separately later
- No build system is used
- No reusable component system is used beyond shared CSS
- Some JS is intentionally duplicated because the site is small

## Editing Checklist

Before editing:

1. Identify whether the change is root-only, product-only, privacy-only, or shared
2. Confirm the correct relative paths from that file
3. Prefer shared CSS updates over duplicated styling changes

After editing:

1. Load affected pages via a local HTTP server
2. Click navigation paths you changed
3. Toggle dark/light mode once on at least one affected page
4. Confirm the footer still looks identical across pages unless the user requested a footer change

## Suggested Local Validation

```sh
python3 -m http.server 8000
```

Optional lightweight route check:

```sh
python3 - <<'PY'
from urllib.request import urlopen
paths = [
    'index.html',
    'knowitpad/knowitpad.html',
    'knowitpad/privacy.html',
    'mergemathica/mergemathica.html',
    'mergemathica/privacy.html',
]
for path in paths:
    with urlopen(f'http://127.0.0.1:8000/{path}') as response:
        print(response.status, path)
PY
```

## Notes For An Incoming Agent

- This repo is optimized for direct editing, not abstraction
- Avoid replacing simple HTML with a toolchain
- The owner prefers minimal-impact changes and practical results
- If a request is ambiguous, preserve the existing look and fix only what is necessary
