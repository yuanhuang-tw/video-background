const hamburgerMenu = document.querySelector('.hamburger-menu');
const header = document.querySelector('.header');
const wow = document.querySelector('.wow');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');
  header.classList.toggle('open-menu');
});

setTimeout(() => {
  wow.style.opacity = 1;
}, 800);
