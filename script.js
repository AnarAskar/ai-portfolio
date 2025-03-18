// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Contact form submission
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Add your form submission logic here
    const formData = new FormData(this);
    console.log("Form submitted:", Object.fromEntries(formData));

    // Show success message
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
  });

  // Sticky navigation
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(255,255,255,0.95)";
    } else {
      navbar.style.backgroundColor = "#fff";
    }
  });
});
