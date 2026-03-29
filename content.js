const CV_DATA = {
  en: {
    name: "Tigran Frangyan",
    title: "Senior Frontend Developer",
    subtitle: "Fintech & SaaS · 7+ years · React & TypeScript",
    tagline: "I don't just build features — I challenge requirements, propose UX improvements, and measure outcomes.",
    summary: "Senior Frontend Developer specializing in fintech with 7+ years of experience building complex web applications in React and TypeScript. At Rosbank (Société Générale group), I single-handedly architected and shipped a currency control platform from scratch — replacing 3 legacy systems, unifying workflows for 50+ users, and reducing production bugs by 40%. At T-Bank (40M+ customers), I cut CI/CD build times by 80% and led the Webpack → Vite migration. I thrive in high-ownership environments where I can drive architecture, mentor engineers, and deliver measurable business impact.",
    stats: [
      { value: "7+", label: "Years of experience" },
      { value: "40M+", label: "Users on platform" },
      { value: "80%", label: "CI/CD time cut" },
      { value: "40%", label: "Fewer production bugs" }
    ],
    experience: [
      {
        company: "T-Bank",
        role: "Senior Frontend Developer",
        period: "Jan 2025 — Present",
        description: "A leading digital bank in Eastern Europe with 40M+ customers.",
        highlights: [
          "Slashed CI/CD build times by 80% (hours → minutes), unblocking 3 feature teams.",
          "Led full Webpack → Vite migration — HMR dropped from ~8s to <1s for a 12-person team.",
          "Shipped Sentry integration + Feature Toggles, enabling zero-downtime rollouts.",
          "Mentored 4 junior/mid engineers, conducted 10+ technical interviews.",
          "Proposed UX changes that reduced support tickets for a key onboarding flow."
        ]
      },
      {
        company: "Rosbank (Société Générale Group)",
        role: "Senior Frontend Developer",
        period: "Dec 2022 — Jan 2025 · 2 yrs 2 mos",
        description: "A major universal bank, part of Société Générale international financial group.",
        highlights: [
          "Architected and shipped a currency control platform from scratch (React + TypeScript), acting as de facto frontend tech lead.",
          "Replaced 3 legacy systems with a single unified platform for 50+ currency controllers.",
          "Reduced production bugs by 40% via Feature-Sliced Design + full test coverage (Jest, RTL, Playwright).",
          "Made all key technical decisions: stack, Redux Toolkit + RTK Query, CI config, ADR documentation.",
          "Translated regulatory requirements into intuitive UI workflows with compliance stakeholders."
        ]
      },
      {
        company: "Kameleoon",
        role: "React Developer → Core R&D Team",
        period: "Jun 2021 — Dec 2022 · 1 yr 7 mos",
        description: "International SaaS platform for A/B testing and web personalization.",
        highlights: [
          "Promoted to core R&D team after one year for high code quality and proactive problem-solving.",
          "Built key DevTools components: Monaco Editor-based code editor, visual web builder, Chrome extension.",
          "Implemented custom A/B tests for Toyota, Renault — directly impacting conversion rates.",
          "Independently scoped requirements with a distributed international team."
        ]
      },
      {
        company: "Atoms Digital Agency",
        role: "Junior → Mid Frontend Developer",
        period: "Feb 2019 — Jun 2021 · 2 yrs 5 mos",
        description: "",
        highlights: [
          "Built responsive, pixel-perfect promotional sites for federal ad campaigns (React, Angular).",
          "Implemented file uploads, animations, REST API integrations.",
          "Grew from junior to independent contributor."
        ]
      }
    ],
    skills: {
      "Core": ["React", "TypeScript", "JavaScript (ES6+)", "Next.js"],
      "State Management": ["Redux Toolkit", "RTK Query", "Effector", "MobX", "TanStack Query"],
      "Testing": ["Jest", "Vitest", "React Testing Library", "Playwright"],
      "Architecture": ["Feature-Sliced Design", "Micro-frontends", "Module Federation"],
      "DevOps & DX": ["Vite", "Webpack", "Docker", "CI/CD", "Sentry", "Feature Flags"],
      "APIs": ["REST API", "GraphQL", "WebSockets", "WebRTC"],
      "Styling": ["CSS3", "Tailwind CSS", "Pixel-perfect layout"],
      "Familiar": ["Node.js", "SQL", "Go", "Vue", "Angular"]
    },
    education: {
      university: "Don State Technical University",
      degree: "Bachelor of Science in Computer Science",
      period: "2016 — 2020"
    },
    languages: [
      { lang: "English", level: "Professional working proficiency" },
      { lang: "Russian", level: "Native" },
      { lang: "Armenian", level: "Native" }
    ],
    contacts: {
      email: "ftigran1@gmail.com",
      github: { label: "github.com/ftigran", url: "https://github.com/ftigran" },
      linkedin: { label: "linkedin.com/in/ftigran", url: "https://linkedin.com/in/ftigran" },
      telegram: { label: "t.me/ftigran", url: "https://t.me/ftigran" }
    },
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact"
    },
    ui: {
      currentlyAt: "Currently at",
      openToWork: "Open to work",
      downloadCV: "Download CV",
      switchLang: "RU",
      switchTheme: { light: "Light", dark: "Dark" },
      language: "Language",
      darkMode: "Dark mode",
      languages: "Languages",
      getInTouch: "Get in Touch",
      contactCTA: "Interested in working together? Feel free to reach out."
    }
  },

  ru: {
    name: "Тигран Франгян",
    title: "Senior Frontend Developer",
    subtitle: "Fintech & SaaS · 7+ лет · React & TypeScript",
    tagline: "Я не просто строю фичи — я оспариваю требования, предлагаю UX-улучшения и измеряю результат.",
    summary: "Senior Frontend Developer, специализируюсь на финтехе. 7+ лет опыта разработки сложных веб-приложений на React и TypeScript. В Росбанке (группа Société Générale) в одиночку спроектировал и запустил платформу валютного контроля с нуля — заменил 3 legacy-системы, упростил работу 50+ пользователей и снизил количество production-багов на 40%. В Т-Банке (40M+ клиентов) ускорил CI/CD на 80% и руководил миграцией Webpack → Vite.",
    stats: [
      { value: "7+", label: "Лет опыта" },
      { value: "40M+", label: "Пользователей платформы" },
      { value: "80%", label: "Ускорение CI/CD" },
      { value: "40%", label: "Снижение production-багов" }
    ],
    experience: [
      {
        company: "Т-Банк",
        role: "Senior Frontend Developer",
        period: "Янв 2025 — наст. время",
        description: "Ведущий цифровой банк Восточной Европы с 40M+ клиентов.",
        highlights: [
          "Ускорил CI/CD на 80% (часы → минуты), разблокировав 3 продуктовые команды.",
          "Руководил полной миграцией Webpack → Vite — HMR упал с ~8с до <1с для команды из 12 человек.",
          "Внедрил Sentry + систему Feature Toggles, обеспечив zero-downtime деплои.",
          "Менторил 4 junior/mid инженеров, провёл 10+ технических интервью.",
          "Предложил UX-изменения, снизившие количество тикетов поддержки по ключевому онбордингу."
        ]
      },
      {
        company: "Росбанк (группа Société Générale)",
        role: "Senior Frontend Developer",
        period: "Дек 2022 — Янв 2025 · 2 года 2 мес",
        description: "Крупный универсальный банк, часть международной группы Société Générale.",
        highlights: [
          "Спроектировал и запустил платформу валютного контроля с нуля (React + TypeScript), де-факто tech lead фронтенда.",
          "Заменил 3 legacy-системы единой платформой для 50+ валютных контролёров.",
          "Снизил количество production-багов на 40% через Feature-Sliced Design + покрытие тестами (Jest, RTL, Playwright).",
          "Принимал все ключевые технические решения: стек, Redux Toolkit + RTK Query, CI-конфиг, документация ADR.",
          "Переводил регуляторные требования в интуитивные UI-сценарии совместно с compliance-командой."
        ]
      },
      {
        company: "Kameleoon",
        role: "React Developer → Core R&D Team",
        period: "Июн 2021 — Дек 2022 · 1 год 7 мес",
        description: "Международная SaaS-платформа для A/B-тестирования и персонализации.",
        highlights: [
          "Переведён в core R&D через год за высокое качество кода и проактивность.",
          "Разработал ключевые компоненты DevTools: редактор на Monaco Editor, визуальный web-builder, Chrome extension.",
          "Реализовал A/B-тесты для Toyota, Renault — прямое влияние на конверсию.",
          "Самостоятельно уточнял требования с распределённой международной командой."
        ]
      },
      {
        company: "Atoms Digital Agency",
        role: "Junior → Mid Frontend Developer",
        period: "Фев 2019 — Июн 2021 · 2 года 5 мес",
        description: "",
        highlights: [
          "Вёрстка адаптивных промо-сайтов для федеральных рекламных кампаний (React, Angular).",
          "Реализовал загрузку файлов, анимации, интеграции с REST API.",
          "Вырос от junior до самостоятельного разработчика."
        ]
      }
    ],
    skills: {
      "Основное": ["React", "TypeScript", "JavaScript (ES6+)", "Next.js"],
      "Стейт-менеджмент": ["Redux Toolkit", "RTK Query", "Effector", "MobX", "TanStack Query"],
      "Тестирование": ["Jest", "Vitest", "React Testing Library", "Playwright"],
      "Архитектура": ["Feature-Sliced Design", "Micro-frontends", "Module Federation"],
      "DevOps & DX": ["Vite", "Webpack", "Docker", "CI/CD", "Sentry", "Feature Flags"],
      "API": ["REST API", "GraphQL", "WebSockets", "WebRTC"],
      "Стили": ["CSS3", "Tailwind CSS", "Pixel-perfect"],
      "Знаком": ["Node.js", "SQL", "Go", "Vue", "Angular"]
    },
    education: {
      university: "Донской государственный технический университет",
      degree: "Бакалавр по направлению «Прикладная информатика»",
      period: "2016 — 2020"
    },
    languages: [
      { lang: "Английский", level: "Профессиональный рабочий уровень" },
      { lang: "Русский", level: "Родной" },
      { lang: "Армянский", level: "Родной" }
    ],
    contacts: {
      email: "ftigran1@gmail.com",
      github: { label: "github.com/ftigran", url: "https://github.com/ftigran" },
      linkedin: { label: "linkedin.com/in/ftigran", url: "https://linkedin.com/in/ftigran" },
      telegram: { label: "t.me/ftigran", url: "https://t.me/ftigran" }
    },
    nav: {
      about: "О себе",
      experience: "Опыт",
      skills: "Навыки",
      education: "Образование",
      contact: "Контакты"
    },
    ui: {
      currentlyAt: "Сейчас в",
      openToWork: "Открыт к предложениям",
      downloadCV: "Скачать CV",
      switchLang: "EN",
      switchTheme: { light: "Светлая", dark: "Тёмная" },
      language: "Язык",
      darkMode: "Тёмная тема",
      languages: "Языки",
      getInTouch: "Связаться",
      contactCTA: "Хотите работать вместе? Буду рад обсудить."
    }
  }
};
