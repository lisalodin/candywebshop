//klass för varje produkt-objekt och vilka egenskaper det har
export class Product {
  image: string;
  name: string;
  info: string;
  price: number;
  details: string;

  constructor(
    image: string,
    name: string,
    info: string,
    price: number,
    details: string
  ) {
    this.image = image;
    this.name = name;
    this.info = info;
    this.price = price;
    this.details = details;
  }
}
