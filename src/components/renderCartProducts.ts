import type { CartItem } from "../models/CartItem";

export const renderCartProducts = (item: CartItem) => {
  //Hela produkten
  const cartProduct = document.createElement("div");
  cartProduct.className = "cartProduct";
  //Produktbilden
  const img = document.createElement("img");
  img.className = "cartImg";
  img.src = item.product.image;
  img.alt = item.product.name;
  //Skapar en div där info om produkten ska vara
  const cartInfo = document.createElement("div");
  cartInfo.className = "cartInfo";
  //Produktsnamn P
  const productName = document.createElement("p");
  productName.className = "productName";
  productName.textContent = item.product.name;
  //Produktsinfo P
  const productInfo = document.createElement("p");
  productInfo.className = "productInfo";
  productInfo.textContent = item.product.info;

  cartInfo.appendChild(productName);
  cartInfo.appendChild(productInfo);
  cartProduct.appendChild(img);
  cartProduct.appendChild(cartInfo);

  return cartProduct;
};
