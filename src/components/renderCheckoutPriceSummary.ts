import { getCartTotalPrice } from "../utils/cartCalculations";
import { loadCart } from "../services/cartStorage";


// Renderar sammanfattningen av varukorgen i kassan
export const renderCheckoutPriceSummary = () => {
  const checkoutItemsContainer = document.getElementById("checkoutItems"); // Container från checkout.html
  const checkoutTotal = document.getElementById("checkoutTotal"); // Element för totalpris från checkout.html

  if (!checkoutItemsContainer || !checkoutTotal) return; // Säkerställer att elementen finns

  const cart = loadCart(); // Hämtar varukorgen från localStorage

  // Tömmer containern innan rendering
  checkoutItemsContainer.innerHTML = "";

  // Skapar html för varje produkt som finns i varukorgen
  cart.forEach((item) => {
    const summaryItem = document.createElement("div");
    summaryItem.className = "summary-item";

    const itemName = document.createElement("span");
    itemName.textContent = `${item.product.name} x ${item.quantity}`;

    const itemPrice = document.createElement("span");
    itemPrice.textContent = `${(item.product.price * item.quantity).toFixed(2)} kr`;

    summaryItem.appendChild(itemName);
    summaryItem.appendChild(itemPrice);
    checkoutItemsContainer.appendChild(summaryItem);
  });

  // Visar totalsumma
  const shipping_fee = 39;
  const total = getCartTotalPrice(cart) + shipping_fee; // Beräknar totalpris från varukorgen plus frakt
  checkoutTotal.textContent = `${total.toFixed(2)} kr`; // Uppdaterar totalpris i diven i checkout.html
};