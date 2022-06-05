const menu=document.querySelector('mobile-menu');
const menuLinks=document.querySelector('.nav-menu');
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

var i=0;
var txt ='BONJOUR!';
var speed=50;
function typeWriter(){
    if (i<txt.length){
        document.getElementsById("typed-out").innerHTML +=txt.charAt(i);
    i++;
    setTimeout(typeWriter,speed);
    }
}
