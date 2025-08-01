// 1️⃣ Toggle Between Monthly / Yearly Pricing
const toggle = document.getElementById('billing-toggle');
const prices = document.querySelectorAll('.price');

toggle.addEventListener('change', () => {
    prices.forEach(price => {
    price.textContent = toggle.checked
      ? price.dataset.annually  // If toggle is ON
      : price.dataset.monthly;  // If toggle is OFF
    });
});

//scroll button
const scrollBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

//Animate Cards on Scroll
const cards = document.querySelectorAll(".card");

function animateCardsOnScroll() {
const windowHeight = window.innerHeight;

cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < windowHeight - 50) {
    card.classList.add("visible");
    }
});
}
window.addEventListener("scroll", animateCardsOnScroll);
window.addEventListener("load", animateCardsOnScroll);

//highlight card
let card1 = document.querySelectorAll(".card");

card1.forEach(function(card) {
    card.addEventListener("click", function() {
    // Remove highlight from all cards
    card1.forEach(c => c.classList.remove("selected"));

    // Add highlight to clicked card
    card.classList.add("selected");
});
});