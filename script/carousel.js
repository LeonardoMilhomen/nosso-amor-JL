let index = 0;
const carousel = document.getElementById('carousel');
const slides = carousel.getElementsByTagName('img');

function showSlide(i) {
  const slideWidth = slides[0].clientWidth;
  carousel.style.transform = 'translateX(' + (-slideWidth * i) + 'px)';
}

function prevSlide() {
  index = (index <= 0) ? slides.length - 1 : index - 1;
  showSlide(index);
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

// Touch support
let startX = 0;
carousel.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (endX - startX > 50) {
    prevSlide();
  } else if (startX - endX > 50) {
    nextSlide();
  }
});
