import type { Product } from "./Product"; 

export interface CartItem { // Interface som representerar en vara i kundvagnen
  product: Product; // Produkten som lagts till i kundvagnen
  quantity: number; // Antal av produkten i kundvagnen
}

// Istället för att endast använda Product används CartItem för att inkludera kvantitet
// när användaren lägger till produkter i sin kundvagn, annars blir det svårt att
// hantera flera enheter om användaren vill öka samma produkt.