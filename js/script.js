//set curent year

const yearEl = document.querySelector(".year-copyright");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
