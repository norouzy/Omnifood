//set curent year

const yearEl = document.querySelector(".year-copyright");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("open");
});
