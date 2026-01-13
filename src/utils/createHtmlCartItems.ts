import type { CartItem } from "../models/CartItem";

// const cartItems = document.getElementById("cartItems");

export const createHtmlCartItems = (shoppingCart: CartItem[]) => {
  shoppingCart.forEach((item) => {
    const name = document.createElement("h5"); // Skapa ett h5-element för produktnamnet
    
    name.innerHTML = item.product.name; // Sätt produktnamnet som innehåll

   console.log(`${item.product.name} x ${item.quantity}`); // Logga produktnamn och kvantitet till konsolen
   // cartItems?.appendChild(name); // Lägg till h5-elementet i cartItems-behållaren
  });
};