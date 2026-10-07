const root = document.documentElement;
const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');

requestAnimationFrame(() => {
  root.classList.add('is-ready');
});

let scrollFrame = null;

const updateHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 18);
  scrollFrame = null;
};

const handleScroll = () => {
  if (scrollFrame === null) {
    scrollFrame = requestAnimationFrame(updateHeader);
  }
};

updateHeader();
window.addEventListener('scroll', handleScroll, { passive: true });

const closeNavigation = () => {
  if (!nav || !navToggle) return;

  nav.classList.remove('is-open');
  header?.classList.remove('is-menu-open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Abrir navegación');
};

navToggle?.addEventListener('click', () => {
  const willOpen = navToggle.getAttribute('aria-expanded') !== 'true';

  nav?.classList.toggle('is-open', willOpen);
  header?.classList.toggle('is-menu-open', willOpen);
  navToggle.setAttribute('aria-expanded', String(willOpen));
  navToggle.setAttribute('aria-label', willOpen ? 'Cerrar navegación' : 'Abrir navegación');
});

nav?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeNavigation();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navToggle?.getAttribute('aria-expanded') === 'true') {
    closeNavigation();
    navToggle.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    closeNavigation();
  }
});
