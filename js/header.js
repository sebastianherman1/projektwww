const mainHeader = document.querySelector('header'); 

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    mainHeader.classList.add('scrolled');
  } else {
    mainHeader.classList.remove('scrolled');
  }
});



