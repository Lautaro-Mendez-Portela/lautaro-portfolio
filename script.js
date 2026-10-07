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

const revealItems = [...document.querySelectorAll('[data-reveal]')];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const revealAll = () => {
  revealItems.forEach((item) => item.classList.add('is-visible'));
};

if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
  revealAll();
} else {
  root.classList.add('reveal-enabled');

  let revealFrame = null;
  let revealObserver = null;

  const revealItem = (item) => {
    if (item.classList.contains('is-visible')) return;

    item.classList.add('is-visible');
    revealObserver?.unobserve(item);
  };

  const revealVisibleItems = () => {
    const triggerLine = window.innerHeight * 0.92;

    revealItems.forEach((item) => {
      if (item.classList.contains('is-visible')) return;

      const bounds = item.getBoundingClientRect();

      if (bounds.top <= triggerLine) {
        revealItem(item);
      }
    });

    revealFrame = null;
  };

  const queueRevealCheck = () => {
    if (revealFrame === null) {
      revealFrame = requestAnimationFrame(revealVisibleItems);
    }
  };

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        revealItem(entry.target);
      });
    },
    {
      rootMargin: '0px 0px -5% 0px',
      threshold: 0.05,
    },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
  requestAnimationFrame(revealVisibleItems);

  window.addEventListener('scroll', queueRevealCheck, { passive: true });
  window.addEventListener('resize', queueRevealCheck);
}

const processTimeline = document.querySelector('[data-reveal="timeline"]');

if (processTimeline && !prefersReducedMotion.matches && 'IntersectionObserver' in window) {
  const processLoopObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !document.hidden) {
        processTimeline.classList.add('is-looping');
        processTimeline.classList.remove('is-loop-paused');
        return;
      }

      if (processTimeline.classList.contains('is-looping')) {
        processTimeline.classList.add('is-loop-paused');
      }
    },
    { threshold: 0.08 },
  );

  processLoopObserver.observe(processTimeline);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      processTimeline.classList.add('is-loop-paused');
      return;
    }

    const bounds = processTimeline.getBoundingClientRect();
    const isInViewport = bounds.bottom > 0 && bounds.top < window.innerHeight;
    processTimeline.classList.toggle('is-loop-paused', !isInViewport);
  });
}
