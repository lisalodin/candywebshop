import type { CartItem } from "../models/CartItem";

// Funktion som renderar meddelande när varukorgen är tom
export const renderEmptyCart = (shoppingCart: CartItem[]) => {
    const cartItemsContainer = document.getElementById(
    "cartItems"
  ) as HTMLDivElement;

  const cartSum = document.getElementById("cartSum") as HTMLSpanElement; // Total summa i varukorgen
  const goToCheckoutBtn = document.getElementById("goToCheckoutBtn") as HTMLButtonElement;

  // Om varukorgen är tom -  vit container och visa meddelande
  if (shoppingCart.length === 0) {
    // Kollar om varukorgen är tom
    const emptyMessage = document.createElement("div"); // Skapar ett div-element för tomt meddelande
    emptyMessage.className = "emptyCart";
    emptyMessage.innerHTML = `
      <p>Tyvärr är varukorgen tom just nu, men det är lätt att ändra på!</p>
      <a href="/product.html" class="shopLink">Shoppa loss här</a>
    `;
    cartItemsContainer.appendChild(emptyMessage);

    if (cartSum) {
      cartSum.textContent = "0 kr"; // Sätter totalsumman till 0 kr
    }

    if (goToCheckoutBtn) {
      goToCheckoutBtn.style.display = "none"; // Göm köpknappen om varukorgen är tom
    }
    return; // Avsluta funktionen här
  }
  if (goToCheckoutBtn) {
    goToCheckoutBtn.style.display = ""; // Visa köpknappen om varukorgen inte är tom
  }
  
  return cartItemsContainer;
};
