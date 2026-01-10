// Scroll suave para los links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Asegura que el elemento quede arriba
            });
        }
    });
});

// Animación simple de aparición (Fade In Up) para las tarjetas
const cards = document.querySelectorAll('.card');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Cuando el 20% de la tarjeta es visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Deja de observar una vez que ha aparecido
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

// Para la música (si la quieres, habría que añadir un elemento de audio en el HTML)
// const audio = new Audio('ruta/a/tu/musica.mp3'); // Descomentar y cambiar ruta
// audio.loop = true;
// audio.volume = 0.1; // Volumen bajo

// Función para reproducir/pausar, se podría vincular a un botón
// function toggleMusic() {
//     if (audio.paused) {
//         audio.play();
//     } else {
//         audio.pause();
//     }
// }