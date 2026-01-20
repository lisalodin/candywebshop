import { products } from "../data/products";
import { showProductDetails } from "./showProductDetails";

export const initSearchProduct = () => {
  const searchInput = document.getElementById("searchInput");

  let searchText = "";
  if (searchInput) {
    searchText = (searchInput as HTMLInputElement).value;
  }

  products.forEach((product) => {
    if (
      product.name.toLowerCase().includes(searchText.toLowerCase()) ||
      product.details.toLowerCase().includes(searchText.toLowerCase())
    ) {
      showProductDetails(product);
    }
  });

  if (searchText) {
    (searchInput as HTMLInputElement).value = "";
  }
};
