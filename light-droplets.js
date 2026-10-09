(() => {
  const region = document.querySelector('[data-light-droplets]');
  const canvas = region?.querySelector('.light-droplets__canvas');
  const context = canvas?.getContext('2d', { alpha: true });
  if (!region || !canvas || !context) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const maxFpsInterval = 1000 / 60;
  const maxPixelRatio = 1.5;
  let width = 0;
  let height = 0;
  let streaks = [];
  let frameId = null;
  let lastFrameTime = 0;
  let inView = false;

  const makeStreak = (index, count, initial = false) => {
    const spacing = width / count;
    const trail = 48 + Math.random() * 78;
    return {
      x: spacing * (index + 0.5) + (Math.random() - 0.5) * spacing * 0.45,
      y: initial ? Math.random() * (height + trail) : -trail - Math.random() * height * 0.35,
      trail,
      speed: 15 + Math.random() * 18,
      width: 0.55 + Math.random() * 0.55,
      brightness: 0.68 + Math.random() * 0.32,
      phase: Math.random() * Math.PI * 2,
    };
  };

  const resize = () => {
    const nextWidth = canvas.clientWidth;
    const nextHeight = canvas.clientHeight;
    if (!nextWidth || !nextHeight) return;

    const pixelRatio = Math.min(window.devicePixelRatio || 1, maxPixelRatio);
    const pixelWidth = Math.round(nextWidth * pixelRatio);
    const pixelHeight = Math.round(nextHeight * pixelRatio);
    if (canvas.width === pixelWidth && canvas.height === pixelHeight) return;

    width = nextWidth;
    height = nextHeight;
    canvas.width = pixelWidth;
    canvas.height = pixelHeight;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const count = Math.min(38, Math.max(12, Math.round(width / 42)));
    streaks = Array.from({ length: count }, (_, index) => makeStreak(index, count, true));
  };

  const draw = (time) => {
    frameId = requestAnimationFrame(draw);
    if (time - lastFrameTime < maxFpsInterval - 1) return;

    const elapsed = lastFrameTime ? Math.min((time - lastFrameTime) / 1000, 0.05) : 0;
    lastFrameTime = time;
    context.clearRect(0, 0, width, height);

    streaks.forEach((streak, index) => {
      streak.y += streak.speed * elapsed;
      if (streak.y - streak.trail > height) {
        streaks[index] = makeStreak(index, streaks.length);
        return;
      }

      const shimmer = 0.88 + Math.sin(time * 0.0007 + streak.phase) * 0.12;
      const alpha = streak.brightness * shimmer;
      const gradient = context.createLinearGradient(0, streak.y - streak.trail, 0, streak.y);
      gradient.addColorStop(0, 'rgba(105, 198, 255, 0)');
      gradient.addColorStop(0.62, 'rgba(105, 198, 255, ' + (0.17 * alpha) + ')');
      gradient.addColorStop(1, 'rgba(182, 226, 255, ' + (0.48 * alpha) + ')');

      context.beginPath();
      context.moveTo(streak.x, streak.y - streak.trail);
      context.lineTo(streak.x, streak.y);
      context.lineWidth = streak.width + 2.2;
      context.strokeStyle = 'rgba(105, 198, 255, ' + (0.035 * alpha) + ')';
      context.stroke();

      context.lineWidth = streak.width;
      context.strokeStyle = gradient;
      context.stroke();
    });
  };

  const syncPlayback = () => {
    const shouldRun = inView && !document.hidden && !reducedMotion.matches;
    if (shouldRun && frameId === null) {
      resize();
      lastFrameTime = 0;
      frameId = requestAnimationFrame(draw);
    } else if (!shouldRun && frameId !== null) {
      cancelAnimationFrame(frameId);
      frameId = null;
      lastFrameTime = 0;
      if (reducedMotion.matches) context.clearRect(0, 0, width, height);
    }
  };

  const observer = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    syncPlayback();
  });

  const handleResize = () => resize();
  const handleVisibility = () => syncPlayback();
  const handleMotionChange = () => syncPlayback();

  resize();
  observer.observe(region);
  window.addEventListener('resize', handleResize);
  document.addEventListener('visibilitychange', handleVisibility);
  reducedMotion.addEventListener('change', handleMotionChange);

  window.addEventListener('pagehide', () => {
    if (frameId !== null) cancelAnimationFrame(frameId);
    observer.disconnect();
    window.removeEventListener('resize', handleResize);
    document.removeEventListener('visibilitychange', handleVisibility);
    reducedMotion.removeEventListener('change', handleMotionChange);
  }, { once: true });
})();
