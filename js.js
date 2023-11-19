

document.addEventListener("DOMContentLoaded", function () {
  // Navbar toggle
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbar = document.getElementById("navbar");

  navbarToggler.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  // Smooth scrolling for navigation links
  var navLinks = document.querySelectorAll("a.nav-link");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      event.preventDefault();

      var targetId = this.hash.substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        var offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Card animation in the Top Section
  var topSectionCards = document.querySelectorAll(".top-section .card");

  topSectionCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.transition = "transform 0.3s";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.transition = "transform 0.3s";
    });
  });

});
