import type { CartItem } from "../models/CartItem";
import { getCartTotalPrice } from "../utils/cartCalculations";
import { renderCartIcon } from "./renderCartIcon";
import { renderCartTotal } from "./renderCartTotal";

const cartSum = document.getElementById("cartSum") as HTMLSpanElement; // Total summa i varukorgen

export const initCartSum = (shoppingCart: CartItem[]) => {
  const total = getCartTotalPrice(shoppingCart);

  if (cartSum) {
    // Kollar om cartSum finns
    cartSum.textContent = `${total.toFixed(2)}kr`; // Uppdatera totalsumman med två decimale
  }

  const cartTotal = document.getElementById("cartTotal") as HTMLDivElement;

  cartTotal.innerHTML = "";

  //Visar inget om varukorgen är tom och summan 0kr
  if (shoppingCart.length === 0) {
    return;
  }

  const cartTotalWrapper = renderCartTotal(total);

  cartTotal.appendChild(cartTotalWrapper);

  renderCartIcon(shoppingCart);
};
