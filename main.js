const hamburgerMenu = document.querySelector('.hamburger-menu');
const video = document.querySelector('video');
const videoOverlay = document.querySelector('.video-overlay');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');
  nav.classList.toggle('open-menu');
  video.classList.toggle('open-menu');
  videoOverlay.classList.toggle('open-menu');
});
