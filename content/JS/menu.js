const Menubtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const main = document.getElementById('main');

Menubtn.addEventListener("click", () => {
    Menubtn.classList.toggle('open');
    menu.classList.toggle('open');
})

main.addEventListener("click", () => {
    Menubtn.classList.remove('open');
    menu.classList.remove('open');
})

document.addEventListener('scroll', () => {
    Menubtn.classList.remove('open');
    menu.classList.remove('open');
})