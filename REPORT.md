# 📌 Rättningsrapport – fed25s-the-webshop-superawesometeamname

## 🎯 Uppgiftens Krav:
# The Webshop - En inlämningsuppgift

Denna uppgift går ut på att ni skall bygga en webbshop baserat på kraven här under.
Projektet är ett vite-projekt med vanilla/typescript.
Målet är att studenterna skall förstå vad som krävs för att skicka information mellan sidor, använda localStorage och kunna manipulera data i listor och objekt.

## VIKTIGT

Varukorgen skall vara en lista med objekt som baseras på en ny klass eller datatyp. Denna klass/datatyp skall innehålla en produkt men också hur många av denna produkt som varukorgen har. Ibland kan det behövas mer information i detta objekt, men minst skall klassen innhålla produkt och antal på något sätt.

## Teknik

- HTML
- SCSS
- TypeScript

## Krav - Betyg G

- En landningssida (startsida)
- En produktsida (Produktdetaljer)
- En kassasida
- En varukorg
- Kunna lägga produkter i varukorgen
- Simulera att ett köp genomförs på kassasidan
- Beräkna fram ett totalpris på produkterna i varukorgen
- Att informationen i varukorgen lagras genom utökade objekt, inte bara en produkt
- Att kunna öka/minska antalet produkter i varukorgen.
- Att kunna öka/minska antalet produkter på kassasidan
- Koden skall vara mycket väl strukturerad, väl formaterad samt innehålla god namngivning

Majoriteten av dessa G-krav skall vara uppfyllda för att få betyg G.

## Styling

Försök att arbeta med så mycket styling ni hinner. Det är en rolig uppgift att ha med i ett portfolio framöver. Se till att era animationer är subtila. Arbeta med hero-images, kanske med lite video/ljud. Och skapa en bra struktur mer er scss redan från början.

## Krav för styling

Det är inget krav att video och ljud används.
Partials bör användas.
Mixins skall användas om möjligt, t.ex. för mediaqueries.
Ingen dubbelstyling, används mixins i sådana fall.

## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed25s-the-webshop-superawesometeamname\src\components\renderCartQuantity.ts - no-unused-vars - 'shoppingCart' is defined but never used.
- C:\Work\AssignmentCorrector\backend\repos\fed25s-the-webshop-superawesometeamname\src\components\renderCartRemove.ts - no-unused-vars - 'shoppingCart' is defined but never used.
- C:\Work\AssignmentCorrector\backend\repos\fed25s-the-webshop-superawesometeamname\src\main.ts - no-console - Unexpected console statement.
- C:\Work\AssignmentCorrector\backend\repos\fed25s-the-webshop-superawesometeamname\src\pages\createHtmlProductPage.ts - no-unused-vars - 'card' is assigned a value but never used.,@typescript-eslint/no-unused-vars - 'card' is assigned a value but never used.
- C:\Work\AssignmentCorrector\backend\repos\fed25s-the-webshop-superawesometeamname\src\utils\cartActions.ts - no-unused-vars - 'cart' is defined but never used.,no-unused-vars - 'cart' is defined but never used.,no-unused-vars - 'cart' is defined but never used.
- C:\Work\AssignmentCorrector\backend\repos\fed25s-the-webshop-superawesometeamname\src\utils\filterProducts.ts - no-unused-vars - 'products' is defined but never used.,@typescript-eslint/no-unused-vars - 'products' is defined but never used.
- C:\Work\AssignmentCorrector\backend\repos\fed25s-the-webshop-superawesometeamname\src\utils\productDetailsCart.ts - no-console - Unexpected console statement.
- C:\Work\AssignmentCorrector\backend\repos\fed25s-the-webshop-superawesometeamname\src\utils\productPageCart.ts - no-console - Unexpected console statement.

