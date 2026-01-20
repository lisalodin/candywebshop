import type { CartItem } from "../models/CartItem";
import { getCartTotalPrice } from "../utils/cartCalculations";
import { renderCartIcon } from "./renderCartIcon";
import { renderCartTotal } from "./renderCartTotal";

const cartSum = document.getElementById("cartSum") as HTMLSpanElement; // Total summa i varukorgen 

export const initCartSum = (shoppingCart: CartItem[]) => { // Initialiserar och uppdaterar totalsumman i kundvagnen
  const total = getCartTotalPrice(shoppingCart); // Beräknar den totala priset för produkterna i kundvagnen

  // Uppdaterar textinnehållet i cartSum-elementet med den beräknade totalsumman, formaterad till två decimaler följt av "kr"
  if (cartSum) {
    cartSum.textContent = `${total.toFixed(2)}kr`;
  }

  const cartTotal = document.getElementById("cartTotal") as HTMLDivElement; // Elementet som visar den totala summan i varukorgen

  cartTotal.innerHTML = ""; // Rensar tidigare innehåll i cartTotal-elementet

  //Visar inget om varukorgen är tom och summan 0kr
  if (shoppingCart.length === 0) {
    return;
  }

  const cartTotalWrapper = renderCartTotal(total); // Skapar ett nytt element för att visa den totala summan i varukorgen

  cartTotal.appendChild(cartTotalWrapper); // Lägger till det nya elementet i cartTotal-elementet

  renderCartIcon(shoppingCart); // Uppdaterar varukorgsikonen med aktuell information om kundvagnen
};
