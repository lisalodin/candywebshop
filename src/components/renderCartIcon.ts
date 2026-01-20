import type { CartItem } from "../models/CartItem";
import { getCartTotalQuantity } from "../utils/cartCalculations";
import { updateCartBadge } from "../utils/cartIconQuantity";

// Funktion som renderar ikonen för shopping cart med antal produkter i kundvagnen
export const renderCartIcon = (shoppingCart: CartItem[]) => {
  const totalQuantity = getCartTotalQuantity(shoppingCart);

  const cartIcon = document.querySelector(".cartIcon") as HTMLElement;

  // Tar bort befintlig badge om den finns
  if (cartIcon) {
    cartIcon.querySelector(".shoppingCartNumberContainer")?.remove();

    // Skapar och lägger till ny badge med uppdaterad kvantitet
    const badge = document.createElement("div");
    badge.className = "shoppingCartNumberContainer";
    badge.textContent = totalQuantity.toString();

    cartIcon.appendChild(badge); // Lägg till badge i cartIcon
  }
  updateCartBadge(shoppingCart); // Detta anropar funktion som gör att när man tar bort, ökar eller minskar så ändras siffran bredvid shoppingcarticon till rätt antal produkter
};
