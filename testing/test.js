const menu = document.querySelector('#menu');
const menuLinks= document.querySelector('.navmenu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});