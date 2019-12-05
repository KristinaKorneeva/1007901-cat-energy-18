var imgCat = document.querySelector('.slider__image--before');
var input = document.querySelector('.slider__input');

input.addEventListener('input', function(e) {
    imgCat.style.width = e.currentTarget.value + "%";
  }
)
