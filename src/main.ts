import { products } from "./data/products";
import "./styles/style.scss";
import { mobileMenu } from "./utils/mobileMenu";
import { showMoreHandleClick } from "./utils/showmoreBtn";
import "./utils/checkoutBtn";
import { createHtmlMainProductCard } from "./utils/createHtmlMainProductCard";
import { checkoutBtn } from "./utils/checkoutBtn";
import { createHtmlProductPage } from "../src/utils/createHtmlProductPage";
import { addToCart } from "./utils/addToCart";
import "./utils/showmoreBtn";
import { initProductPageCart } from "./utils/productPageCart";
import { loadCart } from "./utils/cartStorage";
import { createHtmlCartItems } from "./utils/createHtmlCartItems";


mobileMenu();

//anrop funktion - skapa html för mainProductCard på landing-page för att kunna lägga objektet i varukorgen
createHtmlMainProductCard();

//lista för varukorgen där de klickade produkt-objekten kommer läggas till
// const shoppingCart: Product[] = []; //LÄGG TILLBAKA EFTER TEST

showMoreHandleClick();

//Knappen "Gå till kassan" i varukorgen. Vid klick skickas man till "Kassa" sidan.
checkoutBtn();

//detta gör HTML för produkter synligt på produktsidan.
const main = document.querySelector("main");
if (main) {
  main.appendChild(createHtmlProductPage(products));
}

// Klick-event för köp-knappen på produktsidan
document.getElementById("buyBtnBig")?.addEventListener("click", () => {
  // Adderar en klickhändelse till köpknappen
  const updatedCart = addToCart(products[0]); // Adderar huvudprodukten till varukorgen
  console.log("Varukorg:", updatedCart); // Loggar den uppdaterade varukorgen till konsolen
});

//klick-event för köp-knappen på landing page
// document.getElementById("buyBtnBig")?.addEventListener("click", () => {
//anrop funktion landing-page - lägg till produkt från produkt-listan(products) till varukorg(shoppingCart)
//mainAddToCart(products, shoppingCart);
// });

initProductPageCart(); // Initierar varukorgen på produktsidan

// Ladda varukorgen om vi är på shoppingCart-sidan
const cartItemsContainer = document.getElementById("cartItems");
if (cartItemsContainer) {
  const cart = loadCart();
  createHtmlCartItems(cart);
}