const root = document.documentElement;
const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');
const heroVideo = document.querySelector('.hero__video');
const heroMobileQuery = window.matchMedia('(max-width: 47.99rem)');
const heroReducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const dataConnection = navigator.connection;

if (heroVideo) {
  let mediaVersion = 0;
  let mediaEvents = null;
  let frameCallbackId = null;

  const showPoster = () => heroVideo.classList.remove('is-playing');

  const updateHeroVideo = () => {
    const shouldPlay = !heroReducedMotionQuery.matches && !dataConnection?.saveData;
    const source = shouldPlay
      ? `assets/hero/hero-${heroMobileQuery.matches ? 'mobile' : 'desktop'}.mp4`
      : '';

    if (heroVideo.getAttribute('src') === source) return;

    const version = ++mediaVersion;
    mediaEvents?.abort();
    if (frameCallbackId !== null) {
      heroVideo.cancelVideoFrameCallback?.(frameCallbackId);
      frameCallbackId = null;
    }
    showPoster();
    heroVideo.pause();
    heroVideo.removeAttribute('src');

    if (!source) {
      heroVideo.load();
      return;
    }

    let hasFrame = false;
    let hasStartedPlayback = false;
    let failureReported = false;
    const showPosterOnFailure = (error) => {
      if (version !== mediaVersion) return;
      showPoster();
      if (!failureReported) {
        console.warn('Hero video unavailable; showing poster.', error);
        failureReported = true;
      }
    };
    const revealVideoIfReady = () => {
      if (
        version !== mediaVersion ||
        heroVideo.getAttribute('src') !== source ||
        heroVideo.classList.contains('is-playing') ||
        heroVideo.error ||
        heroVideo.paused ||
        heroVideo.readyState < HTMLMediaElement.HAVE_CURRENT_DATA ||
        !hasFrame ||
        !hasStartedPlayback
      ) return;

      heroVideo.classList.add('is-playing');
    };

    mediaEvents = new AbortController();
    const { signal } = mediaEvents;
    heroVideo.addEventListener('loadeddata', () => {
      hasFrame = true;
      revealVideoIfReady();
    }, { signal });
    heroVideo.addEventListener('playing', () => {
      hasStartedPlayback = true;
      revealVideoIfReady();
    }, { signal });
    heroVideo.addEventListener('timeupdate', () => {
      if (heroVideo.currentTime > 0) {
        hasFrame = true;
        hasStartedPlayback = true;
      }
      revealVideoIfReady();
    }, { signal });
    heroVideo.addEventListener('error', () => {
      showPosterOnFailure(heroVideo.error);
    }, { signal });

    heroVideo.muted = true;
    heroVideo.src = source;

    if ('requestVideoFrameCallback' in heroVideo) {
      frameCallbackId = heroVideo.requestVideoFrameCallback(() => {
        if (version !== mediaVersion) return;
        frameCallbackId = null;
        hasFrame = true;
        revealVideoIfReady();
      });
    }

    const playRequest = heroVideo.play();
    playRequest?.then(() => {
      hasStartedPlayback = true;
      revealVideoIfReady();
    }).catch((error) => {
      showPosterOnFailure(error);
    });
  };

  heroMobileQuery.addEventListener('change', updateHeroVideo);
  heroReducedMotionQuery.addEventListener('change', updateHeroVideo);
  dataConnection?.addEventListener?.('change', updateHeroVideo);
  updateHeroVideo();
}

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
