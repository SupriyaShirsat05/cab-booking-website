const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Right-click is disabled on this page.");
});