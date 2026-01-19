import { Product } from "../models/Product";

export const renderProductDetails = (product: Product) => {
  const modalContainer = document.getElementById("modalContainer");
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
  button.className = "buyBtnDetails";
  button.innerHTML = "Köp";

  extInfo.className = "extInfo";
  extInfo.innerHTML = product.details;

  detailsContainer.appendChild(name);
  detailsContainer.appendChild(info);
  detailsContainer.appendChild(extInfo);
  detailsContainer.appendChild(price);
  detailsContainer.appendChild(button);
  productContainer?.appendChild(image);
  productContainer?.appendChild(detailsContainer);
  modalContainer?.appendChild(productContainer);
};
