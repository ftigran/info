# CV Bio Web Page — Agent Instructions

This project generates a personal bio web page from Tigran Frangyan's CV PDF.

## File Structure

```
cv/
├── assets/      ← Static files (CV PDF, avatar photo)
│   ├── Tigran_Frangyan_Senior_Frontend_Developer.pdf
│   └── avatar.png
├── content.js   ← SINGLE SOURCE OF TRUTH for all bio content (bilingual EN/RU)
├── index.html   ← Bio page (Fixed Sidebar layout)
└── CLAUDE.md    ← This file
```

`index.html` loads `content.js` via `<script src="./content.js"></script>` and reads from the global `CV_DATA` object. **To update content, only edit `content.js` — the HTML page updates automatically.**

---

## How to Update Content from a New CV PDF

When the user provides an updated CV PDF:

1. **Use the `/pdf` skill** to extract text from the PDF file in `assets/`.

2. **Update `content.js`** — edit ONLY the `CV_DATA` object. Keep the exact same structure:

```js
const CV_DATA = {
  en: {
    name, title, subtitle, tagline, summary,
    stats: [ { value, label }, ... ],          // 4 items: years, users, ci/cd stat, bug stat
    experience: [                               // array, most recent first
      { company, role, period, description, highlights: [...] }
    ],
    skills: {                                   // plain object, keys are category names
      "Core": [...],
      "State Management": [...],
      // ...
    },
    education: { university, degree, period },  // single object, NOT array
    languages: [ { lang, level }, ... ],        // note: "lang" key, not "name"
    contacts: {                                 // object, NOT array
      email: "...",
      github:   { label, url },
      linkedin: { label, url },
      telegram: { label, url }
    },
    nav: { about, experience, skills, education, contact },
    ui: {
      currentlyAt, openToWork, downloadCV,
      switchLang,                               // opposite language code shown on button
      switchTheme: { light, dark },
      language, darkMode, languages             // sidebar toggle labels (v2)
    }
  },
  ru: { /* same structure, all strings in Russian */ }
};
```

3. **Do NOT modify any `.html` files** unless the layout itself needs to change.

4. **Verify** by opening `index.html` in a browser (`file://`) and checking:
   - Language toggle switches all text EN ↔ RU
   - Theme toggle works; default follows system `prefers-color-scheme`
   - All sections render correctly (experience timeline, skills pills, education, contacts)

---

## Key Data Contract Notes

- `skills` is a **plain object** `{ categoryName: [skill1, skill2] }` — not an array
- `education` is a **single object** — not an array
- `languages[].lang` — the key is `lang`, not `name`
- `contacts` is a **plain object** — not an array
- Experience `highlights` — the key is `highlights`, not `bullets` or `tags`
