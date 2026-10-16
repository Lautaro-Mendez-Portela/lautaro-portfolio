(() => {
  const duration = 2.2;

  document.querySelectorAll('[data-flip-text]').forEach((container) => {
    const measure = container.querySelector('.project-cta__measure');
    const flip = container.querySelector('.project-cta__flip');
    if (!measure || !flip) return;

    const text = measure.textContent;
    const words = text.split(' ');
    const totalChars = text.length;
    const fragment = document.createDocumentFragment();
    let wordStart = 0;

    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word';

      word.split('').forEach((char, charIndex) => {
        const currentGlobalIndex = wordStart + charIndex;
        const normalizedIndex = currentGlobalIndex / totalChars;
        const sineValue = Math.sin(normalizedIndex * (Math.PI / 2));
        const calculatedDelay = sineValue * (duration * 0.25);
        const charSpan = document.createElement('span');

        charSpan.className = 'flip-char';
        charSpan.dataset.char = char;
        charSpan.textContent = char;
        charSpan.style.setProperty('--flip-duration', `${duration}s`);
        charSpan.style.setProperty('--flip-delay', `${calculatedDelay}s`);
        charSpan.style.setProperty('--flip-iteration', 'infinite');
        wordSpan.append(charSpan);
      });

      if (wordIndex < words.length - 1) {
        const space = document.createElement('span');
        space.className = 'whitespace';
        space.textContent = '\u00a0';
        wordSpan.append(space);
      }

      fragment.append(wordSpan);
      wordStart += word.length + 1;
    });

    flip.replaceChildren(fragment);
    container.classList.add('is-flipping');
  });
})();
