// variables de menu derecho desktop 
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');

// variables de menu compras para accion
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
//varibles para en menu izquierdo para mobile
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

// declaracion de acciones 

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

//funciones del Toggle menu desktop

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

// funciones del Toggle menu mobile
function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive'); 
  }
  
  mobileMenu.classList.toggle('inactive');
}

// funciones del Aside
function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }else if (isMobileMenuClosed){
    desktopMenu.classList.add('inactive')
  }

  
  aside.classList.toggle('inactive');
}