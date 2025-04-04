
window.onload = () => {
    const links = document.querySelectorAll('a[href]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const target = this.getAttribute('href');

            if (target.startsWith('#') || this.target === '_blank') return;

            e.preventDefault();

            const main = document.querySelector('main');
            if (main) {
                main.classList.add('slide-out');

                setTimeout(() => {
                    window.location.href = target;
                }, 400);
            } else {
                window.location.href = target;
            }
        });
    });

    const main = document.querySelector('main');
    if (main) {
        main.classList.add('slide-in');
    }

    textoDigitando("mensagem-boas-vindas", "Seja bem-vindo ao meu portifólio!");
};

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let currentIndex = 0;
  
    function updateCarousel() {
      const offset = -currentIndex * 100;
      carousel.style.transform = 'translateX(' + offset + '%)';
    }
  
    nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    });
  
    prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    });
  });
  


function textoDigitando(elementoId, texto, velocidade = 80, pausa = 1500) {
    const elemento = document.getElementById(elementoId);
    if (!elemento) return;
    let i = 0;
    let escrevendo = true;

    function animar() {
        if (escrevendo) {
            elemento.textContent = texto.slice(0, i);
            if (i < texto.length) {
                i++;
                setTimeout(animar, velocidade);
            } else {
                escrevendo = false;
                setTimeout(animar, pausa);
            }
        } else {
            if (i > 0) {
                elemento.textContent = texto.slice(0, i);
                i--;
                setTimeout(animar, velocidade / 2);
            } else {
                escrevendo = true;
                setTimeout(animar, velocidade);
            }
        }
    }

    animar();
}
