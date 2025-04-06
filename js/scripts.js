
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

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');

    if (window.innerWidth >= 768) {
        // Ativa o carousel apenas para dispositivos com largura >= 768px
        let currentIndex = 0;

        function updateCarousel() {
            const offset = -currentIndex * 100;
            carousel.style.transform = 'translateX(' + offset + '%)';
        }

        nextButton.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        });

        prevButton.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        });
    } else {
        // Para dispositivos menores que 768px, exibe os itens como lista
        if (prevButton) prevButton.style.display = 'none';
        if (nextButton) nextButton.style.display = 'none';
        carousel.style.transform = 'none';
        carousel.style.display = 'block';
        items.forEach(item => {
            item.style.minWidth = 'auto';
            item.style.width = '100%';
            item.style.marginBottom = '20px';
        });

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.flexDirection = 'column';
        });
        const cardImages = document.querySelectorAll('.card-image');
        cardImages.forEach(image => {
            image.style.width = '100%';
        });
        const cardDescricoes = document.querySelectorAll('.card-descricao');
        cardDescricoes.forEach(desc => {
            desc.style.width = '100%';
        });
    }
});


window.addEventListener('load', function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
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
