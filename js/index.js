let navbarScrolled = document.querySelector(".scrolled-navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 125) {
    navbarScrolled.style.display = "block";
    navbarScrolled.classList.remove("fadeOut");
    navbarScrolled.classList.add("fadeIn");
    navbarScrolled.style.zIndex = "1000";
  } else {
    navbarScrolled.classList.remove("fadeIn");
    navbarScrolled.classList.add("fadeOut");
    navbarScrolled.style.zIndex = "-1";
  }
});

// open navbar
let navbarScrolledPanel = document.querySelector(".scrolled-navbar-panel");
function openNav() {
  navbarScrolledPanel.classList.remove("fadeOut");
  navbarScrolledPanel.classList.add("fadeIn");
  navbarScrolledPanel.style.display = "block";
}

//close navbar
function closeNav() {
  navbarScrolledPanel.classList.remove("fadeIn");
  navbarScrolledPanel.classList.add("fadeOut");
  // add delay to close the navbar
  setTimeout(() => {
    navbarScrolledPanel.style.display = "none";
  }, 500);
}

// if user scrolls close the navbar
window.addEventListener("scroll", () => {
  closeNav();
});
