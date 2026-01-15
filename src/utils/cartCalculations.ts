import type { CartItem } from "../models/CartItem";

export const getItemTotalPrice = (item: CartItem): number => {
  return item.product.price * item.quantity;
};

export const getCartTotalPrice = (cart: CartItem[]): number => {
  return cart.reduce((sum, item) => {
    return sum + getItemTotalPrice(item);
  }, 0);
};

export const getCartTotalQuantity = (cart: CartItem[]): number => {
  return cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
};

