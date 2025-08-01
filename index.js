"use strict";

// ===========================
// Animación de entrada (Hero)
// ===========================
anime
  .timeline({ easing: "easeOutExpo", duration: 800 })
  .add({
    targets: ".hero-title",
    opacity: [0, 1],
    translateY: [-40, 0],
  })
  .add({
    targets: ".hero-subtitle",
    opacity: [0, 1],
    translateY: [40, 0],
    offset: "-=400",
  });

// ===========================
// Scroll suave en el botón
// ===========================
const discoverBtn = document.querySelector(".btn-primary");
discoverBtn?.addEventListener("click", () => {
  document
    .getElementById("feature-title")
    ?.scrollIntoView({ behavior: "smooth" });
});

// ===========================
// Animaciones al hacer scroll
// ===========================
const animatedElements = document.querySelectorAll(".card, .reason-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 1000,
          easing: "easeOutExpo",
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach((el) => {
  el.style.opacity = 0;
  observer.observe(el);
});

// Validacion de nombre y mensaje de éxito

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    const contactName = document.getElementById("nombre");

    const name = contactName.value.trim();
    const partes = name.split(/\s+/);
    const regex = /^[A-Za-zÁÉÍÓÚÑáéíóúñ]{2,}$/;
    const isValid =
      partes.length >= 2 && partes.every((parte) => regex.test(parte));

    if (!isValid) {
      e.preventDefault();
      alert("Por favor ingresa tu nombre completo (nombre y apellido).");
      name.focus();
      return;
    }

    alert(
      "Sus datos han sido enviados con éxito, en unos momentos nos contactaremos con usted. Gracias!"
    );
  });

// ===========================
// Búsqueda con resultados fake (desde search bar)
// ===========================
const searchForm = document.querySelector("form");
const input = searchForm?.querySelector("input[type='text");

searchForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = input?.value.trim();
  if (!query) return;

  // Mostrar spinner opcional
  let spinner = document.querySelector(".spinner");
  if (!spinner) {
    spinner = document.createElement("div");
    spinner.className = "spinner";
    spinner.innerHTML = `<div class="loader"></div>`;
    searchForm.appendChild(spinner);
  }
  spinner.style.display = "block";

  setTimeout(() => {
    spinner.style.display = "none";
    const encodedQuery = encodeURIComponent(query);
    window.location.href = `resultados.html?q=${encodedQuery}`;
  }, 1000);
});
