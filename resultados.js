"use strict";

// Función para obtener parámetros de la URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Función para mostrar los resultados animados
function mostrarResultados(query) {
  const resultsContainer = document.querySelector(".search-results");

  if (!resultsContainer) return;

  resultsContainer.innerHTML = `
  <h2>Resultados para: <span>${query}</span></h2>
  <div class="results-grid">
    <div class="result-card">

    </div>
  </div>
`;

  // Animación con Anime.js
  anime({
    targets: ".result-card",
    opacity: [0, 1],
    translateY: [30, 0],
    delay: anime.stagger(150),
    duration: 700,
    easing: "easeOutCubic",
  });
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const query = getQueryParam("q");
  if (query) {
    mostrarResultados(query);
  } else {
    const resultsContainer = document.querySelector(".search-results");
    if (resultsContainer) {
      resultsContainer.innerHTML = "<p>No se ingresó ninguna búsqueda.</p>";
    }
  }
});
