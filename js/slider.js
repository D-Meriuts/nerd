let sliderItem = document.querySelectorAll('.slider-item');
let sliderControls = document.querySelectorAll('.slider-controls-btn');

for (let sliderControl of sliderControls) {
  sliderControl.onclick = function () {
    sliderControl.classList.toggle('current')
  }

}



