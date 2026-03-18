import { Product } from "../models/Product";

// Funktion för att filtrera produkter baserat på kategori
export function filterProductsByCategory(products: Product[], category: string): Product[] {
    return products.filter(product => product.category === category);
}

// Funktion för att hantera knappklick och filtrera produktkort i DOM
export function setupCategoryFilters() {
    const sweetBtn = document.getElementById("sott");
    const sourBtn = document.getElementById("surt");
    const saltBtn = document.getElementById("salt");

    const productGrid1 = document.getElementById("productCardGrid");
    const productGrid2 = document.getElementById("productCardGrid2");
    const showMoreBtnContainer = document.getElementById("showMoreBtnContainer");
    const showMoreBtn = document.getElementById("showMoreBtn");

    if (!productGrid1 || !productGrid2 || !showMoreBtn) return; 

    // Återställ visningen av produktkort
    productGrid2.classList.remove("expanded");;
    showMoreBtn.textContent = "Visa Mer";

    // Funktion för att filtrera och visa produkter baserat på vald kategori
    const filterProducts = (category: string) => {
        [productGrid1, productGrid2].forEach(grid => {
            Array.from(grid.children).forEach(card => {
                const el = card as HTMLElement;
                const cardCategory = el.getAttribute("data-category");
                if (cardCategory === category) {
                    productGrid2.classList.add("expanded");
                    el.classList.remove("hidden");
                    showMoreBtn.classList = ("hidden");
                } else {
                    el.classList.add("hidden");
                }
            });
        });

        if (showMoreBtnContainer) showMoreBtnContainer.classList.add("hidden");
    };

    sweetBtn?.addEventListener("click", () => filterProducts("sött"));
    sourBtn?.addEventListener("click", () => filterProducts("surt"));
    saltBtn?.addEventListener("click", () => filterProducts("salt"));
};