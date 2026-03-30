# Personal CV

Bilingual (EN/RU) personal CV page. All content is pre-rendered at build time (SSG) via Vite + Handlebars. Client-side JS handles only interactivity.

**Live:** https://ftigran.github.io/info/

## Stack

- **Vite** + **vite-plugin-handlebars** — static site generation
- **Handlebars** — HTML templating with content data injected at build time
- **GitHub Actions** — auto-deploy to GitHub Pages on push to `main`
- **sharp** — avatar resize & WebP conversion

## Commands

```bash
npm run dev              # dev server at localhost:3200
npm run build            # production build → dist/
npm run optimize-images  # resize avatar-source.png → avatar.png + avatar.webp
```

## Updating content

Edit **`src/content-data.js`** — the single source of truth for all CV text (both languages).
Update **`build-meta.js`** if the SEO title or description changes.
Then push to `main` — GitHub Actions builds and deploys automatically.

## Updating the avatar

1. Replace `public/assets/avatar-source.png` with the new photo (any size)
2. Run `npm run optimize-images` — generates 160×160 `avatar.png` + `avatar.webp`
3. Commit `avatar.png` and `avatar.webp`

`avatar-source.png` is gitignored (too large), the optimized files are committed.

## File structure

```
src/
  content-data.js     ← all CV text (EN + RU)
  icons.js            ← SVG icons
  app.js              ← theme, language, scroll, sidebar
  styles.css          ← all styles
  partials/page.html  ← Handlebars template
  index.html          ← EN entry point
  ru/index.html       ← RU entry point
build-meta.js         ← SEO metadata per language
vite.config.js        ← build config + Handlebars context
scripts/
  optimize-images.js  ← avatar optimization (sharp)
.github/workflows/
  deploy.yml          ← CI/CD
```
