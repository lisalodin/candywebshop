import type { Product } from "../models/Product";
import type { CartItem } from "../models/CartItem";
import { saveCart, loadCart } from "./cartStorage";
import { createHtmlCartItems } from "./createHtmlCartItems";

export const addToCart = (product: Product): CartItem[] => { // Tar emot en produkt som parameter
  const cart = loadCart(); // Ladda den nuvarande kundvagnen
  
  const existingItem = cart.find(item => item.product.name === product.name); // Kontrollera om produkten redan finns i kundvagnen

  if (existingItem) { // Om produkten finns, öka kvantiteten
    existingItem.quantity += 1; // Öka kvantiteten med 1
  } else { 
    cart.push({ // Om produkten inte finns, lägg till den med kvantitet 1
      product: product, // Använd produktobjektet som skickades in
      quantity: 1 // Starta med kvantitet 1
    });
  }

  saveCart(cart); // Spara den uppdaterade kundvagnen
  createHtmlCartItems(cart);  // Uppdatera HTML:en
  
  return cart; // Returnera den uppdaterade kundvagnen
};
