import { initCartSum } from "../components/initCartSum";
import { renderCartPrice } from "../components/renderCartPrice";
import { renderCartProducts } from "../components/renderCartProducts";
import { renderCartQuantity } from "../components/renderCartQuantity";
import { renderCartRemove } from "../components/renderCartRemove";
import { renderEmptyCart } from "../components/renderEmptyCart";
import type { CartItem } from "../models/CartItem";


// Funktion som skapar HTML för varukorgsartiklar
export const createHtmlCartItems = (shoppingCart: CartItem[]) => {
  // Tar in varukorgen som parameter och skapar HTML-element för varje artikel
  const cartItemsContainer = document.getElementById(
    "cartItems"
  ) as HTMLDivElement;
  
  if (!cartItemsContainer) return; // Om containern inte finns, avsluta funktionen
  
  cartItemsContainer.innerHTML = ""; // Rensar innehållet i cartItemsContainer
  
  renderEmptyCart(shoppingCart);

  // Loopar igenom varje artikel i varukorgen och skapar HTML-element
  shoppingCart.forEach((item, index) => {
    const cartItem = document.createElement("div"); //Skapar ett cart item
    cartItem.className = "cartItem";

    const cartProduct = renderCartProducts(item);
    const cartQuantity = renderCartQuantity(
      shoppingCart,
      item,
      index,
      createHtmlCartItems
    );
    const cartPrice = renderCartPrice(item);
    const cartRemove = renderCartRemove(
      shoppingCart,
      index,
      createHtmlCartItems
    );

    // Bygger ihop hela kortet
    cartItem.appendChild(cartProduct);
    cartItem.appendChild(cartQuantity);
    cartItem.appendChild(cartPrice);
    cartItem.appendChild(cartRemove);

    cartItemsContainer.appendChild(cartItem);
  }); // Hit går shoppingCart.forEach

  initCartSum(shoppingCart);
};
