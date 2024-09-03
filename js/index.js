let navbarScrolled = document.querySelector(".navbar-scrolled");

window.addEventListener("scroll", () => {
  if (window.scrollY > 125) {
    navbarScrolled.style.display = "flex";
    navbarScrolled.classList.remove("fadeOut");
    navbarScrolled.classList.add("fadeIn");
    navbarScrolled.style.zIndex = "1000";
  } else {
    navbarScrolled.classList.remove("fadeIn");
    navbarScrolled.classList.add("fadeOut");
    navbarScrolled.style.zIndex = "-1";
  }
});
