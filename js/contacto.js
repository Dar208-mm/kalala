// ================================================
// Ejemplo de Interacción o Futura Funcionalidad
// ================================================
// Este bloque de código maneja eventos de clic en elementos de la página
// y funciones que podrían ser utilizadas en una futura ampliación del proyecto.

// ================================================
// 1. Manejo del clic en el número de teléfono
// ================================================
// Este bloque escucha el evento de clic sobre el número de teléfono,
// y muestra un mensaje en la consola para indicar que se ha hecho clic.

document.addEventListener('DOMContentLoaded', () => {
    const phone = document.getElementById('phone');  // Selecciona el elemento con el ID 'phone'
    phone.addEventListener('click', () => {
      console.log('Número de contacto clickeado');  // Muestra un mensaje en la consola
    });
  });
  
  // ================================================
  // 2. Integración de un mapa de Google Maps
  // ================================================
  // Este bloque crea un iframe con el mapa de Google Maps, lo configura
  // y lo inserta en el contenedor 'map-container'. El mapa está centrado
  // en una ubicación específica (en este caso, "KALALA URBAN LOUNGE").
  
  document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map-container');  // Selecciona el contenedor donde se insertará el mapa
  
    // Crear un iframe para mostrar el mapa
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.210936070656!2d-0.38382208466316894!3d39.46228527948781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f2c275b8bbf%3A0x9c5dca9fbe4b1fa6!2sKALALA%20URBAN%20LOUNGE!5e0!3m2!1ses!2ses!4v1713873137190!5m2!1ses!2ses";  // URL del mapa embebido
    iframe.width = "100%";  // Ancho del mapa
    iframe.height = "400";  // Alto del mapa
    iframe.style.border = "0";  // Elimina el borde del iframe
    iframe.allowFullscreen = true;  // Permite ver el mapa en pantalla completa
    iframe.loading = "lazy";  // Carga el iframe de manera perezosa
    iframe.referrerPolicy = "no-referrer-when-downgrade";  // Política de referencia
    iframe.className = "contact__map-iframe";  // Clase CSS para el iframe
  
    mapContainer.appendChild(iframe);  // Inserta el iframe en el contenedor 'map-container'
  });
  
  // ================================================
  // 3. Manejo del clic en el botón de menú
  // ================================================
  // Este bloque controla la interacción con un botón de menú para mostrar u ocultar
  // un menú emergente, alternando la clase 'open' en el contenedor del menú.
  
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');  // Selecciona el botón de menú
    const popupMenu = document.getElementById('popupMenu');  // Selecciona el menú emergente
  
    // Evento para alternar la visibilidad del menú
    menuToggle.addEventListener('click', () => {
      popupMenu.classList.toggle('open');  // Agrega o quita la clase 'open' para mostrar u ocultar el menú
    });
  });
  
  