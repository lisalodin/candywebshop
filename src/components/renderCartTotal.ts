export const renderCartTotal = (total: number) => {

  const cartTotalWrapper = document.createElement("div");
  cartTotalWrapper.className = "cartTotalWrapper";

  const cartTotalText = document.createElement("span");
  cartTotalText.className = "cartTotalText";

  const cartTotalPrice = document.createElement("span");
  cartTotalPrice.className = "cartTotalPrice";

  cartTotalText.textContent = "Total summa: ";
  cartTotalPrice.textContent = `${total.toFixed(2)} kr`;

  cartTotalWrapper.appendChild(cartTotalText);
  cartTotalWrapper.appendChild(cartTotalPrice);

  return cartTotalWrapper;
};
