const cards = document.querySelectorAll('[data-js="card"]');

cards.forEach(card => {
  const button = card.querySelector('[data-js="button"]');
  const link = card.querySelector('[data-js="link"]');
  const arrow = button.querySelector('[data-js="arrow"]');
  button.addEventListener('click', () => {
    link.classList.toggle('hidden');
    arrow.classList.toggle('rotate');
  });
});
