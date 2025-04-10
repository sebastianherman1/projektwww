function loadPopup() {
  fetch('formularz.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('popupContainer').innerHTML = html;
      document.getElementById('popupContainer').style.display = 'block';
    });

    document.getElementById('popupOverlay').style.display = 'block';
    document.getElementById('popupContainer').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePopup() {
  document.getElementById('popupContainer').style.display = 'none';
  document.getElementById('popupOverlay').style.display = 'none';
  document.getElementById('popupContainer').style.display = 'none';
  document.body.style.overflow = 'auto';
}
