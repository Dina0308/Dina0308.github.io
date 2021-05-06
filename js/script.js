const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        menuItem = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    })
})


//ratings block
const counters = document.querySelectorAll('.skills__raiting_numb'),
      lines = document.querySelectorAll('.skills__raiting_line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

