import { clearCart } from "./cartStorage";

//JESPER: bör ligga i mapp - components/

export function payBtn() {
  const payBtn = document.getElementById("payBtn") as HTMLButtonElement;
  const popup = document.getElementById("popup") as HTMLDivElement;
  const closeBtn = document.getElementById("closePopup") as HTMLButtonElement;

  if (!payBtn || !popup || !closeBtn) return;

  payBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
  });

  if (closeBtn && popup) { // Kontrollera att elementen finns
  closeBtn.addEventListener("click", () => { // Lägg till klickhändelse på stängknappen
    popup.classList.add("hidden"); // Gömmer popupen
    clearCart();                   // Tömmer varukorgen
    window.location.href = "/index.html"; // Går direkt till landingsite
  });
}

  // Stäng popup när man klickar utanför rutan
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });
}

