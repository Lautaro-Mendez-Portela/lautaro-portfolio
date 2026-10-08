(() => {
  const motionPreferences = window.portfolioMotion ?? (() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    return {
      reducedMotionQuery,
      isReduced: () => reducedMotionQuery.matches,
      subscribe: (callback) => {
        reducedMotionQuery.addEventListener?.('change', callback);
        return () => reducedMotionQuery.removeEventListener?.('change', callback);
      },
    };
  })();

  window.portfolioMotion = motionPreferences;

  const processTimelineElement = document.querySelector('[data-reveal="timeline"]');
  const gsap = window.gsap;

  if (!processTimelineElement || !gsap) return;

  const steps = [...processTimelineElement.querySelectorAll('.process-step')];
  const segmentSteps = steps.slice(0, -1);
  const numbers = steps.map((step) => step.querySelector('.process-step__number'));
  const dots = steps.map((step) => step.querySelector('.process-step__dot'));
  const mobileQuery = window.matchMedia('(max-width: 47.99rem)');

  const checkpoints = [0, 2.347, 4.693, 7.04];
  const completeAt = 7.52;
  const resetAt = 7.84;
  const cycleDuration = 8;
  const inactiveNumber = '#76767c';
  const activeNumber = '#f5f5f2';
  const inactiveDot = '#85858b';
  const accent = '#69c6ff';
  const ground = '#050505';

  let processAnimation = null;
  let isInViewport = false;

  const setStaticState = () => {
    gsap.set(processTimelineElement, {
      '--process-progress-opacity': 1,
      '--process-progress-x': 1,
    });
    gsap.set(segmentSteps, {
      '--process-segment-opacity': 1,
      '--process-segment-progress': 1,
    });
    gsap.set(numbers, { color: '#e8e8e6', textShadow: 'none' });
    gsap.set(dots, {
      backgroundColor: accent,
      borderColor: accent,
      boxShadow: '0 0 0 3px rgba(105, 198, 255, 0.12)',
    });
  };

  const setAnimatedStartState = () => {
    gsap.set(processTimelineElement, {
      '--process-progress-opacity': 1,
      '--process-progress-x': 0,
    });
    gsap.set(segmentSteps, {
      '--process-segment-opacity': 1,
      '--process-segment-progress': 0,
    });
    gsap.set(numbers, { color: inactiveNumber, textShadow: 'none' });
    gsap.set(dots, {
      backgroundColor: ground,
      borderColor: inactiveDot,
      boxShadow: 'none',
    });
  };

  const activateStep = (timeline, index, position) => {
    timeline.to(
      numbers[index],
      {
        color: activeNumber,
        textShadow: '0 0 16px rgba(105, 198, 255, 0.38)',
        duration: 0.12,
        ease: 'power1.out',
      },
      position,
    );
    timeline.to(
      dots[index],
      {
        backgroundColor: accent,
        borderColor: accent,
        boxShadow: '0 0 0 3px rgba(105, 198, 255, 0.12)',
        duration: 0.12,
        ease: 'power1.out',
      },
      position,
    );
  };

  const buildProcessAnimation = () => {
    processAnimation?.kill();
    setAnimatedStartState();

    const isMobile = mobileQuery.matches;
    const timeline = gsap.timeline({ id: 'processTimeline', paused: true, repeat: -1 });

    timeline.set(
      processTimelineElement,
      { '--process-progress-opacity': 1, '--process-progress-x': 0 },
      0,
    );
    timeline.set(
      segmentSteps,
      { '--process-segment-opacity': 1, '--process-segment-progress': 0 },
      0,
    );

    if (isMobile) {
      segmentSteps.forEach((step, index) => {
        timeline.to(
          step,
          {
            '--process-segment-progress': 1,
            duration: checkpoints[index + 1] - checkpoints[index],
            ease: 'none',
          },
          checkpoints[index],
        );
      });
    } else {
      timeline.to(
        processTimelineElement,
        { '--process-progress-x': 1, duration: checkpoints[3], ease: 'none' },
        0,
      );
    }

    checkpoints.forEach((position, index) => activateStep(timeline, index, position));

    timeline.to(
      numbers,
      { color: inactiveNumber, textShadow: 'none', duration: 0.24, ease: 'none' },
      completeAt,
    );
    timeline.to(
      dots,
      {
        backgroundColor: ground,
        borderColor: inactiveDot,
        boxShadow: 'none',
        duration: 0.24,
        ease: 'none',
      },
      completeAt,
    );

    if (isMobile) {
      timeline.to(
        segmentSteps,
        { '--process-segment-opacity': 0, duration: 0.32, ease: 'none' },
        completeAt,
      );
      timeline.set(
        segmentSteps,
        { '--process-segment-progress': 0, '--process-segment-opacity': 0 },
        resetAt,
      );
    } else {
      timeline.to(
        processTimelineElement,
        { '--process-progress-opacity': 0, duration: 0.32, ease: 'none' },
        completeAt,
      );
      timeline.set(
        processTimelineElement,
        { '--process-progress-x': 0, '--process-progress-opacity': 0 },
        resetAt,
      );
    }

    timeline.to({}, { duration: cycleDuration - resetAt }, resetAt);
    processAnimation = timeline;

    if (isInViewport && !document.hidden) {
      processAnimation.play();
    }
  };

  const syncPlayback = () => {
    if (!processAnimation) return;

    if (isInViewport && !document.hidden && !motionPreferences.isReduced()) {
      processAnimation.resume();
    } else {
      processAnimation.pause();
    }
  };

  const refreshMotion = () => {
    if (motionPreferences.isReduced()) {
      processAnimation?.kill();
      processAnimation = null;
      setStaticState();
      return;
    }

    buildProcessAnimation();
    syncPlayback();
  };

  const processObserver = new IntersectionObserver(
    ([entry]) => {
      isInViewport = entry.isIntersecting;
      syncPlayback();
    },
    { threshold: 0.08 },
  );

  const handleVisibilityChange = () => syncPlayback();
  const handleBreakpointChange = () => {
    if (!motionPreferences.isReduced()) buildProcessAnimation();
  };
  const unsubscribeReducedMotion = motionPreferences.subscribe(refreshMotion);

  processObserver.observe(processTimelineElement);
  document.addEventListener('visibilitychange', handleVisibilityChange);
  mobileQuery.addEventListener?.('change', handleBreakpointChange);
  refreshMotion();

  window.addEventListener(
    'pagehide',
    () => {
      processAnimation?.kill();
      processObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      mobileQuery.removeEventListener?.('change', handleBreakpointChange);
      unsubscribeReducedMotion();
    },
    { once: true },
  );
})();
