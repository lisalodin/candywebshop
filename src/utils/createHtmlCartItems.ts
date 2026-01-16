import type { CartItem } from "../models/CartItem";
import { getCartTotalPrice, getItemTotalPrice, getCartTotalQuantity } from "./cartCalculations";
import { increaseQuantity, decreaseQuantity, removeItem } from "./cartActions";
import { updateCartBadge } from "./cartIconQuantity"; //Wilma:jag la till denna  funktion som jag anropar i olika utils när förändringar på antal sker (så det uppdateras bredvid cart ikonen)

//JESPER: filen bör ligga i mapp - pages/

export const createHtmlCartItems = (shoppingCart: CartItem[]) => { // Funktion för att skapa HTML-element för varukorgsartiklar
  const cartItemsContainer = document.getElementById("cartItems") as HTMLDivElement; // Container för varukorgsartiklar
  //JESPER: flytta den här variabeln till funktionen initCartSum som anropas längst ner i den här filen
  const cartSum = document.getElementById("cartSum") as HTMLSpanElement; // Total summa i varukorgen
  const goToCheckoutBtn = document.getElementById("goToCheckoutBtn") as HTMLButtonElement;

  if (!cartItemsContainer) return; // Om containern inte finns, avsluta funktionen
  
  cartItemsContainer.innerHTML = ""; // Rensar innehållet i cartItemsContainer

  const totalQuantity = getCartTotalQuantity(shoppingCart);

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

  const total = getCartTotalPrice(shoppingCart); // Beräknar den totala summan av varukorgen

  
  //JESPER: här hade vi kunnat börja dela upp koden i separata filer
  //så att det inte blir så många kodrader i varje fil

  //JESPER: NY FIL med funktionen renderCartItems som anropas här
  //loopa varukorgen
  shoppingCart.forEach((item, index) => {
    //Skapar ett cart item
    const cartItem = document.createElement("div");
    cartItem.className = "cartItem";

    //JESPER: NY FIL för funktionen renderCartProducts som anropas inuti renderCartItems - med parameter cartProduct
    //Hela produkten
    const cartProduct = document.createElement("div");
    cartProduct.className = "cartProduct";
    //Produktbilden
    const img = document.createElement("img");
    img.className = "cartImg";
    img.src = item.product.image;
    img.alt = item.product.name;
    //Skapar en div där info om produkten ska vara
    const cartInfo = document.createElement("div");
    cartInfo.className = "cartInfo";
    //Produktsnamn P
    const productName = document.createElement("p");
    productName.className = "productName";
    productName.textContent = item.product.name;
    //Produktsinfo P
    const productInfo = document.createElement("p");
    productInfo.className = "productInfo";
    productInfo.textContent = item.product.info;

    cartInfo.appendChild(productName);
    cartInfo.appendChild(productInfo);
    cartProduct.appendChild(img);
    cartProduct.appendChild(cartInfo);

    //JESPER: NY FIL med funktion renderCartQuantity som anropas inuti renderCartItems - med parameter cartQty
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

    //JESPER: NY FIL för funktionen renderCartPrice som anropas inuti renderCartItems - med parameter cartItemPriceContainer

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

    //JESPER: NY FIL för funktionen renderCartRemove som anropas här med parameter removeBtn

    //Ta bort item
    const removeBtn = document.createElement("button");
    removeBtn.className = "removeBtn";
    removeBtn.textContent = "x";

    removeBtn.addEventListener("click", () => {
      removeItem(shoppingCart, index, createHtmlCartItems);
    });

    // Bygg ihop hela kortet
    cartItem.appendChild(cartProduct);
    cartItem.appendChild(cartQty);
    cartItem.appendChild(cartItemPriceContainer);
    cartItem.appendChild(removeBtn);

    cartItemsContainer.appendChild(cartItem);
  }); // Hit går shoppingCart.forEach

  //JESPER: NY FIL för funktionen initCartSum som anropas här

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

  const cartTotalWrapper = document.createElement("div");
  cartTotalWrapper.className = "cartTotalWrapper";

  const cartTotalText = document.createElement("span");
  cartTotalText.className = "cartTotalText";

  const cartTotalPrice = document.createElement("span");
  cartTotalPrice.className = "cartTotalPrice";

  cartTotalText.textContent = "Total summa: ";
  cartTotalPrice.textContent = `${total.toFixed(2)} kr`;

  cartTotalWrapper.appendChild(cartTotalText);
  cartTotalWrapper.appendChild(cartTotalPrice);

  cartTotal.appendChild(cartTotalWrapper);

  const cartIcon = document.querySelector(".cartIcon") as HTMLElement;

  if (cartIcon) {
    cartIcon
      .querySelector(".shoppingCartNumberContainer")
      ?.remove();

    const badge = document.createElement("div");
    badge.className = "shoppingCartNumberContainer";
    badge.textContent = totalQuantity.toString();

    cartIcon.appendChild(badge);
  }
  updateCartBadge(shoppingCart);//wilma: detta anropar funktion som gör att när man tar bort, ökar eller minskar så ändras siffran bredvid shoppingcarticon till rätt antal produkter
};
