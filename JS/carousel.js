// Get the carousel items and navigation buttons
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Set the active carousel item
let activeItem = 0;

// Function to show the next carousel item
function showNextItem() {
    carouselItems[activeItem].classList.remove('active');
    activeItem = (activeItem + 1) % carouselItems.length;
    carouselItems[activeItem].classList.add('active');
}

// Function to show the previous carousel item
function showPrevItem() {
    carouselItems[activeItem].classList.remove('active');
    activeItem = (activeItem - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[activeItem].classList.add('active');
}

// Add event listeners to the navigation buttons
prevButton.addEventListener('click', showPrevItem);
nextButton.addEventListener('click', showNextItem);

// Add event listener to the window to detect scroll events
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const carouselHeight = carouselContainer.offsetHeight;
    const itemHeight = carouselItems[0].offsetHeight;

if (scrollPosition > carouselHeight - itemHeight) {
    showNextItem();
} else if (scrollPosition < itemHeight) {
    showPrevItem();
}
});

// Set the first item as active when the page loads
carouselItems[0].classList.add('active');