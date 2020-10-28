
let carouselSlide = [
  `<img src="./img/carousel/slide-01.jpg">`,
  `<img src="./img/carousel/slide-02.jpg">`,
  `<img src="./img/carousel/slide-03.jpg">`
];
const carouselItem = document.querySelector('.carousel__item');
const rectangleContainer = document.querySelector('.carousel__lines');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const maxIndex = carouselSlide.length - 1;
const minIndex = 0;

let currentIndex = 0;

function renderRectangle() {
  rectangleContainer.innerHTML = '';
  
  carouselSlide.forEach((picture, index) => {
    const rectangle = `<div class="rectangle ${index === currentIndex ? 'active-rectangle':''}"></div>`;

    rectangleContainer.innerHTML += rectangle
  });
}

function renderSlide() {
  carouselItem.innerHTML = carouselSlide[currentIndex];
}
showCarousel()

function decrementIndex() {
  if(currentIndex === minIndex) {
    currentIndex = maxIndex;
  } else {
    currentIndex -= 1
  }
}

function incrementIndex() {
  if(currentIndex === maxIndex) {
    currentIndex = minIndex;
  } else {
    currentIndex += 1
  }
}

document.querySelector('.carousel__left-arrow').addEventListener('click', () => {
  decrementIndex();
  showCarousel();
})

document.querySelector('.carousel__right-arrow').addEventListener('click', () => {
  incrementIndex();
  showCarousel();
})

function showCarousel() {
  renderRectangle();
  renderSlide();
}

// keyboard control: switching back and forward

document.addEventListener('keydown', evt => {
  if(evt.keyCode === 37) {
    decrementIndex();
    showCarousel();
  } else if(evt.keyCode === 39) {
    incrementIndex();
    showCarousel();
  }
});
