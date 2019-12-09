var imgCat = document.querySelector('.slider__image--before');
var input = document.querySelector('.slider__input');
var buttonBefore = document.querySelector('.slider__button--before');
var buttonAfter = document.querySelector('.slider__button--after');

input.addEventListener('input', function(e) {
    imgCat.style.width = e.currentTarget.value + "%";
  }
)

buttonBefore.addEventListener('click', function(e) {
    imgCat.style.width = "100%";
    input.value = "100";
  }
)

buttonAfter.addEventListener('click', function(e) {
    imgCat.style.width = "0%";
    input.value = "0";
  }
)
