const mainHeader = document.querySelector('header'); 

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    mainHeader.classList.add('scrolled');
  } else {
    mainHeader.classList.remove('scrolled');
  }
});

function initMobileMenu() {
  const header = document.querySelector('.main-header');
  const btn    = header.querySelector('.hamburger');
  const nav    = header.querySelector('.main-nav');

  btn.addEventListener('click', () => {
    const isOpen = header.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (header.classList.contains('open')) {
        header.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}
