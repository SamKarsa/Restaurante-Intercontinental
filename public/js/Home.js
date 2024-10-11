var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // Tiempo en milisegundos entre los slides
        disableOnInteraction: false, // Permite la interacción después de que el autoplay comience
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const ubicacionSection = document.querySelector(".Ubicacion");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ubicacionSection.classList.add("show"); // Añade la clase 'show' cuando es visible
        }
      });
    }, {
      threshold: 0.1 // El 10% de la sección debe estar visible antes de que se active la animación
    });

    observer.observe(ubicacionSection); // Monitorea la sección "Ubicación"
  });
