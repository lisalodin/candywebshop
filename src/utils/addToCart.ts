import type { Product } from "../models/Product";
import { createHtmlShoppingCart } from "./createHtmlShoppingCart";

const shoppingCart: Product[] = [];

export const addToCart = (products: Product[]) => {
    products.forEach((product: Product, i) => {
        shoppingCart.push(products[i]);
        createHtmlShoppingCart(product);
    });
};