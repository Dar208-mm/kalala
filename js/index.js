// ================================================
// Estructura General del Archivo JavaScript
// ================================================
// Este archivo maneja la lógica para un carrusel de imágenes, un formulario de reserva con validación
// y un menú emergente. Los eventos son gestionados para la interacción con el usuario
// y se realizan transiciones suaves en los elementos HTML.

// ================================================
// 1. Variables y Selección de Elementos
// ================================================
// Aquí se seleccionan los elementos HTML necesarios para la funcionalidad del carrusel,
// el formulario de reserva y el menú emergente.

const track = document.getElementById("carousel-track"); // Selecciona el contenedor del carrusel
const images = track.children; // Obtiene todas las imágenes dentro del contenedor del carrusel
let index = 0; // Indice actual de la imagen visible en el carrusel

// ================================================
// 2. Carrusel de Imágenes (Autoplay)
// ================================================
// Este bloque de código hace que el carrusel de imágenes se mueva automáticamente
// cada 4 segundos, realizando una transición suave entre las imágenes.

setInterval(() => {
  index = (index + 1) % images.length;  // Se actualiza el índice para mostrar la siguiente imagen
  track.style.transition = 'transform 1.5s ease-in-out';  // Aplica la transición suave
  track.style.transform = `translateX(-${index * 100}%)`;  // Desplaza el carrusel para mostrar la imagen correcta
}, 4000);

// ================================================
// 3. Formulario de Reserva: Validación y Envío
// ================================================
// Este bloque gestiona el formulario de reserva, incluyendo la validación
// de los campos de nombre y correo electrónico, y muestra mensajes de éxito o error.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservationForm");  // Selecciona el formulario
  const message = document.getElementById("formMessage");  // Mensaje de estado del formulario

  form.addEventListener("submit", function (e) {
    e.preventDefault();  // Previene que el formulario se envíe de manera tradicional

    // Obtiene los valores del nombre y correo electrónico del formulario
    const name = form.name.value.trim();
    const email = form.email.value.trim();

    // Validación de nombre
    if (name.length < 2) {
      message.textContent = "Por favor, ingresá un nombre válido.";  // Mensaje de error para el nombre
      message.style.color = "#ff8080";  // Cambia el color del mensaje a rojo
      return;
    }

    // Validación de correo electrónico
    if (!email.includes("@")) {
      message.textContent = "Ingresá un email válido.";  // Mensaje de error para el correo electrónico
      message.style.color = "#ff8080";  // Cambia el color del mensaje a rojo
      return;
    }

    // Simulación de envío exitoso
    message.textContent = "¡Reserva enviada con éxito! Nos pondremos en contacto.";  // Mensaje de éxito
    message.style.color = "#80ff80";  // Cambia el color del mensaje a verde
    form.reset();  // Reinicia el formulario
  });
});

// ================================================
// 4. Menú Emergente: Mostrar y Ocultar
// ================================================
// Este bloque maneja el evento de clic en el botón de menú, abriendo o cerrando el menú emergente.

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');  // Selecciona el botón de menú
  const popupMenu = document.getElementById('popupMenu');  // Selecciona el menú emergente

  menuToggle.addEventListener('click', () => {
    popupMenu.classList.toggle('open');  // Alterna la clase 'open' para mostrar u ocultar el menú
  });
});


