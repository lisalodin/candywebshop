import type { Product } from "../models/Product";
import { addToCart } from "../services/addToCart";
import { updateCartBadge } from "./cartIconQuantity";

// Startar funktionaliteten för köpknappar på produktmodalen
export const initProductDetailsCart = (product: Product) => {
  const buyButton = document.querySelector(".buyBtnDetails");

  buyButton?.addEventListener("click", () => {
    const updatedCart = addToCart(product);
    updateCartBadge(updatedCart);
    console.log(`Lade till ${product.name} i varukorgen`);
  });
};