// DARK MODE
function toggleMode() {
    document.body.classList.toggle("dark");
}

// TYPING EFFECT
const text = "Siddhi Bulbule";
let i = 0;
function typeEffect() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// NAVBAR ACTIVE
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (scrollY >= top) current = section.id;
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

    // REVEAL ANIMATION
    document.querySelectorAll(".reveal").forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 50) {
            el.classList.add("active");
        }
    });
});

// POPUP
function openImage(src) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-img").src = src;
}

function closeImage() {
    document.getElementById("popup").style.display = "none";
}
