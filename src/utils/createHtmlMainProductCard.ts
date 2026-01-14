import { products } from "../data/products";

//JESPER: bör ligga i mapp - pages/

//funktion - skapa html för produkten på landing-page
export const createHtmlMainProductCard = () => {
    const main = document.getElementById("main");
    const mainProductName = document.getElementById("mainProductName");
    const mainProductInfo = document.getElementById("mainProductInfo");
    const mainProductPrice = document.getElementById("mainProductPrice");

    if (!main) return;
    main.style.backgroundImage = `url(${products[0].image})`;

    if (!mainProductName) return;
    mainProductName.innerHTML = products[0].name;

    if (!mainProductInfo) return;
    mainProductInfo.innerHTML = products[0].info;

    if (!mainProductPrice) return;
    mainProductPrice.innerHTML = `${products[0].price.toString()}0:-/hg`;
}