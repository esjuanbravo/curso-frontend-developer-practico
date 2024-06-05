const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', intercambioMenu);

function intercambioMenu() {
    desktopMenu.classList.toggle('inactive')
}