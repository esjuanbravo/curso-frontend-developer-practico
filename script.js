const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// variables mobile
const mobileLogoMenu = document.querySelector('.menu');
const toggleMobileMenu = document.querySelector('.mobile-menu');

//botones de mi orden y mi cuenta
const myOrdens = document.querySelector('.my-orders');
const myAccount = document.querySelector('.my-account');

// variables del caarrito 
const contaddorCarritoCompras = document.getElementsByName('a');
const carritoCompras = document.querySelector('.carrito-icon');
var numeroProducto = 0;

//funionalidades en desktop
menuEmail.addEventListener('click', toggleMenuDesktop);

function toggleMenuDesktop() {
    desktopMenu.classList.toggle('inactive')
}

// funcionalidades en mobile
mobileLogoMenu.addEventListener('click',toggleMenuMobile);

function toggleMenuMobile() {
    toggleMobileMenu.classList.toggle('inactive')
    
}