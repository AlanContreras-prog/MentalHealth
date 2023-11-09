// Agregar funcionalidad de desplazamiento suave al hacer clic en los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            behavior: 'smooth',
            top: targetElement.offsetTop - 50, // Ajusta según sea necesario
        });
    });
});
