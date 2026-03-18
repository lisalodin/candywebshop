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
import { setupCategoryFilters } from "./utils/filterProducts";
import { initProductPageDetails } from "./utils/productPageDetails";
import { renderCheckoutPriceSummary } from "./components/renderCheckoutPriceSummary";
import { initSearchProduct } from "./components/initSearchProduct";

// Initierar mobilmenyn
mobileMenu();

// händelse när man gör en submit (enter) i sökformuläret
document.getElementById("searchForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  initSearchProduct(); //anropar funktionen för att söka efter en produkt
});

//anropa funktionen för att skapa html för mainProductCard
createHtmlMainProductCard();

// Uppdaterar varukorgsikonen med antal objekt vid sidladdning
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

// Initierar produktdetaljer på produktsidan
initProductPageDetails();

 // Initierar köpknappar på produktsidan
initProductPageCart(); 

// Visa fler-knapp på landningssidan
showMoreHandleClick();

// Ladda varukorgen om vi är på shoppingCart-sidan
const cartItemsContainer = document.getElementById("cartItems");
if (cartItemsContainer) {
  const cart = loadCart();
  createHtmlCartItems(cart);
}

//Knappen "Gå till kassan" i varukorgen. Vid klick skickas man till "Kassasidan".
goToCheckoutBtn();

// Tillbaka-knapp till varukorgen
document.getElementById("backToCartBtn")?.addEventListener("click", () => {
  window.location.href = "/shoppingCart.html";
});

// Visar summering på checkout-sidan
renderCheckoutPriceSummary();

// Popup vid klick på betalaknappen i kassan
payBtn();

// Filtrering av produkter efter kategori på landningssidan
setupCategoryFilters();