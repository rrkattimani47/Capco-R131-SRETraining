document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (name === "" || email === "" || message === "") {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    formMsg.textContent = "Please enter a valid email address.";
    formMsg.style.color = "red";
  } else {
    formMsg.textContent = "Message sent successfully!";
    formMsg.style.color = "green";
    // Optionally reset form
    document.getElementById("contactForm").reset();
  }
});
