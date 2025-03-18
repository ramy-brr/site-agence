const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Gère l'ouverture/fermeture du menu burger sur mobile
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Effet "header scrolled" quand on fait défiler la page
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});