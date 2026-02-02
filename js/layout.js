document.addEventListener("DOMContentLoaded", () => {

  // Load navbar
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // After navbar loads → attach hamburger logic
      const hamburger = document.querySelector(".hamburger");
      const menu = document.querySelector(".menu");

      if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
          menu.classList.toggle("active");
        });
      }
    });

  // Load footer
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

});
