import type { CartItem } from "../models/CartItem";
import { getItemTotalPrice } from "../utils/cartCalculations";

export const renderCartPrice = (item: CartItem) => {
  //Priset på varan i item
  const cartItemPriceContainer = document.createElement("div");
  cartItemPriceContainer.className = "cartItemPriceContainer";
  // Pris rubrik
  const priceHead = document.createElement("span");
  priceHead.className = "priceHead";
  priceHead.textContent = "Pris";
  // Pris på item
  const cartItemPrice = document.createElement("span");
  cartItemPrice.className = "cartItemPrice";
  cartItemPrice.textContent = getItemTotalPrice(item).toFixed(2) + " kr"; //Räknar ut priset beroende på antal
  // Bygg ihop pris delen
  cartItemPriceContainer.appendChild(priceHead);
  cartItemPriceContainer.appendChild(cartItemPrice);

  return cartItemPriceContainer;
};
