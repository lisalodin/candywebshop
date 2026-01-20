import { showProductDetails } from "../components/showProductDetails";
import { products } from "../data/products";

// Funktion som skapar HTML för huvudproduktkortet
export const createHtmlMainProductCard = () => {
    const main = document.getElementById("main");
  
  for (let i = 0; i === 0; i++) {
    const productContainer = document.createElement("div");
    const productDetailsContainer = document.createElement("div");
    const productName = document.createElement("h4");
    const productInfo = document.createElement("p");
    const productPrice = document.createElement("p");
    const button = document.createElement("button");
 
    if (!main) return;
    main.style.backgroundImage = `url(${products[i].image}`;
    productContainer.id = "productContainer";
    productDetailsContainer.className = "productDetailsContainer";
    productName.innerHTML = products[i].name;
    productInfo.innerHTML = products[i].info;
    productPrice.className = "priceBig";
    productPrice.innerHTML = `${products[i].price.toString()}0:-/hg`;
    button.id = "buyBtnBig";
    button.innerHTML = "Köp";

    // Funktion för att visa produktdetaljer vid klick på produktnamnet
    productName.addEventListener("click", () => {
      showProductDetails(products[i]);
    });
 
    productDetailsContainer.appendChild(productName);
    productDetailsContainer.appendChild(productInfo);
    productDetailsContainer.appendChild(productPrice);
    productContainer.appendChild(productDetailsContainer);
    productContainer.appendChild(button);
    
    main?.appendChild(productContainer);
  }
}

