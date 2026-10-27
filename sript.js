
/* =========================
   1. Menú para celulares
========================= */

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const menuAbierto = nav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", menuAbierto);
    menuToggle.textContent = menuAbierto ? "✕" : "☰";
  });

  // Cerrar el menú al seleccionar una opción
  nav.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      nav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

/* =========================
   2. Año automático del footer
========================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* =========================
   3. Enlace de WhatsApp
========================= */

// Reemplaza este número por uno de prueba o por el número
// autorizado del negocio, incluyendo el indicativo del país.
// Colombia: 57 + número de celular, sin espacios ni símbolos.

const whatsappLink = document.getElementById("whatsapp-link");
const numeroWhatsApp = "573242291883"; 

if (whatsappLink && numeroWhatsApp) {
  const mensaje = encodeURIComponent(
    "Hola, quisiera conocer más sobre los productos de Dulce Hogar."
  );

  whatsappLink.href = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
  whatsappLink.target = "_blank";
  whatsappLink.rel = "noopener noreferrer";
} else if (whatsappLink) {
  whatsappLink.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Este es un sitio de demostración. El contacto por WhatsApp aún no está configurado.");
  });
}
