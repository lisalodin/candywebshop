import { products } from "./data/products";
import "./styles/style.scss";
import { mobileMenu } from "./utils/mobileMenu";
import { showMoreHandleClick } from "./utils/showmoreBtn";
import "./utils/goToCartBtn";
import { createHtmlMainProductCard } from "./utils/createHtmlMainProductCard";
import { goToCartBtn } from "./utils/goToCartBtn";
import { createHtmlProductPage } from "../src/utils/createHtmlProductPage";
import { addToCart } from "./utils/addToCart";
import "./utils/showmoreBtn";
import { initProductPageCart } from "./utils/productPageCart";
import { loadCart } from "./utils/cartStorage";
import { createHtmlCartItems } from "./utils/createHtmlCartItems";
import { payBtn } from "./utils/payBtn";


mobileMenu();

//anrop funktion - skapa html för mainProductCard på landing-page för att kunna lägga objektet i varukorgen
createHtmlMainProductCard();

//lista för varukorgen där de klickade produkt-objekten kommer läggas till
// const shoppingCart: Product[] = []; //LÄGG TILLBAKA EFTER TEST

showMoreHandleClick();

//Knappen "Gå till kassan" i varukorgen. Vid klick skickas man till "Kassa" sidan.
goToCartBtn();

// Popup vid klick på betalaknappen i kassan
payBtn();

//detta gör HTML för produkter synligt på produktsidan.
const productPageContainer = document.getElementById("productPageContainer");
if (productPageContainer !== null) {
  productPageContainer.appendChild(createHtmlProductPage(products))
};

// Klick-event för köp-knappen på landingsite
document.getElementById("buyBtnBig")?.addEventListener("click", () => {
  // Adderar en klickhändelse till köpknappen
  const updatedCart = addToCart(products[0]); // Adderar huvudprodukten till varukorgen
  console.log("Varukorg:", updatedCart); // Loggar den uppdaterade varukorgen till konsolen
});
//JESPER: flytta upp under createHtmlMainProduct


initProductPageCart(); // Initierar köpknappar på produktsidan
//JESPER: flytta upp under createHtmlProductPage 

// Ladda varukorgen om vi är på shoppingCart-sidan
const cartItemsContainer = document.getElementById("cartItems");
if (cartItemsContainer) {
  const cart = loadCart();
  createHtmlCartItems(cart);
}