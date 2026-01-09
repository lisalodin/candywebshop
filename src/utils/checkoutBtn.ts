const buyBtn = document.getElementById("buyBtn") as HTMLButtonElement;

if (buyBtn) {
  buyBtn.addEventListener("click", () => {
    window.location.href = "/src/pages/checkout.html";
  });
}
