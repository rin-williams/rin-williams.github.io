function initNavbarScrollBehavior(panelSelector, hamburgerSelector) {
  let navbarScrolled = document.querySelector(".scrolled-navbar");
  let navbarScrolledPanel = document.querySelector(panelSelector);
  let hamburgerIcon = document.querySelector(hamburgerSelector);
  let navbarOpened = false;

  function openNav() {
    navbarScrolledPanel.classList.remove("fadeOut");
    navbarScrolledPanel.classList.add("fadeIn");
    navbarScrolledPanel.style.display = "block";
    navbarOpened = true;
  }

  function closeNav() {
    navbarScrolledPanel.classList.remove("fadeIn");
    navbarScrolledPanel.classList.add("fadeOut");

    setTimeout(() => {
      navbarScrolledPanel.style.display = "none";
      navbarOpened = false;
    }, 500);
  }

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
