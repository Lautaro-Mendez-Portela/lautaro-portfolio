const cards = [...document.querySelectorAll('.services .service')];
const tiltEnabled = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');

if (cards.length) {
  // Tune motion here; material and light values live beside the cards in styles.css.
  const TILT_CONFIG = {
    maxAngle: 5.5,
    shadowTravel: 6,
    response: 0.18,
    returnResponse: 0.1,
    spotlightResponse: 0.15,
  };

  const properties = [
    '--tilt-x',
    '--tilt-y',
    '--spotlight-x',
    '--spotlight-y',
    '--spotlight-alpha',
    '--shadow-x',
    '--shadow-y',
  ];

  const neutral = () => ({ x: 0, y: 0, spotX: 50, spotY: 50, alpha: 0, shadowX: 0, shadowY: 0 });
  const states = cards.map((card) => ({
    card,
    current: neutral(),
    target: neutral(),
    hovered: false,
  }));

  let frame = null;
  let previousTime = 0;

  const ease = (response, elapsed) => 1 - Math.pow(1 - response, elapsed / 16.67);

  const animate = (time) => {
    frame = null;
    const elapsed = previousTime ? Math.min(time - previousTime, 50) : 16.67;
    previousTime = time;
    let unsettled = false;

    states.forEach((state) => {
      const { current, target, card } = state;
      const motionEase = ease(state.hovered ? TILT_CONFIG.response : TILT_CONFIG.returnResponse, elapsed);
      const lightEase = ease(TILT_CONFIG.spotlightResponse, elapsed);

      for (const key of Object.keys(current)) {
        const amount = key.startsWith('spot') || key === 'alpha' ? lightEase : motionEase;
        current[key] += (target[key] - current[key]) * amount;
        if (Math.abs(target[key] - current[key]) > 0.015) unsettled = true;
        else current[key] = target[key];
      }

      if (!state.hovered && Object.keys(current).every((key) => current[key] === target[key])) {
        properties.forEach((property) => card.style.removeProperty(property));
        return;
      }

      card.style.setProperty('--tilt-x', current.x.toFixed(3) + 'deg');
      card.style.setProperty('--tilt-y', current.y.toFixed(3) + 'deg');
      card.style.setProperty('--spotlight-x', current.spotX.toFixed(2) + '%');
      card.style.setProperty('--spotlight-y', current.spotY.toFixed(2) + '%');
      card.style.setProperty('--spotlight-alpha', current.alpha.toFixed(3));
      card.style.setProperty('--shadow-x', current.shadowX.toFixed(2) + 'px');
      card.style.setProperty('--shadow-y', current.shadowY.toFixed(2) + 'px');
    });

    if (unsettled) frame = requestAnimationFrame(animate);
    else previousTime = 0;
  };

  const schedule = () => {
    if (frame === null) frame = requestAnimationFrame(animate);
  };

  const aimAtPointer = (state, event) => {
    if (event.pointerType !== 'mouse') return;

    const bounds = state.card.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1));
    const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1));

    state.hovered = true;
    state.target.x = -y * TILT_CONFIG.maxAngle;
    state.target.y = x * TILT_CONFIG.maxAngle;
    state.target.spotX = (x + 1) * 50;
    state.target.spotY = (y + 1) * 50;
    state.target.alpha = 1;
    state.target.shadowX = -x * TILT_CONFIG.shadowTravel;
    state.target.shadowY = 5 - y * TILT_CONFIG.shadowTravel * 0.5;
    schedule();
  };

  const handlers = states.map((state) => ({
    enter: (event) => aimAtPointer(state, event),
    move: (event) => aimAtPointer(state, event),
    leave: () => {
      state.hovered = false;
      state.target = neutral();
      schedule();
    },
  }));

  const updateAvailability = () => {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    previousTime = 0;

    states.forEach((state, index) => {
      const { card } = state;
      const { enter, move, leave } = handlers[index];
      card.removeEventListener('pointerenter', enter);
      card.removeEventListener('pointermove', move);
      card.removeEventListener('pointerleave', leave);
      state.hovered = false;
      state.current = neutral();
      state.target = neutral();
      properties.forEach((property) => card.style.removeProperty(property));

      if (tiltEnabled.matches) {
        card.addEventListener('pointerenter', enter);
        card.addEventListener('pointermove', move);
        card.addEventListener('pointerleave', leave);
      }
    });
  };

  tiltEnabled.addEventListener('change', updateAvailability);
  updateAvailability();
}
