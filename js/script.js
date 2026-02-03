
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let totalSlides;

// Function to determine the number of slides
function updateTotalSlides() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 480) {
      // Mobile devices
      totalSlides = 8;
    } else if (screenWidth <= 1024) {
      // Tablets
      totalSlides = 4;
    } else {
      // Desktop devices
      totalSlides = 3;
    }
  }

// Function to move the slider
function moveSlider() {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Listen for window resize events to update slides dynamically
window.addEventListener('resize', updateTotalSlides);

// Initial setup
updateTotalSlides();
setInterval(moveSlider, 3000); // Slide every 3 seconds

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  alert("Right-click is disabled on this page.");
});