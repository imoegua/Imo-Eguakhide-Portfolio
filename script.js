// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);
  navList.classList.toggle('show');
});

// Smooth scroll (for accessibility, we'll use native `scrollIntoView`)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      section.focus({ preventScroll: true });
    }
  });
});
