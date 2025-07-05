// Esconde o spinner global quando a página terminar de carregar
function hideGlobalSpinner() {
  const globalSpinner = document.getElementById('global-spinner');
  if (globalSpinner) {
    globalSpinner.remove();
    return true;
  }
  return false;
}

// Esconde o spinner em diferentes momentos para garantir
document.addEventListener('DOMContentLoaded', hideGlobalSpinner);
window.addEventListener('load', hideGlobalSpinner);
setTimeout(hideGlobalSpinner, 2000);

// Funções utilitárias para spinners locais
function showSpinner(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('d-none');
}
function hideSpinner(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('d-none');
}

// Quando o DOM carregar, inicializa tudo
document.addEventListener('DOMContentLoaded', function() {
  // Esconde spinners locais
  if (document.querySelector('.navbar')) hideSpinner('navbar-spinner');
  if (document.querySelector('.hero')) hideSpinner('hero-spinner');
  if (document.querySelector('#carouselExampleCaptions')) hideSpinner('carousel-spinner');

  // Inicializa lightGallery se existir
  const galeria = document.getElementById('lightgallery');
  if (galeria && typeof lightGallery === "function") {
    lightGallery(galeria, {
      plugins: [lgThumbnail, lgZoom],
      speed: 400,
    });
  }

  // Inicializa galeria de miniaturas se existir
  const mainImage = document.getElementById('mainImage');
  const miniaturas = document.querySelectorAll('.miniatura');
  
  if (mainImage && miniaturas.length > 0) {
    miniaturas.forEach(function(mini) {
      mini.addEventListener('click', function() {
        // Troca a imagem principal
        mainImage.src = this.dataset.full;
        mainImage.alt = this.alt;

        // Atualiza o destaque da miniatura
        miniaturas.forEach(m => m.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }
});