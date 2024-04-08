const hamburgerMenu = document.querySelector('.hamburger-menu');
const header = document.querySelector('.header');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');
  header.classList.toggle('open-menu');
});
