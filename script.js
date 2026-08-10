const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 32), { passive: true });
menu?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
  menu.querySelector('span').textContent = isOpen ? '−' : '+';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
  if (menu) menu.querySelector('span').textContent = '+';
}));

const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
document.getElementById('year').textContent = new Date().getFullYear();
