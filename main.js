// Wait until DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {

  // ---------------- MENU TOGGLE ----------------
  const menu = document.querySelector(".menu-icon");
  const navbar = document.querySelector(".navbar");

  if (menu && navbar) {
    menu.onclick = () => {
      menu.classList.toggle("move");
      navbar.classList.toggle("open-menu");
    };

    // Close menu on scroll
    window.addEventListener("scroll", () => {
      menu.classList.remove("move");
      navbar.classList.remove("open-menu");
    });
  }

  // ---------------- DATE SETUP ----------------
  const startDateInput = document.getElementById("start-date");
  const returnDateInput = document.getElementById("return-date");

  if (startDateInput && returnDateInput) {
    const today = new Date();
    startDateInput.value = today.toISOString().split("T")[0];

    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + 7);
    returnDateInput.value = returnDate.toISOString().split("T")[0];
  }

  // ---------------- SCROLL ANIMATION ----------------
  if (typeof ScrollReveal !== "undefined") {
    const animate = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    animate.reveal(".nav, .heading");
    animate.reveal(".home-img img", { origin: "right" });
    animate.reveal(".input-form", { origin: "bottom" });
    animate.reveal(".rental-box", { interval: 100 });
  }

  // ---------------- AUTH SECTIONS ----------------
  window.showregister = function () {
    const loginSection = document.getElementById("login-section");
    const registerSection = document.getElementById("register-section");
    if (loginSection && registerSection) {
      loginSection.style.display = "none";
      registerSection.style.display = "flex";
    }
  };

  window.showlogin = function () {
    const loginSection = document.getElementById("login-section");
    const registerSection = document.getElementById("register-section");
    if (loginSection && registerSection) {
      registerSection.style.display = "none";
      loginSection.style.display = "flex";
    }
  };

  window.showregisteralert = function () {
    const registeralert = document.getElementById("alertbox");
    if (!registeralert) return;

    registeralert.style.display = "block";

    setTimeout(() => {
      registeralert.style.display = "none";
      window.showlogin();
    }, 4000);
  };

  // ---------------- FORM VALIDATION ----------------
  const registerForm = document.getElementById("registerform");
  const registerBtn = document.getElementById("registerbtn");

  if (registerForm && registerBtn) {
    const updateButtonState = () => {
      if (registerForm.checkValidity()) {
        registerBtn.disabled = false;
        registerBtn.style.opacity = "1";
        registerBtn.style.cursor = "pointer";
      } else {
        registerBtn.disabled = true;
        registerBtn.style.opacity = "0.5";
        registerBtn.style.cursor = "not-allowed";
      }
    };

    // Initial state
    updateButtonState();

    // Listen for changes
    registerForm.addEventListener("input", updateButtonState);
  }


  const loginForm = document.getElementById("loginsection");
  const loginBtn = document.getElementById("loginbtn");

  if (loginForm && loginBtn) {
    const updateLoginButtonState = () => {
      loginBtn.disabled = !loginForm.checkValidity();
    };

    updateLoginButtonState();
    loginForm.addEventListener("input", updateLoginButtonState);
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      window.showregisteralert();
    });
  }

});
