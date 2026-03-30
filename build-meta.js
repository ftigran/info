const baseUrl = 'https://ftigran.github.io/bio/';

export default {
  baseUrl,
  languages: ['en', 'ru'],
  en: {
    lang: 'en',
    locale: 'en_US',
    alternateLocale: 'ru_RU',
    title: 'Tigran Frangyan — Senior Frontend Developer',
    description: 'Senior Frontend Developer specializing in fintech. 7+ years building complex web apps in React & TypeScript. Currently at T-Bank (40M+ users).',
    keywords: 'frontend developer, React, TypeScript, fintech, senior developer, Tigran Frangyan',
    canonicalPath: '',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Tigran Frangyan',
      jobTitle: 'Senior Frontend Developer',
      url: baseUrl,
      email: 'ftigran1@gmail.com',
      sameAs: [
        'https://github.com/ftigran',
        'https://linkedin.com/in/ftigran',
        'https://t.me/ftigran',
      ],
      knowsAbout: ['React', 'TypeScript', 'JavaScript', 'Frontend Development', 'Fintech'],
      alumniOf: { '@type': 'EducationalOrganization', name: 'Don State Technical University' },
      worksFor: { '@type': 'Organization', name: 'T-Bank' },
    },
    noscript: `
      <h1>Tigran Frangyan</h1>
      <p><strong>Senior Frontend Developer</strong> &middot; Fintech &amp; SaaS &middot; 7+ years &middot; React &amp; TypeScript</p>
      <p>Senior Frontend Developer specializing in fintech with 7+ years of experience building complex web applications in React and TypeScript.</p>
      <h2>Experience</h2>
      <ul>
        <li><strong>T-Bank</strong> &mdash; Senior Frontend Developer (Jan 2025 &ndash; Present)</li>
        <li><strong>Rosbank (Soci&eacute;t&eacute; G&eacute;n&eacute;rale)</strong> &mdash; Senior Frontend Developer (Dec 2022 &ndash; Jan 2025)</li>
        <li><strong>Kameleoon</strong> &mdash; React Developer &rarr; Core R&amp;D (Jun 2021 &ndash; Dec 2022)</li>
        <li><strong>Atoms Digital Agency</strong> &mdash; Junior &rarr; Mid Frontend Developer (Feb 2019 &ndash; Jun 2021)</li>
      </ul>
      <h2>Contact</h2>
      <ul>
        <li>Telegram: <a href="https://t.me/ftigran">t.me/ftigran</a></li>
        <li>Email: <a href="mailto:ftigran1@gmail.com">ftigran1@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/ftigran">github.com/ftigran</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/ftigran">linkedin.com/in/ftigran</a></li>
      </ul>`,
  },
  ru: {
    lang: 'ru',
    locale: 'ru_RU',
    alternateLocale: 'en_US',
    title: 'Тигран Франгян — Senior Frontend Developer',
    description: 'Senior Frontend Developer, специализация — финтех. 7+ лет опыта разработки на React и TypeScript. Сейчас в Т-Банке (40М+ клиентов).',
    keywords: 'frontend разработчик, React, TypeScript, финтех, Тигран Франгян',
    canonicalPath: 'ru/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Тигран Франгян',
      jobTitle: 'Senior Frontend Developer',
      url: baseUrl + 'ru/',
      email: 'ftigran1@gmail.com',
      sameAs: [
        'https://github.com/ftigran',
        'https://linkedin.com/in/ftigran',
        'https://t.me/ftigran',
      ],
      knowsAbout: ['React', 'TypeScript', 'JavaScript', 'Frontend Development', 'Fintech'],
      alumniOf: { '@type': 'EducationalOrganization', name: 'Донской государственный технический университет' },
      worksFor: { '@type': 'Organization', name: 'Т-Банк' },
    },
    noscript: `
      <h1>Тигран Франгян</h1>
      <p><strong>Senior Frontend Developer</strong> &middot; Финтех &amp; SaaS &middot; 7+ лет &middot; React &amp; TypeScript</p>
      <p>Senior Frontend Developer, специализируюсь на финтехе. 7+ лет опыта разработки сложных веб-приложений на React и TypeScript.</p>
      <h2>Опыт</h2>
      <ul>
        <li><strong>Т-Банк</strong> &mdash; Senior Frontend Developer (Янв 2025 &ndash; наст. время)</li>
        <li><strong>Росбанк (Soci&eacute;t&eacute; G&eacute;n&eacute;rale)</strong> &mdash; Senior Frontend Developer (Дек 2022 &ndash; Янв 2025)</li>
        <li><strong>Kameleoon</strong> &mdash; React Developer &rarr; Core R&amp;D (Июн 2021 &ndash; Дек 2022)</li>
        <li><strong>Atoms Digital Agency</strong> &mdash; Junior &rarr; Mid Frontend Developer (Фев 2019 &ndash; Июн 2021)</li>
      </ul>
      <h2>Контакты</h2>
      <ul>
        <li>Telegram: <a href="https://t.me/ftigran">t.me/ftigran</a></li>
        <li>Email: <a href="mailto:ftigran1@gmail.com">ftigran1@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/ftigran">github.com/ftigran</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/ftigran">linkedin.com/in/ftigran</a></li>
      </ul>`,
  },
};
