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

let navbarOpened = false;
let navbarScrolledPanel = document.querySelector(".scrolled-navbar-panel");
function openNav() {

  navbarScrolledPanel.classList.remove("fadeOut");
  navbarScrolledPanel.classList.add("fadeIn");
  navbarScrolledPanel.style.display = "block";
  navbarOpened = true;
}

//close navbar
function closeNav() {
  navbarScrolledPanel.classList.remove("fadeIn");
  navbarScrolledPanel.classList.add("fadeOut");

  setTimeout(() => {
    navbarScrolledPanel.style.display = "none";
    navbarOpened = false;
  }, 500);
}

window.addEventListener("scroll", () => {
  if (navbarOpened) {
    closeNav();
  }
});


let buttonContainers = document.querySelectorAll(".button-container");

buttonContainers.forEach((container) => {
  let arrowButton = container.querySelector("img");

  container.addEventListener("mouseover", () => {
    arrowButton.style.opacity = "1";
  });

  container.addEventListener("mouseout", () => {
    arrowButton.style.opacity = "0";
  });
});

