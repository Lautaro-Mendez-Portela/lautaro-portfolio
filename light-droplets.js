(() => {
  const LIGHT_DROPLETS_CONFIG = {
    color: '#A378FF',
    intensity: 2.0,
    lengthScale: 1.5,
    thicknessScale: 1.4,
    sizeScale: 1.7,
    headWidthScale: 2.8,
    tailTaper: 1.0,
    headGlow: 1.0,
  };

  const region = document.querySelector('[data-light-droplets]');
  const canvas = region?.querySelector('.light-droplets__canvas');
  const context = canvas?.getContext('2d', { alpha: true });
  if (!region || !canvas || !context) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const maxFpsInterval = 1000 / 60;
  const maxPixelRatio = 1.5;
  const color = LIGHT_DROPLETS_CONFIG.color;
  const channels = [1, 3, 5].map((start) => parseInt(color.slice(start, start + 2), 16));
  const trailColor = channels.join(', ');
  const highlightColor = channels.map((channel) => Math.round(channel + (255 - channel) * 0.45)).join(', ');
  const rgba = (rgb, alpha) => 'rgba(' + rgb + ', ' + alpha + ')';
  const litAlpha = (baseAlpha) => 1 - Math.pow(1 - Math.min(baseAlpha, 1), LIGHT_DROPLETS_CONFIG.intensity);
  let width = 0;
  let height = 0;
  let streaks = [];
  let frameId = null;
  let lastFrameTime = 0;
  let inView = false;
  let spritePixelRatio = 1;

  const makeStreakSprite = (streak) => {
    const visualTrail = streak.trail * LIGHT_DROPLETS_CONFIG.sizeScale;
    const bodyHalf = streak.width * LIGHT_DROPLETS_CONFIG.thicknessScale * LIGHT_DROPLETS_CONFIG.sizeScale / 2;
    const headHalf = bodyHalf * LIGHT_DROPLETS_CONFIG.headWidthScale;
    const tailHalf = bodyHalf * (1 - Math.min(Math.max(LIGHT_DROPLETS_CONFIG.tailTaper, 0), 1));
    const glowScale = Math.max(0, LIGHT_DROPLETS_CONFIG.headGlow);
    const glowRadius = Math.max(0.01, headHalf * 4 * glowScale);
    const margin = Math.ceil(Math.max(glowRadius, headHalf) + 2);
    const spriteWidth = margin * 2;
    const spriteHeight = visualTrail + margin * 2;
    const sprite = document.createElement('canvas');
    sprite.width = Math.ceil(spriteWidth * spritePixelRatio);
    sprite.height = Math.ceil(spriteHeight * spritePixelRatio);
    const spriteContext = sprite.getContext('2d', { alpha: true });
    if (!spriteContext) return null;
    spriteContext.scale(spritePixelRatio, spritePixelRatio);

    const x = margin;
    const tailY = margin;
    const headY = tailY + visualTrail;
    const glowY = headY - headHalf * 0.25;
    const glow = spriteContext.createRadialGradient(x, glowY, 0, x, glowY, glowRadius);
    glow.addColorStop(0, rgba(trailColor, Math.min(0.4, litAlpha(0.12 * streak.brightness) * glowScale)));
    glow.addColorStop(0.45, rgba(trailColor, Math.min(0.15, litAlpha(0.04 * streak.brightness) * glowScale)));
    glow.addColorStop(1, rgba(trailColor, 0));
    spriteContext.fillStyle = glow;
    spriteContext.fillRect(0, headY - glowRadius - headHalf, spriteWidth, glowRadius * 2 + headHalf * 2);

    spriteContext.beginPath();
    spriteContext.moveTo(x - tailHalf, tailY);
    spriteContext.bezierCurveTo(x - tailHalf, tailY + visualTrail * 0.3, x - bodyHalf * 0.45, tailY + visualTrail * 0.55, x - bodyHalf * 0.8, tailY + visualTrail * 0.76);
    spriteContext.bezierCurveTo(x - bodyHalf, tailY + visualTrail * 0.85, x - headHalf, headY - headHalf * 2, x - headHalf, headY - headHalf * 0.8);
    spriteContext.bezierCurveTo(x - headHalf, headY + headHalf * 0.55, x + headHalf, headY + headHalf * 0.55, x + headHalf, headY - headHalf * 0.8);
    spriteContext.bezierCurveTo(x + headHalf, headY - headHalf * 2, x + bodyHalf, tailY + visualTrail * 0.85, x + bodyHalf * 0.8, tailY + visualTrail * 0.76);
    spriteContext.bezierCurveTo(x + bodyHalf * 0.45, tailY + visualTrail * 0.55, x + tailHalf, tailY + visualTrail * 0.3, x + tailHalf, tailY);
    spriteContext.closePath();

    const bodyLight = spriteContext.createLinearGradient(0, tailY, 0, headY + headHalf);
    bodyLight.addColorStop(0, rgba(trailColor, 0));
    bodyLight.addColorStop(0.45, rgba(trailColor, litAlpha(0.055 * streak.brightness)));
    bodyLight.addColorStop(0.78, rgba(trailColor, litAlpha(0.17 * streak.brightness)));
    bodyLight.addColorStop(0.94, rgba(trailColor, litAlpha(0.36 * streak.brightness)));
    bodyLight.addColorStop(1, rgba(highlightColor, litAlpha(0.48 * streak.brightness)));
    spriteContext.fillStyle = bodyLight;
    spriteContext.fill();

    const nucleus = spriteContext.createRadialGradient(x, glowY, 0, x, glowY, headHalf * 1.3);
    nucleus.addColorStop(0, rgba(highlightColor, litAlpha(0.18 * streak.brightness)));
    nucleus.addColorStop(1, rgba(highlightColor, 0));
    spriteContext.beginPath();
    spriteContext.ellipse(x, glowY, headHalf * 0.85, headHalf * 1.3, 0, 0, Math.PI * 2);
    spriteContext.fillStyle = nucleus;
    spriteContext.fill();

    return { canvas: sprite, width: spriteWidth, height: spriteHeight, margin, trail: visualTrail };
  };

  const makeStreak = (index, count, initial = false) => {
    const spacing = width / count;
    const trail = (48 + Math.random() * 78) * LIGHT_DROPLETS_CONFIG.lengthScale;
    const streak = {
      x: spacing * (index + 0.5) + (Math.random() - 0.5) * spacing * 0.45,
      y: initial ? Math.random() * (height + trail) : -trail - Math.random() * height * 0.35,
      trail,
      speed: 15 + Math.random() * 18,
      width: 0.55 + Math.random() * 0.55,
      brightness: 0.68 + Math.random() * 0.32,
      phase: Math.random() * Math.PI * 2,
    };
    streak.sprite = makeStreakSprite(streak);
    return streak;
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
    spritePixelRatio = pixelRatio;

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

      if (!streak.sprite) return;
      const exitOpacity = Math.min(1, Math.max(0, (height + streak.trail - streak.y) / streak.trail));
      context.globalAlpha = (0.88 + Math.sin(time * 0.0007 + streak.phase) * 0.12) * exitOpacity;
      context.drawImage(
        streak.sprite.canvas,
        streak.x - streak.sprite.margin,
        streak.y - streak.sprite.trail - streak.sprite.margin,
        streak.sprite.width,
        streak.sprite.height,
      );
      context.globalAlpha = 1;
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
