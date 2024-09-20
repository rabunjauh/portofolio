const navToggle = document.querySelector(".nav-toggle");
const menuLinks = document.querySelector(".menu-links");

navToggle.addEventListener("click", function () {
  menuLinks.classList.toggle("show");
});
