
const menuBtn = document.querySelector('#burguer'); 
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');


menuBtn.addEventListener('click', () => { 
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
})

overlay.addEventListener('click', () => { 
    menu.classList.remove('active');
    overlay.classList.remove('active');

})

