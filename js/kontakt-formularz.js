document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("kontakt-form");

  if (!form) return;

  const pola = [
    "first-name",
    "last-name",
    "phone",
    "email",
    "subject",
    "message"
  ];

  pola.forEach((name) => {
    const field = form.querySelector(`[name="${name}"]`);
    if (field && localStorage.getItem(name)) {
      field.value = localStorage.getItem(name);
    }

    if (field) {
      field.addEventListener("input", () => {
        localStorage.setItem(name, field.value);
      });
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const dane = {
      imie: formData.get("first-name"),
      nazwisko: formData.get("last-name"),
      telefon: formData.get("phone"),
      email: formData.get("email"),
      temat: formData.get("subject"),
      wiadomosc: formData.get("message")
    };

    fetch("http://localhost:3000/wiadomosciKontaktowe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dane)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Błąd serwera");
        return res.json();
      })
      .then(() => {
        alert("Dziękujemy za wiadomość!");

        pola.forEach((name) => localStorage.removeItem(name));

        form.reset();
      })
      .catch(() => {
        alert("Wystąpił błąd. Spróbuj ponownie później.");
      });
  });
});
