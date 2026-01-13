import { products } from "./data/products";
import "./styles/style.scss";
import { mobileMenu } from "./utils/mobileMenu";
import { showMoreHandleClick } from "./utils/showmoreBtn";
import "./utils/checkoutBtn";
import { mainProductContainer } from "./utils/mainProductContainer";
import { addToCart } from "./utils/addToCart";
import "./utils/showmoreBtn";

mobileMenu(); 

mainProductContainer(); 

document.getElementById("buyBtnBig")?.addEventListener("click", () => { // Adderar en klickhändelse till köpknappen
    const updatedCart = addToCart(products[0]); // Adderar huvudprodukten till varukorgen
  console.log("Varukorg:", updatedCart); // Loggar den uppdaterade varukorgen till konsolen
});


showMoreHandleClick();