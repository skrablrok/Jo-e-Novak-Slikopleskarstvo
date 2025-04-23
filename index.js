let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}



window.onscroll = function() { stickyNavbar() };

var navbar = document.querySelector(".nav_bar"); // Select the navbar element
var sticky = navbar.offsetTop; // Get the initial offset position of the navbar

function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky"); // Add the sticky class when scroll past the navbar
    } else {
        navbar.classList.remove("sticky"); // Remove the sticky class when at the top
    }
}









const card1 = document.getElementById("flipCard1");

card1.addEventListener("mouseenter", () => {
    card1.classList.add("flipped");
});

card1.addEventListener("mouseleave", () => {
    card1.classList.remove("flipped");
});


const card2 = document.getElementById("flipCard2");

card2.addEventListener("mouseenter", () => {
    card2.classList.add("flipped");
});

card2.addEventListener("mouseleave", () => {
    card2.classList.remove("flipped");
});

const card3 = document.getElementById("flipCard3");

card3.addEventListener("mouseenter", () => {
    card3.classList.add("flipped");
});

card3.addEventListener("mouseleave", () => {
    card3.classList.remove("flipped");
});

const card4 = document.getElementById("flipCard4");

card4.addEventListener("mouseenter", () => {
    card4.classList.add("flipped");
});

card4.addEventListener("mouseleave", () => {
    card4.classList.remove("flipped");
});


const card5 = document.getElementById("flipCard5");

card5.addEventListener("mouseenter", () => {
    card5.classList.add("flipped");
});

card5.addEventListener("mouseleave", () => {
    card5.classList.remove("flipped");
});


const card6 = document.getElementById("flipCard6");

card6.addEventListener("mouseenter", () => {
    card6.classList.add("flipped");
});

card6.addEventListener("mouseleave", () => {
    card6.classList.remove("flipped");
});































const scrollContainer = document.getElementById('horizontal-scroll');
let isScrolling = false;
let targetScrollLeft = 0;

scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prepreči privzeto pomikanje

    // Hitrost pomikanja
    const speedFactor = 5; // Povečaj hitrost pomikanja
    const scrollAmount = event.deltaY * speedFactor;

    // Nastavi ciljno pozicijo pomikanja
    targetScrollLeft = scrollContainer.scrollLeft + scrollAmount;

    // Preveri, ali smo dosegli konec horizontalnega pomikanja
    if (targetScrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        // Preklopi na navpično pomikanje
        window.scrollBy({
            top: event.deltaY,
            behavior: 'smooth'
        });
    } else if (targetScrollLeft <= 0 && scrollAmount < 0) {
        // Preklopi na navpično pomikanje, ko pomikamo navzgor in smo na začetku
        window.scrollBy({
            top: event.deltaY,
            behavior: 'smooth'
        });
    } else {
        // Začnite gladko pomikanje
        smoothScroll();
    }
});

function smoothScroll() {
    if (isScrolling) return; // Prepreči večkratno zagon funkcije

    isScrolling = true;

    // Funkcija za animacijo
    function animateScroll() {
        const currentScrollLeft = scrollContainer.scrollLeft;

        // Izračunaj razliko
        const distance = targetScrollLeft - currentScrollLeft;

        // Pomikamo se le, če je razlika večja od 1 (za gladko animacijo)
        if (Math.abs(distance) > 1) {
            scrollContainer.scrollLeft += distance * 0.1; // Prilagodi faktor za hitrost
            requestAnimationFrame(animateScroll); // Ponovno pokliči za naslednji frame
        } else {
            // Ko dosežemo ciljno pozicijo, ustavi animacijo
            scrollContainer.scrollLeft = targetScrollLeft;
            isScrolling = false;
        }
    }

    animateScroll(); // Začni animacijo
}