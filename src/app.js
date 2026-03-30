/* ─────────────────────────────────────────────────────────────
   State
───────────────────────────────────────────────────────────── */
let currentTheme = localStorage.getItem('cv-theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

/* ─────────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────────── */
const $ = id => document.getElementById(id);

function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  $('themeToggle').checked = (theme === 'dark');
}

/* ─────────────────────────────────────────────────────────────
   Active nav on scroll
───────────────────────────────────────────────────────────── */
function updateActiveNav() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const sectionId = 'section-' + link.dataset.section;
    const el = document.getElementById(sectionId);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom > 80) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

const mainEl = $('mainContent');
mainEl.addEventListener('scroll', updateActiveNav, { passive: true });
window.addEventListener('scroll', updateActiveNav, { passive: true });

/* ─────────────────────────────────────────────────────────────
   Toggle handlers
───────────────────────────────────────────────────────────── */
function toggleLang() {
  const hash = window.location.hash;
  const isRu = window.location.pathname.includes('/ru');
  window.location.href = isRu ? '../' + hash : './ru/' + hash;
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('cv-theme', currentTheme);
  applyTheme(currentTheme);
}

$('langBtn').addEventListener('click', toggleLang);
$('langBtnMobile').addEventListener('click', toggleLang);
$('themeToggle').addEventListener('change', toggleTheme);
$('themeBtnMobile').addEventListener('click', () => {
  toggleTheme();
});

$('ctaBtnAbout').addEventListener('click', () => {
  const el = $('section-contact');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* ─────────────────────────────────────────────────────────────
   Mobile sidebar
───────────────────────────────────────────────────────────── */
const sidebar   = $('sidebar');
const overlay   = $('mobileOverlay');
const menuBtn   = $('menuBtn');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('visible');
  overlay.style.pointerEvents = 'auto';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
  overlay.style.pointerEvents = 'none';
}

menuBtn.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});

overlay.addEventListener('click', closeSidebar);

document.addEventListener('click', e => {
  if (e.target.closest('.nav-link')) {
    closeSidebar();
  }
});

/* ─────────────────────────────────────────────────────────────
   Init
───────────────────────────────────────────────────────────── */
applyTheme(currentTheme);
updateActiveNav();

/* ─────────────────────────────────────────────────────────────
   Scroll animations (IntersectionObserver)
───────────────────────────────────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.section').forEach(s => observer.observe(s));

/* ─────────────────────────────────────────────────────────────
   Back to top button
───────────────────────────────────────────────────────────── */
const backToTopBtn = $('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
}, { passive: true });

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
