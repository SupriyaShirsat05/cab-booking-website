const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Function to send booking details via WhatsApp
function sendWhatsApp() {
    // Get all form data
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var pickup = document.getElementById('pickup').value;
    var drop = document.getElementById('drop').value;
    var people = document.getElementById('people').value;
    var carType = document.getElementById('carType').value;

    // Prepare the message to send via WhatsApp
    var message = `Booking Details:
    Name: ${name}
    Contact: ${contact}
    Email: ${email}
    Pick-up: ${pickup}
    Drop-off: ${drop}
    Number of People: ${people}
    Car Type: ${carType}`;

    // WhatsApp URL for opening the chat with the pre-filled message
    var whatsappUrl = `https://wa.me/919000000000?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new window or tab
    window.open(whatsappUrl, '_blank');
}


document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  alert("Right-click is disabled on this page.");
});