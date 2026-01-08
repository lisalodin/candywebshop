import type { Product } from "../models/Product";

const shoppingCartContainer = document.getElementById("shoppingCartContainer");

export const createHtmlShoppingCart = (product: Product) => {
  const name = document.createElement("h5");
  name.innerHTML = product.name;
  shoppingCartContainer?.appendChild(name);
};
