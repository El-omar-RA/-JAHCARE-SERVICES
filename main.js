
// Mobile menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger && menu){
  burger.addEventListener('click', ()=>{
    menu.classList.toggle('open');
  });
}

// Smooth scroll offset for sticky header
const header = document.querySelector('.header');
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight || 70) - 8;
    window.scrollTo({top:y, behavior:'smooth'});
    menu?.classList.remove('open');
  });
});
