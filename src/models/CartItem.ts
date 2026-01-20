import type { Product } from "./Product"; 

export interface CartItem { // Interface som representerar en tillagd produkt i kundvagnen för unik användare
  product: Product; // Produkten från Product-modellen
  quantity: number; // Antal av produkten som lagts till i kundvagnen
}
