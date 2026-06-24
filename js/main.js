// PROJECT FILTER FUNCTIONALITY

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

if (filterButtons.length > 0 && projectCards.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      projectCards.forEach((card) => {
        const categories = card.dataset.category;

        if (selectedFilter === "all" || categories.includes(selectedFilter)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// CONTACT FORM DEMO FUNCTIONALITY

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.classList.add("show");
    contactForm.reset();
  });
}
// MOBILE MENU

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
      mobileMenuBtn.textContent = "×";
      mobileMenuBtn.setAttribute("aria-label", "Close menu");
    } else {
      mobileMenuBtn.textContent = "☰";
      mobileMenuBtn.setAttribute("aria-label", "Open menu");
    }
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      mobileMenuBtn.textContent = "☰";
      mobileMenuBtn.setAttribute("aria-label", "Open menu");
    });
  });
}