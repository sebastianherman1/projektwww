function loadPopup() {
  fetch('formularz.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('popupContainer').innerHTML = html;

      document.getElementById('popupContainer').style.display = 'block';
      document.getElementById('popupOverlay').style.display = 'block';
      document.body.style.overflow = 'hidden';

      if (typeof aktywujFormularzTrenera === 'function') {
        aktywujFormularzTrenera();
      } else {
        console.error("Funkcja aktywujFormularzTrenera nie została załadowana");
      }
    });
}
