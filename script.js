function toggleMode() {
    document.body.classList.toggle("dark");
}
function openImage(src) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-img").src = src;
}

function closeImage() {
    document.getElementById("popup").style.display = "none";
}
let currentPage = 0;
const imagesPerPage = 4;

const gallery = document.querySelectorAll("#gallery img");

function showPage() {
    gallery.forEach(img => img.style.display = "none");

    let start = currentPage * imagesPerPage;
    let end = start + imagesPerPage;

    for (let i = start; i < end && i < gallery.length; i++) {
        gallery[i].style.display = "block";
    }
}

function nextPage() {
    if ((currentPage + 1) * imagesPerPage < gallery.length) {
        currentPage++;
        showPage();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage();
    }
}

function openImage(src) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-img").src = src;
}

function closeImage() {
    document.getElementById("popup").style.display = "none";
}

showPage();
