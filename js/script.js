// DROPDOWN
const featureDropdown = document.getElementById("featureDropdown");
const dropdownContent = featureDropdown.querySelector(".dropdown-content");

featureDropdown.addEventListener("click", function (event) {
  dropdownContent.classList.toggle("show");
});

document.addEventListener("click", function (event) {
  if (!featureDropdown.contains(event.target)) {
    dropdownContent.classList.remove("show");
  }
});
// CAROUSEL
const carousel = document.querySelector(".carousel");
const cards = document.querySelector(".carousel-cards");
const cardWidth = document.querySelector(".carousel-card").offsetWidth;
let position = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  position -= cardWidth;
  if (position < -(cardWidth * 2)) {
    position = 0;
  }

  document.querySelector(
    ".carousel-cards > .carousel-card:nth-child(4)"
  ).style.display = "block";

  cards.style.transform = `translateX(${position}px)`;
});

document.getElementById("prevBtn").addEventListener("click", () => {
  position += cardWidth;
  if (position > 0) {
    position = -(cardWidth * 2);
  }
  cards.style.transform = `translateX(${position}px)`;
});
