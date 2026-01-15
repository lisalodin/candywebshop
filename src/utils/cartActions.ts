import type { CartItem } from "../models/CartItem";
import { saveCart } from "./cartStorage";
import { updateCartBadge } from "./cartIconQuantity";

export const increaseQuantity = (
  cart: CartItem[],
  index: number,
  render: (cart: CartItem[]) => void
) => {
  cart[index].quantity++;
  saveCart(cart);
  render(cart);
};

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
};

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
