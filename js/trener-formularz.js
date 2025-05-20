function aktywujFormularzTrenera() {
  const form = document.getElementById("form-trener");
  const status = document.getElementById("status");

  if (!form) {
    console.error("Nie znaleziono formularza!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const dane = {
      imie: formData.get("name"),
      email: formData.get("email"),
      telefon: formData.get("phone"),
      data_startu: formData.get("start-date"),
      cel: formData.get("goal"),
      rodzaj: formData.get("rodzaj"),
      trener: formData.get("dyscyplina"),
      poziom: formData.get("poziom"),
      wiadomosc: formData.get("message")
    };

    fetch("http://localhost:3000/zgloszenia", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dane)
    })
      .then(res => {
        if (!res.ok) throw new Error("Błąd serwera");
        return res.json();
      })
      .then(() => {
        status.textContent = "Dziękujemy za zgłoszenie!";
        form.reset();
      })
      .catch(() => {
        status.textContent = "Wystąpił błąd. Spróbuj ponownie później.";
      });
  });
}
