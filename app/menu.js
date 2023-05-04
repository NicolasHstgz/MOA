const button = document.querySelector('.burguer-menu');
const menu = document.querySelector('.menu-area');
const close = document.querySelector('.close-menu');

button.addEventListener('click', () => {
    menu.classList.toggle('menu-area-active');
})

close.addEventListener('click', () => {
    menu.classList.toggle('menu-area-active');
})