import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import path from 'path';
import meta from './build-meta.js';
import { CV_DATA } from './src/content-data.js';
import { SIDEBAR_ICONS, CARD_ICONS } from './src/icons.js';

const hreflangTags = meta.languages
  .map(lang => `  <link rel="alternate" hreflang="${lang}" href="${meta.baseUrl}${meta[lang].canonicalPath}" />`)
  .concat([`  <link rel="alternate" hreflang="x-default" href="${meta.baseUrl}" />`])
  .join('\n');

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProd ? '/info/' : '/',
  root: 'src',
  publicDir: path.resolve(process.cwd(), 'public'),
  build: {
    outDir: path.resolve(process.cwd(), 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(process.cwd(), 'src/index.html'),
        ru:   path.resolve(process.cwd(), 'src/ru/index.html'),
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: path.resolve(process.cwd(), 'src/partials'),
      context(pagePath) {
        const isRu = pagePath.startsWith('/ru/');
        const lang = isRu ? 'ru' : 'en';
        const cfg = meta[lang];
        const data = CV_DATA[lang];
        return {
          lang:           cfg.lang,
          title:          cfg.title,
          description:    cfg.description,
          keywords:       cfg.keywords,
          canonicalUrl:   meta.baseUrl + cfg.canonicalPath,
          ogLocale:       cfg.locale,
          ogLocaleAlt:    cfg.alternateLocale,
          hreflangTags,
          jsonLd:         JSON.stringify(cfg.jsonLd, null, 2),
          noscript:       cfg.noscript,
          // Content data
          name:           data.name,
          role:           data.title,
          subtitle:       data.subtitle,
          tagline:        data.tagline,
          summary:        data.summary,
          stats:          data.stats,
          experience:     data.experience,
          skills:         data.skills,
          education:      data.education,
          languages:      data.languages,
          contacts:       data.contacts,
          nav:            data.nav,
          ui:             data.ui,
          year:           new Date().getFullYear(),
          switchLangHref: isRu ? '../' : './ru/',
        };
      },
      helpers: {
        // Return raw SVG (called with {{{svgIcon "name"}}} triple-stache)
        svgIcon(name) {
          return SIDEBAR_ICONS[name] || '';
        },
        cardIcon(name) {
          return CARD_ICONS[name] || '';
        },
      },
    }),
  ],
});
