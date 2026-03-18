import { Product } from "../models/Product";

//lista med alla produkt-objekt som vi behöver använda när vi skapar html 
//ex: products[i].name (kolla models/Product för att se egenskaps-namn)
export const products: Product[] = [
    new Product(
        "/assets/produktbilder/surakarameller.jpg",
        "Zing-Zong Zour",
        "Sensationellt sura!",
        8.9,
        "surt",
        "Superduper-sur godis som får kinderna att dra ihop sig och mungiporna att le. Varning: kittelfeeling!"
    ),
    new Product(
        "/assets/produktbilder/polkaklubba.jpg",
        "Swirly Polka",
        "Nostalgiskt god klubba",
        12.9,
        "sött",
        "Snurrig klubba i glada färger med polkasmak. Ser ut som en karusell, smakar som ett skratt."
    ),
    new Product(
        "/assets/produktbilder/fruity.jpg",
        "Farmors Fruity",
        "Njut av en klassiker",
        8.9,
        "sött",
        "Fruktigt mjukisar som smakar tryggt, glatt och lite busigt. Farmor hade absolut godkänt… efter en provsmak."
    ),
    new Product(
        "/assets/produktbilder/fizzy.jpg",
        "Fizzy Bombz",
        "Med sprudlande smak!",
        8.9,
        "surt",
        "Plopp! Små godisbitar som bubblar, fräser och överraskar. Som fyrverkerier i munnen – fast godare."
    ),
    new Product(
        "/assets/produktbilder/suraremmar.jpg",
        "Sour Swirls",
        "Svindlande goda!",
        8.9,
        "surt",
        "Snurrigt surt godis med maximal syra och minimal självkontroll. Läppar i putläge garanteras."
    ),
    new Product(
        "/assets/produktbilder/mashmallows.jpg",
        "Marshmallows",
        "Fantastiskt fluffiga",
        12.9,
        "sött",
        "Mjuka moln av socker som studsar rakt in i munnen. Fluffigare än en dröm på sockervadd."
    ),
    new Product(
        "/assets/produktbilder/hjartan.jpg",
        "Kärlekshjärtan",
        "Sprider kärlek",
        8.9,
        "sött",
        "Små hjärtan med söta budskap och ännu sötare smak. Perfekta att dela… eller behålla själv."
    ),
    new Product(
        "/assets/produktbilder/bonor.jpg",
        "Dream Beans",
        "Runda, söta & fina",
        8.9,
        "sött",
        "Färgglada bönor fulla av knasiga smaker. Varje näve är ett nytt äventyr för smaklökarna."
    ),
    new Product(
        "/assets/produktbilder/banana-toffee.jpg",
        "Bubbs",
        "Banan & toffee",
        8.9,
        "sött",
        "Segt, studsigt skumgodis med banan och toffee. Smakar som om de två blev bästa vänner."
    ),
    new Product(
        "/assets/produktbilder/saltavral.jpg",
        "Saltvrål",
        "Supersalt!",
        8.9,
        "salt",
        "Saltlakrits som vrålar högt i munnen. För dig som gillar när godis inte ber om ursäkt."
    )
    ,
    new Product(
        "/assets/produktbilder/hallonlakrits2.jpg",
        "Rasporish Rolls",
        "Lagom salt & sött",
        8.9,
        "salt",
        "Busiga hallon med en nypa salt. Sött, salt och alldeles för lätt att äta upp."
    )
    ,
    new Product(
        "/assets/produktbilder/saltaskallar2.jpg",
        "Salty Skulls",
        "Saltiga favoriter",
        8.9,
        "salt",
        "Små dödskallar med stor lakritspersonlighet. Läskigt goda och helt omöjliga att motstå."
    )
];
