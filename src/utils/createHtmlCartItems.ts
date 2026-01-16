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
  const cartSum = document.getElementById("cartSum") as HTMLSpanElement; // Total summa i varukorgen
  const goToCheckoutBtn = document.getElementById("goToCheckoutBtn") as HTMLButtonElement;

  if (!cartItemsContainer) return; // Om containern inte finns, avsluta funktionen
  
  cartItemsContainer.innerHTML = ""; // Rensar innehållet i cartItemsContainer

  // Om varukorgen är tom -  vit container och visa meddelande
  if (shoppingCart.length === 0) { // Kollar om varukorgen är tom
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