## 🏆 **Betyg: G**
📌 **Motivering:** Projektet uppfyller majoriteten av G-kraven för webbshoppen i Vite + vanilla TypeScript: ni har en landningssida, produktsida, varukorg och kassasida. Varukorgen lagras i localStorage och representeras korrekt som utökade objekt (CartItem med product + quantity), vilket matchar kärnkravet om att inte bara spara produkter rakt av. Det går att lägga till produkter i varukorgen, ändra antal (öka/minska) och ta bort, och totalpris beräknas och renderas. Kassaflödet simulerar ett köp och tömmer varukorgen efter genomförd betalning. Styling är strukturerad med SCSS-partials och mixins (bl.a. för media queries), vilket ligger i linje med stylingkraven.

En viktig brist är att kravet "Att kunna öka/minska antalet produkter på kassasidan" inte är uppfyllt i nuvarande implementation: checkout-sammanfattningen renderas utan kontroller för att ändra quantity. Trots detta är helheten funktionell och majoriteten av kraven är uppfyllda, vilket motiverar betyget G.

💡 **Förbättringsförslag:**  
1) Implementera +/- även på kassasidan (checkout): renderCheckoutPriceSummary.ts behöver UI-kontroller för quantity och återanvändning av samma uppdateringslogik som i varukorgen (uppdatera localStorage och re-rendera sammanfattning + totalsumma).

2) Åtgärda showMore-buggen: i src/components/showmoreBtn.ts anropas showMoreHandleClick() direkt vid import, vilket togglar UI vid sidladdning och kan ge fel initialt läge. Ta bort det direkta anropet och initiera state via CSS eller en tydlig init-funktion.

3) Rensa importmönster och side effects: undvik att både side-effect-importera och named-importera samma modul (t.ex. goToCheckoutBtn/showmoreBtn). Välj ett konsekvent mönster för bättre struktur och förutsägbarhet.

4) Koppla produkter robust: initProductPageCart.ts/initProductPageDetails.ts använder index-koppling mot products-arrayen, vilket kan bli fel om DOM-ordning ändras. Använd data-attribut (data-product-id) och slå upp produkt via id istället.

5) Minska XSS-risk och förbättra rendering: där ni använder innerHTML för produktdata (t.ex. renderProductDetails.ts/createHtmlMainProductCard.ts), byt till textContent för textfält och bygg DOM-noder programmässigt.

6) Separera data och UI: addToCart.ts triggar UI-rendering oavsett sida. Dela upp i (a) uppdatera cart i storage och (b) rendera UI endast där container finns/vid sidans init.

7) Små kodkvalitetsfixar: byt ovanliga loopar (t.ex. for (let i = 0; i === 0; i++)) till mer läsbara uttryck, ta bort oanvända variabler (t.ex. card i createHtmlProductPage.ts), och lägg guards där DOM-element kan saknas (t.ex. null-check innan innerHTML i initCartSum.ts).

8) Förbättra sök-UX: initSearchProduct.ts kan trigga modal flera gånger om flera matchar. Begränsa till första match eller visa en resultatlista.

Fortsätt så—ni har en stabil grund med rätt data-modell för varukorgen, fungerande flöden och bra SCSS-struktur. Med checkout-quantity på plats och lite städning i init/importer kommer detta kännas riktigt proffsigt.

## 👥 Gruppbidrag

| Deltagare | Antal commits | Commit % | Uppgiftskomplettering | Totalt bidrag |
| --------- | -------------- | -------- | ---------------------- | ------------- |
| Lisa Lodin | 25 | 32.5% | 0.25 | 0.28 |
| jesperringhog | 19 | 24.7% | 0.25 | 0.25 |
| Your Name | 17 | 22.1% | 0.25 | 0.24 |
| WilmaErikssonIllustrations | 16 | 20.8% | 0.25 | 0.23 |


### 📊 Förklaring
- **Antal commits**: Antalet commits som personen har gjort
- **Commit %**: Procentuell andel av totala commits
- **Uppgiftskomplettering**: Poäng baserad på mappning av README-krav mot kodbidrag 
- **Totalt bidrag**: Viktad bedömning av personens totala bidrag (40% commits, 60% uppgiftskomplettering)
