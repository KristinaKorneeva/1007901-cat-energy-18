var header = document.querySelector('.header');
var button = document.querySelector('.header__button');

header.classList.remove('header--open');

button.addEventListener('click', function() {
  header.classList.toggle('header--open');
});
