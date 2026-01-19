import { Product } from "../models/Product";

//lista med alla produkt-objekt som vi behöver använda när vi skapar html 
//ex: products[i].name (kolla models/Product för att se egenskaps-namn)
export const products: Product[] = [
    new Product(
        "/src/assets/produktbilder/surakarameller.jpg",
        "Zing-Zong Zour",
        "Sensationellt sura!",
        8.9
    ),
    new Product(
        "/src/assets/produktbilder/polkaklubba.jpg",
        "Swirly Polka",
        "Nostalgiskt god klubba",
        12.9
    ),
    new Product(
        "/src/assets/produktbilder/fruity.jpg",
        "Farmors Fruity",
        "Njut av en klassiker",
        8.9
    ),
    new Product(
        "/src/assets/produktbilder/fizzy.jpg",
        "Fizzy Bombz",
        "Med sprudlande smak!",
        8.9
    ),
    new Product(
        "/src/assets/produktbilder/suraremmar.jpg",
        "Sour Swirls",
        "Svindlande goda!",
        8.9
    ),
    new Product(
        "/src/assets/produktbilder/mashmallows.jpg",
        "Marshmallows",
        "Fantastiskt fluffiga",
        12.9
    ),
    new Product(
        "/src/assets/produktbilder/hjartan.jpg",
        "Kärlekshjärtan",
        "Sprider kärlek",
        8.9
    ),
    new Product(
        "/src/assets/produktbilder/bonor.jpg",
        "Dream Beans",
        "Runda, söta & fina",
        8.9
    ),
    new Product(
        "/src/assets/produktbilder/banana-toffee.jpg",
        "Bubbs",
        "Banan & toffee",
        8.9
    ),
    new Product(
        "/src/assets/produktbilder/saltavral.jpg",
        "Saltvrål",
        "Supersalt!",
        8.9
    )
    ,
    new Product(
        "/src/assets/produktbilder/hallonlakrits2.jpg",
        "Rasporish Rolls",
        "Lagom salt & sött",
        8.9
    )
    ,
    new Product(
        "/src/assets/produktbilder/saltaskallar2.jpg",
        "Salty Skulls",
        "Saltiga favoriter",
        8.9
    )
];
