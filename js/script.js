let mainMenu = document.querySelector('.klik');
let openMenu = document.querySelector('.collapse');
let closeMenu = document.querySelector('.btnn');

mainMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    openMenu.style.left = '0';
    openMenu.style.transition = '1s';
}

function close() {
    openMenu.style.left = '-100%';
}

window.addEventListener("scroll", function () {
    let header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 60);
});