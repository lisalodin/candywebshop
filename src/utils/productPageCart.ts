import { products } from "../data/products";
import { addToCart } from "./addToCart";

// Startar funktionaliteten för köpknappar på produktsidan
export const initProductPageCart = () => { 
  const buyButtons = document.querySelectorAll(".buyBtnSmall");

  // Lägg till klickhändelse för varje köpknapp
  buyButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (products[index]) {
        addToCart(products[index]);
        console.log(`Lade till ${products[index].name} i varukorgen`);
      }
    });
  });
};