import type { CartItem } from "../models/CartItem";
import { saveCart } from "./cartStorage";

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

  let total = 0; // Variabel för att hålla koll på totalsumman

  //loopa varukorgen
  shoppingCart.forEach((item, index) => {
    total += item.product.price * item.quantity;

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

    // Event listeners för knapparna
    minusBtn.addEventListener("click", () => {
      if (item.quantity > 1) {
        // Om antal är större än 1, minska med 1
        item.quantity--;
      } else {
        shoppingCart.splice(index, 1); // Annars ta bort varan från varukorgen
      }
      saveCart(shoppingCart); // Spara ändringarna i lagringen
      createHtmlCartItems(shoppingCart); // Uppdatera HTML:en för varukorgen
    });

    plusBtn.addEventListener("click", () => {
      // När plus knappen klickas
      item.quantity++; // Öka antal med 1
      saveCart(shoppingCart);
      createHtmlCartItems(shoppingCart);
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
    cartItemPrice.textContent =
      (item.product.price * item.quantity).toFixed(2) + " kr"; //Räknar ut priset beroende på antal
    // Bygg ihop pris delen
    cartItemPriceContainer.appendChild(priceHead);
    cartItemPriceContainer.appendChild(cartItemPrice);
    //Ta bort item
    const removeBtn = document.createElement("button");
    removeBtn.className = "removeBtn";
    removeBtn.textContent = "x";
    removeBtn.addEventListener("click", () => {
      shoppingCart.splice(index, 1);
      saveCart(shoppingCart);
      createHtmlCartItems(shoppingCart);
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

  const cartTotalText = document.createElement("span");
  const cartTotalPrice = document.createElement("span");

  cartTotalText.textContent = "Total summa: ";
  cartTotalPrice.textContent = `${total.toFixed(2)}kr`;

  cartTotal.appendChild(cartTotalText);
  cartTotal.appendChild(cartTotalPrice);
};
