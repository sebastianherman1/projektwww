document.addEventListener('DOMContentLoaded', () => {
  fetch('templates/header.html')
    .then(res => res.text())
    .then(data => {
      document.querySelector('header').innerHTML = data;
      if (typeof initMobileMenu === 'function') {
        initMobileMenu();
      } else {
        console.warn('initMobileMenu() nie jest zdefiniowane');
      }
    })
    .catch(err => console.error('Nie udało się załadować headera:', err));

  fetch('templates/footer.html')
    .then(res => res.text())
    .then(data => {
      document.querySelector('footer').innerHTML = data;
    })
    .catch(err => console.error('Nie udało się załadować footera:', err));

  fetch('templates/head.html')
    .then(res => res.text())
    .then(data => {
      document.head.innerHTML += data;
    })
    .catch(err => console.error('Nie udało się załadować head.html:', err));
});
