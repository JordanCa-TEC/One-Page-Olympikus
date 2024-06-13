/*--------------carrusel mobile + carrucel principal funcionalidad -------------*/

window.addEventListener('DOMContentLoaded', function() {
    const carouselMobile = document.querySelector('.hero--mobile .carousel--mobile');
    const prevButtonMobile = document.querySelector('.hero--mobile .prev');
    const nextButtonMobile = document.querySelector('.hero--mobile .next');
    const dotsContainerMobile = document.querySelector('.hero--mobile .dots');

    let counterMobile = 0;
    let intervalIdMobile;

    function updateDotsMobile() {
        const dotsMobile = Array.from(dotsContainerMobile.children);
        dotsMobile.forEach((dot, index) => {
            if (index === counterMobile) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function goToSlideMobile(index) {
        const slidesMobile = Array.from(carouselMobile.children);
        const totalSlidesMobile = slidesMobile.length;
        
        counterMobile = (index + totalSlidesMobile) % totalSlidesMobile;

        carouselMobile.style.transition = 'transform 0.5s ease';
        carouselMobile.style.transform = `translateX(-${counterMobile * 100}%)`;

        updateDotsMobile();
    }

    function nextSlideMobile() {
        goToSlideMobile(counterMobile + 1);
    }

    function prevSlideMobile() {
        goToSlideMobile(counterMobile - 1);
    }

    function startCarouselMobile() {
        intervalIdMobile = setInterval(nextSlideMobile, 3000); 
    }

    function stopCarouselMobile() {
        clearInterval(intervalIdMobile);
    }

    carouselMobile.addEventListener('mouseenter', stopCarouselMobile);
    carouselMobile.addEventListener('mouseleave', startCarouselMobile);

    nextButtonMobile.addEventListener('click', () => {
        stopCarouselMobile();
        nextSlideMobile();
    });

    prevButtonMobile.addEventListener('click', () => {
        stopCarouselMobile();
        prevSlideMobile();
    });

    // Crear los indicadores de paginación (dots)
    for (let i = 0; i < carouselMobile.children.length; i++) {
        const dotMobile = document.createElement('span');
        dotMobile.classList.add('dot');
        dotMobile.addEventListener('click', () => {
            stopCarouselMobile();
            goToSlideMobile(i);
        });
        dotsContainerMobile.appendChild(dotMobile);
    }

    startCarouselMobile(); 
    goToSlideMobile(0); 

    // Integración del segundo código
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');

    let counter = 0;
    let intervalId;

    function updateDots() {
        const dots = Array.from(dotsContainer.children);
        dots.forEach((dot, index) => {
            if (index === counter) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function getSlideWidth() {
        return carousel.querySelector('img').clientWidth;
    }

    function goToSlide(index) {
        const slideWidth = getSlideWidth(); 
        if (index < 0) {
            counter = carousel.children.length - 1;
        } else if (index >= carousel.children.length) {
            counter = 0;
        } else {
            counter = index;
        }
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(-${counter * slideWidth}px)`;
        updateDots();
    }

    function nextSlide() {
        goToSlide(counter + 1);
    }

    function startCarousel() {
        intervalId = setInterval(nextSlide, 3000); 
    }

    function stopCarousel() {
        clearInterval(intervalId);
    }

    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);

    nextButton.addEventListener('click', () => {
        stopCarousel();
        nextSlide();
    });

    prevButton.addEventListener('click', () => {
        stopCarousel();
        goToSlide(counter - 1);
    });

    // Crear los indicadores de paginación (dots)
    for (let i = 0; i < carousel.children.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            stopCarousel();
            goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    }

    // Esperar a que todas las imágenes estén completamente cargadas
    window.addEventListener('load', () => {
        startCarousel(); 
        goToSlide(0); 
    });
});


/*------------- carrucel mobile se oculta---------------*/

window.addEventListener('DOMContentLoaded', function() {
    const carouselMobile = document.querySelector('.hero--mobile');

    function hideMobileCarouselOn768() {
        if (window.innerWidth > 768) {
            carouselMobile.style.display = 'none';
        } else {
            carouselMobile.style.display = 'block';
        }
    }

    hideMobileCarouselOn768();

    window.addEventListener('resize', hideMobileCarouselOn768);
});


/*----------------ocultar 3 bloques a carrucel--------------*/
window.addEventListener('DOMContentLoaded', function() {
    var miSeccion = document.getElementById('miSeccion');
  
    function mostrarSeccion() {
      miSeccion.style.display = 'flex';
    }
  
    function ocultarSeccion() {
      miSeccion.style.display = 'none';
    }
  
    function verificarAncho() {
      if (window.innerWidth <= 768) { // Cambiado a menor o igual a 768
        ocultarSeccion();
      } else {
        mostrarSeccion();
      }
    }
  
    verificarAncho();
  
    window.addEventListener('resize', function() {
      verificarAncho();
    });
  });


  /*-------carrucel basico -------*/

  window.addEventListener('load', function() {
    var carrusel = document.querySelector('.carrusel--basico');
    var imagenes = document.querySelectorAll('.carrusel-imagen');
    var index = 0;
    var intervalId = null;

    function cambiarImagen() {
        imagenes.forEach(function(imagen) {
            imagen.style.display = 'none';
        });
        imagenes[index].style.display = 'flex';
        index = (index + 1) % imagenes.length;
    }

    function activarCarrusel() {
        clearInterval(intervalId);
        
        if (window.innerWidth <= 768) {
            carrusel.style.display = 'flex';
            intervalId = setInterval(cambiarImagen, 3000);
        } else {
            carrusel.style.display = 'none';
        }
    }

    activarCarrusel();

    window.addEventListener('resize', activarCarrusel);

    // Agregar evento de clic a cada imagen del carrusel
    imagenes.forEach(function(imagen) {
        imagen.addEventListener('click', function() {
            // hacer clic se va al URL específica
            window.location.href = 'tu_pagina.html';
        });
    });
});

/*---menu desplegable--- */

document.getElementById('hamburger--menu').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

/*------------menu desplegable footer---------------*/

document.addEventListener('DOMContentLoaded', function() {
    const menuTitles = document.querySelectorAll('.footer--menu-title');

    menuTitles.forEach(title => {
        title.addEventListener('click', function() {
            const menu = this.parentElement;
            menu.classList.toggle('active');
        });
    });
});



