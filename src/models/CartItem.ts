import type { Product } from "./Product"; 

export interface CartItem { // Interface som representerar en vara i kundvagnen
  product: Product; // Produkten som lagts till i kundvagnen
  quantity: number; // Antal av produkten i kundvagnen
}
