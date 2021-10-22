const openMenu = document.querySelector(".header-right > a");
const closeMenu = document.querySelector('.close');
const hamburgerMenu = document.querySelector('.hamburger-menu');

openMenu.addEventListener('click', function() {
    hamburgerMenu.style.display="block";
});

closeMenu.addEventListener('click', function() {
    hamburgerMenu.style.display="none";
});

