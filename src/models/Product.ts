export class Product {
    image: string;
    name: string;
    info: string;
    price: number;

    constructor (image: string, name: string, info: string, price: number) {
        this.image = image;
        this.name = name;
        this.info = info;
        this.price = price;
    }
}