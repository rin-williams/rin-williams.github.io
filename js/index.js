function initNavbarScrollBehavior(panelSelector, hamburgerSelector) {
  let navbarScrolled = document.querySelector(".scrolled-navbar");
  let navbar = document.querySelector(".navbar");
  let navbarUpButton = document.querySelector(".navbar-upButton");
  let navbarScrolledPanel = document.querySelector(panelSelector);
  let hamburgerIcon = document.querySelector(hamburgerSelector);
  let navbarOpened = false;

  function openNav() {
    navbarScrolledPanel.classList.remove("fadeOut");
    navbarScrolledPanel.classList.add("fadeIn");
    navbarScrolledPanel.style.display = "block";
    navbarOpened = true;

    hamburgerIcon.classList.remove("fadeIn");
    hamburgerIcon.classList.add("fadeOut");
    navbarUpButton.style.opacity = "0";
  }

  function closeNav() {
    navbarScrolledPanel.classList.remove("fadeIn");
    navbarScrolledPanel.classList.add("fadeOut");
    hamburgerIcon.classList.remove("fadeOut");
    hamburgerIcon.classList.add("fadeIn");
    navbarUpButton.classList.remove("fadeOut");
    navbarUpButton.classList.add("fadeIn");
    navbarUpButton.style.opacity = "0.5";

    setTimeout(() => {
      navbarScrolledPanel.style.display = "none";

      navbarOpened = false;
    }, 500);
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 950) {
      navbarScrolled.style.display = "block";
      navbarScrolled.classList.remove("fadeOut");
      navbarScrolled.classList.add("fadeIn");
      navbarScrolled.style.zIndex = "1000";
      if (!navbar.classList.contains("fadeOut")) {
        navbar.classList.remove("fadeIn");
        navbar.classList.add("fadeOut");
        setTimeout(() => {
          navbar.style.display = "none";
        }, 500);
      }
    } else {
      navbarScrolled.classList.remove("fadeIn");
      navbarScrolled.classList.add("fadeOut");
      navbarScrolled.style.zIndex = "-1";
      if (navbar.style.display === "none") {
        navbar.style.display = "flex";
        navbar.classList.remove("fadeOut");
        navbar.classList.add("fadeIn");
      }
    }

    if (navbarOpened) {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (navbarOpened) {
      closeNav();
    }
  });

  window.addEventListener("click", (e) => {
    if (
      navbarOpened &&
      e.target !== navbarScrolledPanel &&
      e.target !== hamburgerIcon
    ) {
      closeNav();
    }
  });

  hamburgerIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    if (navbarOpened) {
      closeNav();
    } else {
      openNav();
    }
  });
}
initNavbarScrollBehavior(".scrolled-navbar-panel", ".hamburger-icon");
initNavbarScrollBehavior(".title-navbar-panel", ".title-hamburger-icon");
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
