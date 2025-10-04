const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const menu = document.querySelector('#menu');

const closeMenu = () => {
  menu?.classList.remove('open');
  if (burger) {
    burger.setAttribute('aria-expanded', 'false');
  }
};

const openMenu = () => {
  menu?.classList.add('open');
  if (burger) {
    burger.setAttribute('aria-expanded', 'true');
  }
};

if (burger && menu) {
  burger.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      burger?.focus();
    }
  });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId) return;
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    event.preventDefault();

    const headerOffset = (header?.offsetHeight || 0) + 12;
    const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });

    closeMenu();
  });
});

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
