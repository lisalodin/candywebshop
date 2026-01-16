import type { CartItem } from "../models/CartItem";
import { decreaseQuantity, increaseQuantity } from "../utils/cartActions";

export const renderCartQuantity = (shoppingCart: CartItem[], item: CartItem, index: number, createHtmlCartItems: (shoppingCart: CartItem[]) => void) => {
  //Antal div
  const cartQty = document.createElement("div");
  cartQty.className = "cartQty";
  //Antal produkter
  const qtyText = document.createElement("span");
  qtyText.className = "qty";
  qtyText.innerText = "Antal ";
  //Antal produkter kontroll +/-
  const qtyControls = document.createElement("div");
  qtyControls.className = "qtyControls";
  // Minus knapp
  const minusBtn = document.createElement("button");
  minusBtn.className = "minusBtn";
  minusBtn.textContent = "-";
  // Antal produkter
  const numOfProducts = document.createElement("span");
  numOfProducts.className = "numOfProducts";
  numOfProducts.textContent = item.quantity.toString(); //Kanske ställer till det vid räkning
  // Plus knapp
  const plusBtn = document.createElement("button");
  plusBtn.className = "plusBtn";
  plusBtn.textContent = "+";

  minusBtn.addEventListener("click", () => {
    decreaseQuantity(shoppingCart, index, createHtmlCartItems);
  });

  plusBtn.addEventListener("click", () => {
    increaseQuantity(shoppingCart, index, createHtmlCartItems);
  });

  qtyControls.appendChild(minusBtn);
  qtyControls.appendChild(numOfProducts);
  qtyControls.appendChild(plusBtn);

  cartQty.appendChild(qtyText);
  cartQty.appendChild(qtyControls);

  return cartQty;
};
