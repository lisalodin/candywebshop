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

mobileMenu();

//anrop funktion - skapa html för mainProductCard på landing-page för att kunna lägga objektet i varukorgen
createHtmlMainProductCard();

//lista för varukorgen där de klickade produkt-objekten kommer läggas till
// const shoppingCart: Product[] = []; //LÄGG TILLBAKA EFTER TEST

showMoreHandleClick();

//Knappen "Gå till kassan" i varukorgen. Vid klick skickas man till "Kassa" sidan.
checkoutBtn();

//detta gör HTML för produkter synligt på produktsidan.
const productPageContainer = document.getElementById("productPageContainer");
if (productPageContainer !== null) {
  productPageContainer.appendChild(createHtmlProductPage(products))
};

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
