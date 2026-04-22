# AGENTS.md

This repository is a small static marketing/docs site for Carrot Core Creations, hosted on GitHub Pages.

This file is written as the primary operating guide for a Qwen-Coder style agent taking over the project.
Read this file first. Then read [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) before making changes.

## Mission

Maintain and improve this site with small, deliberate edits.

Priority order:

1. Keep the site working on GitHub Pages.
2. Preserve the existing visual language unless the user asks for a redesign.
3. Prefer minimal HTML/CSS/JS edits over structural rewrites.
4. Keep navigation, relative paths, and theme persistence working across pages.

## Project Type

- Static HTML/CSS/JS only
- No framework
- No bundler
- No package manager setup
- No build step
- Intended to be served directly from the repository root by GitHub Pages

Do not introduce React, Vue, Tailwind, Astro, Next.js, Vite, or any other framework/tooling unless the user explicitly asks for that migration.

## Files That Matter Most

- [index.html](./index.html): landing page
- [styles.css](./styles.css): shared site stylesheet
- [knowitpad/knowitpad.html](./knowitpad/knowitpad.html): Knowitpad product page
- [knowitpad/privacy.html](./knowitpad/privacy.html): Knowitpad privacy page
- [twenty48/twenty48.html](./twenty48/twenty48.html): Twenty48 product page
- [twenty48/privacy.html](./twenty48/privacy.html): Twenty48 privacy page
- [CCSquare.png](./CCSquare.png): shared brand icon
- [knowitpad/icon.png](./knowitpad/icon.png): Knowitpad icon
- [twenty48/icon.png](./twenty48/icon.png): Twenty48 icon

## Working Style

- Make tightly scoped edits.
- Reuse existing patterns before inventing new ones.
- Keep markup readable and hand-editable.
- Prefer editing `styles.css` over scattering inline styles.
- If a style change affects multiple pages, update the shared stylesheet instead of patching each file separately.
- Keep class names simple and consistent with the current naming style.
- Avoid “agent-y” boilerplate comments or generated filler copy.

## Hard Constraints

- Do not break relative links.
- Do not move files unless explicitly asked.
- Do not change page URLs casually. These paths matter for GitHub Pages:
  - `/index.html`
  - `/knowitpad/knowitpad.html`
  - `/knowitpad/privacy.html`
  - `/twenty48/twenty48.html`
  - `/twenty48/privacy.html`
- Do not convert the project into a SPA.
- Do not add a dependency on server-side rendering or a runtime.

## Theme Rules

Theme persistence is already implemented and must keep working.

- Shared localStorage key: `carrot-core-creations-theme`
- Theme toggle exists on all current pages
- Theme is applied by setting `data-theme` on `document.documentElement`

If you touch theme behavior:

- Keep the storage key unchanged unless the user explicitly requests a reset/migration
- Keep dark/light behavior consistent across all pages
- Do not reintroduce per-page theme keys

## Styling Rules

- Shared CSS belongs in [styles.css](./styles.css)
- `body.site-page` is used for the landing page and product pages
- `body.policy-page` is used for the privacy pages
- The footer is intentionally standardized and centered across the site

When editing styles:

- Prefer extending the current system over adding one-off overrides
- Preserve the warm palette, soft glass surfaces, rounded corners, and restrained motion unless asked otherwise
- Keep mobile behavior intact

## Navigation Rules

Navigation must remain obvious and functional.

Current expectations:

- Product pages have a `Home` button in the top bar
- Privacy pages have top-bar navigation back to `Home` and their app page
- Footer is brand-only and should stay visually identical across pages unless asked to change

After any navigation-related edit, manually re-check:

- `index.html -> product pages`
- `product page -> privacy`
- `product page -> home`
- `privacy -> home`
- `privacy -> app page`

## Content Rules

- Keep product-specific content on the corresponding product pages
- Keep the landing page focused on overview and discovery
- The privacy pages are currently duplicated on purpose and may diverge later
- Do not “deduplicate” privacy content into a shared include system unless requested

## Validation

There is no automated test suite, so validate with lightweight manual checks.

Preferred local preview:

```sh
python3 -m http.server 8000
```

Then verify relevant pages load:

- `http://127.0.0.1:8000/index.html`
- `http://127.0.0.1:8000/knowitpad/knowitpad.html`
- `http://127.0.0.1:8000/knowitpad/privacy.html`
- `http://127.0.0.1:8000/twenty48/twenty48.html`
- `http://127.0.0.1:8000/twenty48/privacy.html`

Minimum validation after edits:

1. Check that edited pages return `200`
2. Check that image paths still resolve
3. Check that the theme toggle still changes state
4. Check that navigation links still point to the right relative paths

## Change Strategy

When asked for a visual/content tweak:

1. Inspect the affected page and shared stylesheet
2. Decide whether the change is local or shared
3. Apply the smallest clean patch
4. Validate the affected routes
5. Summarize what changed and any residual risks

## Things Qwen Should Not “Improve” Without Permission

- Rewording all copy site-wide
- Changing the brand voice
- Reorganizing the folder structure
- Replacing hand-written HTML with generated components
- Changing image filenames/paths
- Removing the separate product/privacy pages
- Adding analytics, trackers, or third-party scripts

## If You Need To Add New Pages

- Keep them as plain HTML files
- Use the shared [styles.css](./styles.css)
- Match the current theme toggle behavior
- Use correct relative asset paths from the new file location
- Keep footer treatment consistent with the rest of the site

## Handoff Expectation

If you are the incoming agent, assume this repo is intentionally simple.
Your job is not to “modernize” it by default.
Your job is to keep it clean, correct, visually consistent, and easy for the owner to maintain by hand.
