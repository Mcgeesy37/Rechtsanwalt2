// script.js
const revealItems = document.querySelectorAll("[data-reveal]");
const siteHeader = document.getElementById("siteHeader");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const floatingWhatsapp = document.getElementById("floatingWhatsapp");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => observer.observe(item));

if (siteHeader || floatingWhatsapp) {
  document.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 24;
    const isDeepScroll = window.scrollY > 240;

    if (siteHeader) {
      siteHeader.classList.toggle("scrolled", isScrolled);
    }

    if (floatingWhatsapp) {
      floatingWhatsapp.classList.toggle("compact", isDeepScroll);
    }
  }, { passive: true });
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Danke. Ihre Anfrage wurde in der Vorschau erfasst. Auf Wunsch binden wir den Live-Versand als naechsten Schritt an.";
  });
}
