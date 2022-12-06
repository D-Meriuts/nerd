const firstSlide = document.querySelector('.slide-1');
const secondSlide = document.querySelector('.slide-2');
const thirdSlide = document.querySelector('.slide-3');
const firstSlideButton = document.querySelector('.btn-slide-1');
const secondSlideButton = document.querySelector('.btn-slide-2');
const thirdSlideButton = document.querySelector('.btn-slide-3');


firstSlideButton.addEventListener ('click', function (evt) {
  evt.preventDefault();
  firstSlide.classList.add('slide-current');
  firstSlideButton.classList.add('current')


  secondSlide.classList.remove('slide-current');
  secondSlideButton.classList.remove('current');

  thirdSlide.classList.remove('slide-current');
  thirdSlideButton.classList.remove('current');
})


secondSlideButton.addEventListener ('click', function (evt) {
  evt.preventDefault();
  firstSlide.classList.remove('slide-current');
  firstSlideButton.classList.remove('current')


  secondSlide.classList.add('slide-current');
  secondSlideButton.classList.add('current');

  thirdSlide.classList.remove('slide-current');
  thirdSlideButton.classList.remove('current');
})

thirdSlideButton.addEventListener ('click', function (evt) {
  evt.preventDefault();
  firstSlide.classList.remove('slide-current');
  firstSlideButton.classList.remove('current')


  secondSlide.classList.remove('slide-current');
  secondSlideButton.classList.remove('current');

  thirdSlide.classList.add('slide-current');
  thirdSlideButton.classList.add('current');
})
