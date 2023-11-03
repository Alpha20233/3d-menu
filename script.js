const background = document.querySelector('.background');
const menu = document.querySelector('.menu');
const hiddMenu = document.querySelector('.hiddMenu');
const close = document.querySelector('.close');

menu.addEventListener('click',function(){
    background.style.transform = 'translateX(70px) scale(0.6) rotateY(-6deg) skewY(-2deg)';
    background.style.filter = 'blur(2px)';
    hiddMenu.style.left = '0px'
});

close.addEventListener('click',function(){
    background.style.transform = 'translateX(0px) scale(1) rotateY(0deg) skewY(0deg)';
    background.style.filter = 'blur(0px)';
    hiddMenu.style.left = '-15px'
})