document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const toggle = document.querySelector('.menu-toggle');
    toggle.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
    // Fecha o menu ao clicar fora
    document.addEventListener('click', function (e) {
        if (!menu.contains(e.target)) {
            menu.classList.remove('open');
        }
    });
});
