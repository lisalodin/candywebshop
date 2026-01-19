import { Product } from "../models/Product";
import { createHtmlProductDetails } from "./createHtmlProductDetails";

export const showProductDetails = (product: Product) => {
  const productModal = document.getElementById("productModal");
  if (!productModal) return;

  const productDetails = productModal as HTMLDialogElement;
  productDetails.showModal();
  
  createHtmlProductDetails(product);

  document.getElementById("closeModal")?.addEventListener("click", () => {
    productDetails.close();
  });
};
