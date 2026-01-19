import { showProductDetails } from "../components/showProductDetails";
import { products } from "../data/products";

// Startar funktionaliteten för produktdetaljer på produktsidan
export const initProductPageDetails = () => {
  const cardNames = document.querySelectorAll(".productCardName");

  // Lägg till klickhändelse för varje produktbild
  cardNames.forEach((image, index) => {
    image.addEventListener("click", () => {
      if (products[index]) {
        showProductDetails(products[index]);
      }
    });
  });
};
