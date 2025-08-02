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

//animation on scroll
const observer = new IntersectionObserver((entries) =>
    {
        entries.forEach((entry) =>
            {
                console.log(entry);
                if (entry.isIntersecting)
                {
                    entry.target.classList.add('show');
                }else
                    {
                        entry.target.classList.remove('show');
                }
        })
})

const hiddenElmt = document.querySelectorAll('.card');
hiddenElmt.forEach((el) => observer.observe(el));

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
