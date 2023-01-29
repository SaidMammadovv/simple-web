const sections = document.querySelectorAll("main > section");
const navLinks = document.querySelectorAll("nav a");

let currentSection = 0;

function changeSection() {
  sections[currentSection].classList.remove("active");
  currentSection = (currentSection + 1) % sections.length;
  sections[currentSection].classList.add("active");
  updateNav();
}

function updateNav() {
  navLinks.forEach(link => link.classList.remove("active"));
  navLinks[currentSection].classList.add("active");
}

navLinks.forEach((link, index) => {
  link.addEventListener("click", e => {
    e.preventDefault();
    sections[currentSection].classList.remove("active");
    currentSection = index;
    sections[currentSection].classList.add("active");
    updateNav();
  });
});

setInterval(changeSection, 3000);


