import type { CartItem } from "../models/CartItem";

export const updateCartBadge = (shoppingCart: CartItem[]) => {
    const totalQuantity = shoppingCart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const cartIcons = document.getElementsByClassName("cartIcon");

    Array.from(cartIcons).forEach((icon) => {
        // ta bort gammal badge
        icon.querySelector(".shoppingCartNumberContainer")?.remove();

        if (totalQuantity > 0) {
            const badge = document.createElement("div");
            badge.className = "shoppingCartNumberContainer";
            badge.textContent = totalQuantity.toString();

            icon.appendChild(badge);
        }
    });
};
