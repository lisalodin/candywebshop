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

  // Stänger popup & tömmer kundvagnen vid klick på stäng-knappen, användaren kommer till startsidan
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    clearCart();
    window.location.href = "/index.html";
  });

  // Stäng popup när man klickar utanför rutan
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });
}

