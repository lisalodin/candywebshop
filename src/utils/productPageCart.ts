import { products } from "../data/products";
import { addToCart } from "./addToCart";
import { updateCartBadge } from "./cartIconQuantity";

// Startar funktionaliteten för köpknappar på produktsidan
export const initProductPageCart = () => {
  const buyButtons = document.querySelectorAll(".buyBtnSmall");

  // Lägg till klickhändelse för varje köpknapp
  buyButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (products[index]) {
        const updatedCart = addToCart(products[index]);
        updateCartBadge(updatedCart);
        console.log(`Lade till ${products[index].name} i varukorgen`);

      }
    });
  });
};

