fetch('templates/header.html')
  .then(res => res.text())
  .then(data => {
    document.querySelector('header').innerHTML = data;
  });

  fetch('templates/footer.html')
  .then(res => res.text())
  .then(data => {
    document.querySelector('footer').innerHTML = data;
  });