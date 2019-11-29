var menu = document.querySelector('.header');
var button = document.querySelector('.header__button');

menu.classList.remove('header--nojs');

button.addEventListener('click', function() {
  if (menu.classList.contains('header__icon--close')) {
    menu.classList.remove('header__icon--close');
    menu.classList.add('header__icon--open');
  } else {
    menu.classList.add('header__icon--close');
    menu.classList.remove('header__icon--open');
  }
});
