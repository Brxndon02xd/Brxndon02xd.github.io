var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000, // Tiempo entre cada diapositiva (en milisegundos)
        disableOnInteraction: false, // No desactiva el autoplay cuando el usuario interactúa
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 800, // Transición más lenta (800 ms)
});

const hamburguesa = document.getElementById("hamburguesa");
const menu = document.getElementById("menu");

hamburguesa.addEventListener("click", function() {
  menu.classList.toggle("active"); // Muestra/oculta el menú
  hamburguesa.classList.toggle("active"); // Cambia el ícono de la hamburguesa
});


