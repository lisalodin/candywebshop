export function goToCheckoutBtn() { // Hanterar klick på gå till kassan-knappen
  const goToCheckoutBtn = document.getElementById("goToCheckoutBtn") as HTMLButtonElement; // Hämta gå till kassan-knappen från DOM

  if (!goToCheckoutBtn) return; // Om knappen inte finns, avsluta funktionen

  goToCheckoutBtn.addEventListener("click", () => { // Lägg till klick-händelse på knappen
    window.location.href = "/checkout.html"; // Användaren kommer till kassan
  });
}
