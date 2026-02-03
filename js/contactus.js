emailjs.init("YOUR_PUBLIC_KEY"); 

function sendMail() {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    tel: document.getElementById("tel").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully!");
      document.querySelector("form[name='contactus']").reset(); // Clear form
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("Failed to send message. Error: " + JSON.stringify(error));
    });

  return false;
}

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  alert("Right-click is disabled on this page.");
});
