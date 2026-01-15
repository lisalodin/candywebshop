import type { CartItem } from "../models/CartItem";
import { getCartTotalPrice, getItemTotalPrice, getCartTotalQuantity } from "./cartCalculations";
import { increaseQuantity, decreaseQuantity, removeItem } from "./cartActions";
import { updateCartBadge } from "./cartIconQuantity"; //Wilma:jag la till denna  funktion som jag anropar i olika utils när förändringar på antal sker (så det uppdateras bredvid cart ikonen)

//funktion - skapa html för varukorgen
export const createHtmlCartItems = (shoppingCart: CartItem[]) => {
  // Tar in varukorgen som parameter
  const cartItemsContainer = document.getElementById(
    "cartItems"
  ) as HTMLDivElement;
  const cartSum = document.getElementById("cartSum") as HTMLSpanElement; // Total summa i varukorgen

  if (!cartItemsContainer) return; // Om containern inte finns, avsluta funktionen
  //Tömmer containern innan vi börjar
  cartItemsContainer.innerHTML = ""; // Rensar innehållet i cartItemsContainer

  const total = getCartTotalPrice(shoppingCart);
  const totalQuantity = getCartTotalQuantity(shoppingCart);

  shoppingCart.forEach((item, index) => {
    //Skapar ett cart item
    const cartItem = document.createElement("div");
    cartItem.className = "cartItem";

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
