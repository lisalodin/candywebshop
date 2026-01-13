import type { CartItem } from "../models/CartItem";

const CART_KEY = "shoppingCart"; // Key används för att lagra kundvagnsdata i localStorage

export const saveCart = (cart: CartItem[]): void => { // Sparar kundvagnsdata i localStorage
  localStorage.setItem(CART_KEY, JSON.stringify(cart)); // Konverterar kundvagnsdata till en sträng och sparar den
};

export const loadCart = (): CartItem[] => { // Hämtar kundvagnsdata från localStorage
  const saved = localStorage.getItem(CART_KEY); // Hämtar den sparade strängen från localStorage
  return saved ? JSON.parse(saved) : []; // Om det finns sparad data, konvertera den tillbaka till ett objekt, annars returnera en tom array
};

export const clearCart = (): void => { // Rensar kundvagnsdata från localStorage
  localStorage.removeItem(CART_KEY); // Tar bort kundvagnsdata från localStorage
};