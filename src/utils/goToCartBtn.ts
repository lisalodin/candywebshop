export function goToCartBtn() { // Hanterar klick på gå till kassan-knappen
  const goToCartBtn = document.getElementById("goToCartBtn") as HTMLButtonElement; // Hämta gå till kassan-knappen från DOM

  if (!goToCartBtn) return; // Om knappen inte finns, avsluta funktionen

  goToCartBtn.addEventListener("click", () => { // Lägg till klick-händelse på knappen
    window.location.href = "/checkout.html"; // Användaren kommer till kassan
  });
}
