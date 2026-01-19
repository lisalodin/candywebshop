import { Product } from "../models/Product";
import { initProductDetailsCart } from "../utils/productDetailsCart";
import { renderProductDetails } from "./renderProductDetails";

export const showProductDetails = (product: Product) => {
  const productModal = document.getElementById("productModal");
  if (!productModal) return;

  const productDetails = productModal as HTMLDialogElement;
  productDetails.showModal();

  document.getElementById("closeModal")?.addEventListener("click", () => {
    productDetails.close();
  });

  renderProductDetails(product);
  initProductDetailsCart(product);
};
