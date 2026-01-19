import type { CartItem } from "../models/CartItem";
import { saveCart } from "../services/cartStorage";
import { updateCartBadge } from "./cartIconQuantity";

// funktion för att addera antal produkter
export const increaseQuantity = (
  cart: CartItem[],
  index: number,
  render: (cart: CartItem[]) => void
) => {
  cart[index].quantity++;
  saveCart(cart);
  render(cart);
};

// funktion för att minska antal produkter
export const decreaseQuantity = (
  cart: CartItem[],
  index: number,
  render: (cart: CartItem[]) => void
) => {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }
  saveCart(cart);
  render(cart);
  updateCartBadge(cart);
};

// funktion för att ta bort produkt
export const removeItem = (
  cart: CartItem[],
  index: number,
  render: (cart: CartItem[]) => void
) => {
  cart.splice(index, 1);
  saveCart(cart);
  render(cart);
  updateCartBadge(cart);
};
