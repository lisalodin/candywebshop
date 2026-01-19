import { Product } from "../models/Product";

//lista med alla produkt-objekt som vi behöver använda när vi skapar html 
//ex: products[i].name (kolla models/Product för att se egenskaps-namn)
export const products: Product[] = [
    new Product(
        "/src/assets/produktbilder/surakarameller.jpg",
        "Zing-Zong Zour",
        "Sensationellt sura!",
        8.9,
        "Superduper-sur godis som får kinderna att dra ihop sig och mungiporna att le. Varning: kittelfeeling!"
    ),
    new Product(
        "/src/assets/produktbilder/polkaklubba.jpg",
        "Swirly Polka",
        "Nostalgiskt god klubba",
        12.9,
        "Snurrig klubba i glada färger med polkasmak. Ser ut som en karusell, smakar som ett skratt."
    ),
    new Product(
        "/src/assets/produktbilder/fruity.jpg",
        "Farmors Fruity",
        "Njut av en klassiker",
        8.9,
        "Fruktigt mjukisar som smakar tryggt, glatt och lite busigt. Farmor hade absolut godkänt… efter en provsmak."
    ),
    new Product(
        "/src/assets/produktbilder/fizzy.jpg",
        "FizzyBombz",
        "Med sprudlande smak!",
        8.9,
        "Plopp! Små godisbitar som bubblar, fräser och överraskar. Som fyrverkerier i munnen – fast godare."
    ),
    new Product(
        "/src/assets/produktbilder/suraremmar.jpg",
        "SourSwirls",
        "Svindlande goda!",
        8.9,
        "Snurrigt surt godis med maximal syra och minimal självkontroll. Läppar i putläge garanteras."
    ),
    new Product(
        "/src/assets/produktbilder/mashmallows.jpg",
        "Marshmallows",
        "Fantastiskt fluffiga",
        12.9,
        "Mjuka moln av socker som studsar rakt in i munnen. Fluffigare än en dröm på sockervadd."
    ),
    new Product(
        "/src/assets/produktbilder/hjartan.jpg",
        "Lovehearts",
        "Sprider kärlek",
        8.9,
        "Små hjärtan med söta budskap och ännu sötare smak. Perfekta att dela… eller behålla själv."
    ),
    new Product(
        "/src/assets/produktbilder/bonor.jpg",
        "Dreambeans",
        "Runda, söta & fina",
        8.9,
        "Färgglada bönor fulla av knasiga smaker. Varje näve är ett nytt äventyr för smaklökarna."
    ),
    new Product(
        "/src/assets/produktbilder/banana-toffee.jpg",
        "Bubbs",
        "Banan & toffee",
        8.9,
        "Segt, studsigt skumgodis med banan och toffee. Smakar som om de två blev bästa vänner."
    ),
    new Product(
        "/src/assets/produktbilder/saltavral.jpg",
        "Saltvrål",
        "Supersalt!",
        8.9,
        "Saltlakrits som vrålar högt i munnen. För dig som gillar när godis inte ber om ursäkt."
    )
    ,
    new Product(
        "/src/assets/produktbilder/hallonlakrits2.jpg",
        "Salta Hallon",
        "Lagom salt & sött",
        8.9,
        "Busiga hallon med en nypa salt. Sött, salt och alldeles för lätt att äta upp."
    )
    ,
    new Product(
        "/src/assets/produktbilder/saltaskallar2.jpg",
        "SaltSkulls",
        "Saltiga favoriter",
        8.9,
        "Små dödskallar med stor lakritspersonlighet. Läskigt goda och helt omöjliga att motstå."
    )
];
