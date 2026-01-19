import { clearCart } from "../services/cartStorage";

export function payBtn() {
  const payBtn = document.getElementById("payBtn") as HTMLButtonElement;
  const popup = document.getElementById("popup") as HTMLDivElement;
  const closeBtn = document.getElementById("closePopup") as HTMLButtonElement;
  const errorPopup = document.getElementById("errorPopup") as HTMLDivElement;
  const closeErrorBtn = document.getElementById("closeErrorPopup") as HTMLButtonElement;

 // Hämtar formuläret och alla textinputfält inom det
  const form = document.querySelector(".checkout-container") as HTMLElement;
  const textInputs = form?.querySelectorAll("input[type='text'], input[type='email'], input[type='tel']") as NodeListOf<HTMLInputElement>; 

  // Säkerställer att alla element finns innan vi lägger till event listeners
  if (!payBtn || !popup || !closeBtn) return;

  // Vid klick på betalknappen öppnas popup-fönstret
  payBtn.addEventListener("click", () => { 
    let allFilled = true;

    // Kollar att alla textinputfält är ifyllda 
    textInputs?.forEach((input) => {
      if (!input.value.trim()) { // Om något fält är tomt sätts allFilled till false och markerar fältet med röd kant
        allFilled = false; 
        input.style.border = "2px solid red"; 
      } else { // Om fältet är ifyllt, tas röd kant bort
        input.style.border = "";
      }
    });


    // Kollar att en fraktmetod och betalningsmetod är valt
    const shippingSelected = form?.querySelector('input[name="shipping"]:checked');
    const paymentSelected = form?.querySelector('input[name="payment"]:checked');
    // Markerar sektionerna med röd kant om inget är valt
    const shippingSection = form?.querySelector('input[name="shipping"]')?.closest(".checkout-section");
    const paymentSection = form?.querySelector('input[name="payment"]')?.closest(".checkout-section");

    if (!shippingSelected) { // Om ingen fraktmetod är vald sätts allFilled till false och markerar sektionen med röd kant
      allFilled = false;
      if (shippingSection) {
        (shippingSection as HTMLElement).style.border = "2px solid red";
      }
    } else { // Om en fraktmetod är vald, tas röda kanten bort
      if (shippingSection) {
        (shippingSection as HTMLElement).style.border = "";
      }
    }

    if (!paymentSelected) { // Om ingen betalningsmetod är vald sätts allFilled till false och markerar sektionen med röd kant
      allFilled = false;
      if (paymentSection) {
        (paymentSection as HTMLElement).style.border = "2px solid red";
      }
    } else { // Om en betalningsmetod är vald, tas röda kanten bort
      if (paymentSection) {
        (paymentSection as HTMLElement).style.border = "";
      }
    }

    // Beroende på om alla fält är ifyllda visas antingen bekräftelse-popup eller fel-popup
    if (allFilled) {
      popup.classList.remove("hidden");
    } else {
      errorPopup?.classList.remove("hidden");
    }
  });


  // Vid klick på stäng-knappen i popup-fönstret stängs det och användaren skickas tillbaka till startsidan
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    clearCart();
    window.location.href = "/index.html";
  });
  // Vid klick på stäng-knappen i fel-popup-fönstret stängs det
  closeErrorBtn?.addEventListener("click", () => {
    errorPopup?.classList.add("hidden");
  });

  // Stänger popup-fönstren om användaren klickar utanför innehållet
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });
  // Stänger fel-popup-fönstret om användaren klickar utanför innehållet
  errorPopup?.addEventListener("click", (e) => {
    if (e.target === errorPopup) {
      errorPopup?.classList.add("hidden");
    }
  });
};
