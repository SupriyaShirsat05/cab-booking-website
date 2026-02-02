const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

const moveSlider = () => {
    const slideWidth = slides[0].clientWidth;
    sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    currentIndex = (currentIndex + 1) % slides.length;
};

// Automatically slide every 3 seconds
setInterval(moveSlider, 3000);

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  alert("Right-click is disabled on this page.");
});