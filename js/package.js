const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'booking.html'; // Replace 'booking.html' with your booking page URL
    });
});

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  alert("Right-click is disabled on this page.");
});

