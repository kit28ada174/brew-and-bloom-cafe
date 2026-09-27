// ============================
// DARK MODE
// ============================

function toggleTheme() {

    document.body.classList.toggle("dark");

    const button = document.querySelector(".theme-btn");

    if (document.body.classList.contains("dark")) {

        button.innerHTML = "☀";

    } else {

        button.innerHTML = "☾";

    }

}


// ============================
// ORDER BUTTON
// ============================

let cartCount = 0;


function orderItem(itemName) {

    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;

    alert(
        "☕ " + itemName +
        " has been added to your order!"
    );

}


// ============================
// OFFER BUTTON
// ============================

function claimOffer() {

    alert(
        "🎉 Offer Claimed!\n\n" +
        "Show this message at Brew & Bloom\n" +
        "to get 20% OFF before 11 AM."
    );

}


// ============================
// NAVBAR SHADOW
// ============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// ============================
// MENU FILTER
// ============================

function filterMenu(category) {

    const cards = document.querySelectorAll(".menu-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");

    cards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}