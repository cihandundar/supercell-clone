document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search");
  const inputElement = document.getElementById("input");

  searchIcon.addEventListener("click", function () {
    inputElement.classList.toggle("hidden");
    inputElement.style.top = "30px";
  });
});

const initSlider = () => {
  const slideBox = document.querySelector(
    ".section-slider-container .section-slider-conmtainer-wrapper"
  );
  const slideButtons = document.querySelectorAll(
    ".section-slider-container .slide-button"
  );
  const maxScrollLeft = slideBox.scrollWidth - slideBox.clientWidth;
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === `prev-slide` ? -1 : 1;
      const scrollAmount = slideBox.clientWidth * direction;
      slideBox.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButton = () => {
    slideButtons[0].style.display = slideBox.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display =
      slideBox.scrollLeft >= maxScrollLeft ? "none" : "block";
  };

  slideBox.addEventListener("scroll", () => {
    handleSlideButton();
  });
};

window.addEventListener("load", initSlider);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  if (navMenu.classList.contains("active")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});
