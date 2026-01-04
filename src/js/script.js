import "../sass/style.scss";

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});
close.addEventListener('click', () => {
    menu.classList.remove('active')
    
});

const counters = document.querySelectorAll('.progress__persent'),
    lines = document.querySelectorAll('.progress__rectangle-orange');


counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
console.log(counters);
console.log(lines);