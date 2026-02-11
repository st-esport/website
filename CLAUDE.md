# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Dev server at localhost:3000
npm run build        # Production build
npm run preview      # Build + Cloudflare Worker local preview
npm run deploy       # Build + deploy to Cloudflare Workers
npm run cf-typegen   # Regenerate Cloudflare Worker types
```

Lint (CI enforces zero warnings): `npx eslint . --no-fix --max-warnings=0`

No test suite exists.

## Architecture

Nuxt 4 + Vue 3 site for Støvring eSport (Danish youth gaming org). All user-facing content is in Danish. Deployed to Cloudflare Workers via Nitro `cloudflare_module` preset.

### Gotcha: Manual Routing

Nuxt's automatic file-based routing is **not used**. All routes are manually defined in `app/router.options.ts`. Adding a page means:
1. Create the `.vue` file in `app/pages/`
2. Import it and add the route object in `router.options.ts`

Forgetting step 2 means the page is unreachable.

### Styling Stack

UIKit 3 is the CSS framework, loaded via CDN `<script>` tags in `nuxt.config.ts` (not as a Nuxt module for JS — the `@fedorae/nuxt-uikit` package provides the SCSS source). The SCSS theming layer is in `app/assets/scss/theme.scss` which:
- Overrides UIKit SCSS variables (lines 1–107) **before** importing UIKit's SCSS source
- Defines all custom component classes (`.hero`, `.game-card`, `.board-card`, `.btn`, `.site-header`, etc.) after the import

Color palette: near-black bg `#0a0a0a`, yellow/amber accent `#f59e0b`, text `#d4d4d8`, Inter font. CSS custom property `--bg-darker` is used inline in templates for alternate section backgrounds.

UIKit utility classes (e.g. `uk-container`, `uk-dropdown`, `uk-nav`) are used in templates alongside custom classes. Dropdowns use UIKit's `uk-dropdown` attribute directive with `mode: click`.

### Page Patterns

- **Home** (`Home.vue`): Unique layout — full hero, features grid, games grid, CTA. Does not use `SiteContainer`.
- **Team pages** (`Fortnite.vue`, `Minecraft.vue`, `CounterStrike.vue`): Simple — wrap content in `<SiteContainer title="..." photo="...">`.
- **Info pages** (`Board.vue`, `Statutes.vue`, `RulesOfOrder.vue`): Use custom layout structures (board grid, statutes-content div).
- **`SiteContainer`** component: Takes optional `title` and `photo` props. Shows a hero banner if `photo` is provided, otherwise a plain dark header. Wraps slot content in `.content-section`.

### Layout

`app/layouts/default.vue` renders the sticky header (with mobile hamburger toggle at 768px breakpoint), `<slot/>` for page content, and footer. Navigation dropdowns for "Hold" (teams) and "Om os" (about) are hardcoded here.

### Config

`nuxt.config.ts` contains SEO metadata, JSON-LD structured data (SportsOrganization schema), Google Fonts link, and UIKit CDN script tags — all in `app.head`. If adding new pages that should appear in search, update the JSON-LD `itemListElement` array.

Static assets (banners, board photos, logo) live in `public/`.
