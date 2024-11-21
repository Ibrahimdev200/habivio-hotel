// JavaScript to change hero image randomly
const heroBackground = document.querySelector('.hero-background');

// Array of images
const heroImages = [
    'img/image-1.jpg',
    'img/home_slide1.jpg',
    'img/image-3.jpg',
    'img/image-4.jpg'
];

// Function to set a random image
function setRandomImage() {
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    heroBackground.style.backgroundImage = `url(${heroImages[randomIndex]})`;
}

// Change image every 5 seconds
setInterval(setRandomImage, 5000);

// Set the first image on load
setRandomImage();


// Placeholder for future enhancements
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active'); 
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// Adding functionality to close the menu when clicking outside of it
window.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});




