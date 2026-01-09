import { products } from "./data/products";
import "./styles/style.scss";
import { addToCart } from "./utils/addToCart";
import { mobileMenu } from "./utils/mobileMenu";

mobileMenu();

document.getElementById("buyBtnBig")?.addEventListener("click", () => {
    addToCart(products);
});

