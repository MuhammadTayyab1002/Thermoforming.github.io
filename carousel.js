// carousel.js – one image at a time with dots & captions

// List of actual GUI images (add/remove as needed)
const images = [
    { src: "/assets/Landing.png", caption: "Landing Page" },
    { src: "/assets/Preheating.png", caption: "Preheating Page" },
    { src: "/assets/Heating.png", caption: "Heating Page" },
    { src: "/assets/Cooling.png", caption: "Cooling Page" },
    { src: "/assets/Manual.png", caption: "Manual Mode" },
    { src: "/assets/Parameter.png", caption: "Parameter Page" }
];

let currentIndex = 0;

// DOM elements
const imgElement = document.querySelector(".carousel-img");
const captionElement = document.getElementById("imageCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dotsContainer");

// Helper: update image and caption
function updateCarousel() {
    const item = images[currentIndex];
    imgElement.src = item.src;
    imgElement.alt = item.caption;
    captionElement.textContent = item.caption;

    // update active dot
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        if (i === currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

// Create dot indicators
function createDots() {
    dotsContainer.innerHTML = "";
    images.forEach((_, idx) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (idx === currentIndex) dot.classList.add("active");
        dot.addEventListener("click", () => {
            currentIndex = idx;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    });
}

// Next button
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

// Previous button
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

// Event listeners
prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

// Optional: keyboard left/right arrows
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
});

// Initialize
createDots();
updateCarousel();