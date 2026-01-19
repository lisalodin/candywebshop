import { products } from "./data/products";
import "./styles/style.scss";
import { mobileMenu } from "./components/mobileMenu";
import { showMoreHandleClick } from "./components/showmoreBtn";
import "./utils/goToCheckoutBtn";
import { createHtmlMainProductCard } from "./pages/createHtmlMainProductCard";
import { goToCheckoutBtn } from "./utils/goToCheckoutBtn";
import { createHtmlProductPage } from "./pages/createHtmlProductPage";
import { addToCart } from "./services/addToCart";
import "./components/showmoreBtn";
import { initProductPageCart } from "./utils/productPageCart";
import { loadCart } from "./services/cartStorage";
import { createHtmlCartItems } from "./pages/createHtmlCartItems";
import { payBtn } from "./components/payBtn";
import { updateCartBadge } from "./utils/cartIconQuantity";

mobileMenu();

//anrop funktion - skapa html för mainProductCard på landing-page för att kunna lägga objektet i varukorgen
createHtmlMainProductCard();

const cart = loadCart();
updateCartBadge(cart);

// Klick-event för köp-knappen på landingsite
document.getElementById("buyBtnBig")?.addEventListener("click", () => {
  // Adderar en klickhändelse till köpknappen
  const updatedCart = addToCart(products[0]); // Adderar huvudprodukten till varukorgen
  console.log("Varukorg:", updatedCart); // Loggar den uppdaterade varukorgen till konsolen
  updateCartBadge(updatedCart);
});

//detta gör HTML för produkter synligt på produktsidan.
const productPageContainer = document.getElementById("productPageContainer");
if (productPageContainer !== null) {
  productPageContainer.appendChild(createHtmlProductPage(products));
}

initProductPageCart(); // Initierar köpknappar på produktsidan

showMoreHandleClick();

// Ladda varukorgen om vi är på shoppingCart-sidan
const cartItemsContainer = document.getElementById("cartItems");
if (cartItemsContainer) {
  const cart = loadCart();
  createHtmlCartItems(cart);
}

//Knappen "Gå till kassan" i varukorgen. Vid klick skickas man till "Kassa" sidan.
goToCheckoutBtn();

// Popup vid klick på betalaknappen i kassan
payBtn();
