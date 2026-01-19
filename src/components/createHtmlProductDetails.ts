import { products } from "../data/products";
import { Product } from "../models/Product";
import { addToCart } from "../services/addToCart";
import { updateCartBadge } from "../utils/cartIconQuantity";

export const createHtmlProductDetails = (product: Product) => {
  const productContainer = document.getElementById("extDetailsContainer");

  if (!productContainer) return;
  productContainer.innerHTML = "";

  const detailsContainer = document.createElement("div");
  const image = document.createElement("div");
  const name = document.createElement("h4");
  const info = document.createElement("p");
  const price = document.createElement("p");
  const button = document.createElement("button");
  const extInfo = document.createElement("p");

  detailsContainer.className = "detailsContainer";
  image.className = "imgContainer";
  image.style.backgroundImage = `url(${product.image})`;
  name.className = "name";
  name.innerHTML = product.name;
  info.className = "info";
  info.innerHTML = product.info;
  price.className = "price";
  price.innerHTML = `${product.price.toString()}0:-/hg`;
  button.className = "button";
  button.innerHTML = "Köp";

  button.addEventListener("click", () => {
    const updatedCart = addToCart(products[0]);
      console.log("Varukorg:", updatedCart);
      updateCartBadge(updatedCart);
  })

  extInfo.className = "extInfo";
  extInfo.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quidem ullam impedit natus cumque reprehenderit dolore rerum dignissimos optio eveniet.";

  detailsContainer.appendChild(name);
  detailsContainer.appendChild(info);
  detailsContainer.appendChild(price);
  detailsContainer.appendChild(button);
  detailsContainer.appendChild(extInfo);
  productContainer?.appendChild(image);
  productContainer?.appendChild(detailsContainer);
};
