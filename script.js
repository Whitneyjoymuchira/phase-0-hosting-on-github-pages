const menu=document.querySelector('mobile-menu');
const menuLInks=document.querySelector('.nav-menu');
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menu.classList.toggle('active');
})


