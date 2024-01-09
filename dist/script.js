const hamburgerBtn = document.getElementById('hamburger-btn');
const navbar = document.getElementById('navbar');

hamburgerBtn.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
});

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', () => {
  darkToggle.checked ? html.classList.add('dark') : html.classList.remove('dark');
});