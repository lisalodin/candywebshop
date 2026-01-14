import { Product } from "../models/Product";

//lista med alla produkt-objekt som vi behöver använda när vi skapar html 
//ex: products[i].name (kolla models/Product för att se egenskaps-namn)
export const products: Product[] = [
    new Product(
        "/src/assets/produktbilder/surakarameller.jpg",
        "Zing-Zong Zour",
        "Sensationellt sura!",
        8.90
    ),
    new Product(
        "/src/assets/produktbilder/polkaklubba.jpg",
        "Swirly Polka",
        "Nostalgiskt god klubba",
        29
    ),
    new Product(
        "/src/assets/produktbilder/fruity.jpg",
        "Farmors Fruity",
        "Njut av en klassiker",
        8.9
    ),
    new Product(
        "/src/assets/produktbilder/fizzy.jpg",
        "FizzyBombz",
        "Med sprudlande smak!",
        8.9
    ),
    new Product(
        "/src/assets/produktbilder/suraremmar.jpg",
        "SourSwirls",
        "Svindlande goda!",
        8.9
    ),
    new Product(
        "/src/assets/produktbilder/mashmallows.jpg",
        "Marshmallows",
        "Fantastiskt fluffiga",
        8.9
    ),
    new Product(
        "/src/assets/produktbilder/hjartan.jpg",
        "Lovehearts",
        "Sprider kärlek",
        8.9
    ),
    new Product(
        "/src/assets/produktbilder/bonor.jpg",
        "Dreambeans",
        "Runda, söta & fina",
        8.9
    )
];
