document
    .getElementById("showMoreBtn")
    ?.addEventListener("click", showMoreHandleClick);

export function showMoreHandleClick() {
    const showMoreBtnContainer = document.getElementById("showMoreBtnContainer");
    const showMoreBtn = document.getElementById("showMoreBtn");
    const productCardGrid2 = document.getElementById("productCardGrid2");

    if (!showMoreBtn || !productCardGrid2 || !showMoreBtnContainer) return;

    showMoreBtn.classList.toggle("expanded");
    showMoreBtnContainer.classList.toggle("expanded");
    const isExpanded = productCardGrid2.classList.toggle("expanded");

    showMoreBtn.textContent = isExpanded
        ? "Visa Mindre"
        : "Visa Mer";

    if (isExpanded) {
        productCardGrid2.parentElement?.appendChild(showMoreBtnContainer);
    } else {
        productCardGrid2.parentElement?.insertBefore(showMoreBtnContainer, productCardGrid2);
    }

}

showMoreHandleClick();





