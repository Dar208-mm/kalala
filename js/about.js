// ================================================
// Manejo de Interacción para el Menú Emergente
// ================================================
// Este bloque de código permite alternar la visibilidad de un menú emergente.
// Cuando el usuario hace clic en el botón 'menuToggle', se alterna la clase 'open'
// en el contenedor del menú, mostrando o escondiendo el menú según su estado.

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el botón que sirve para activar el menú emergente
    const menuToggle = document.getElementById('menuToggle');
    
    // Selecciona el contenedor del menú emergente
    const popupMenu = document.getElementById('popupMenu');
    
    // Se agrega un evento de clic al botón 'menuToggle'
    menuToggle.addEventListener('click', () => {
      // Alterna la clase 'open' en el contenedor del menú,
      // lo que activa o desactiva su visibilidad
      popupMenu.classList.toggle('open');
    });
  });
  