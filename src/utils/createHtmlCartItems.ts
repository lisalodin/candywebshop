import { initCartSum } from "../components/initCartSum";
import { renderCartPrice } from "../components/renderCartPrice";
import { renderCartProducts } from "../components/renderCartProducts";
import { renderCartQuantity } from "../components/renderCartQuantity";
import { renderCartRemove } from "../components/renderCartRemove";
import type { CartItem } from "../models/CartItem";

//JESPER: filen bör ligga i mapp - pages/

//funktion - skapa html för varukorgen
export const createHtmlCartItems = (shoppingCart: CartItem[]) => {
  // Tar in varukorgen som parameter
  const cartItemsContainer = document.getElementById(
    "cartItems"
  ) as HTMLDivElement;

  if (!cartItemsContainer) return; // Om containern inte finns, avsluta funktionen
  //Tömmer containern innan vi börjar
  cartItemsContainer.innerHTML = ""; // Rensar innehållet i cartItemsContainer

  //loopa varukorgen
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

    // Bygg ihop hela kortet
    cartItem.appendChild(cartProduct);
    cartItem.appendChild(cartQuantity);
    cartItem.appendChild(cartPrice);
    cartItem.appendChild(cartRemove);

    cartItemsContainer.appendChild(cartItem);
  }); // Hit går shoppingCart.forEach

  initCartSum(shoppingCart);
};
