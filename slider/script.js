const image = document.querySelectorAll(".item");
const dot = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let numberOfSlides = document.querySelectorAll(".item").length;
let currentSlide = 0;

dot.forEach((el) => {
  el.addEventListener("click", () => {
    let slideToGo = el.dataset.ico;
    goToSlide(slideToGo - 1);
  });
});

function goToSlide(i) {
  renderFu();
  dot[i].classList.add("active-dot");
  image[i].classList.add("active");
  currentSlide = i;
}

nextBtn.addEventListener("click", () => {
  nextFu();
});

prevBtn.addEventListener("click", () => {
  prevFu();
});

function nextFu() {
  renderFu();
  if (currentSlide >= numberOfSlides - 1) {
    image[0].classList.add("active");
    dot[0].classList.add("active-dot");
    currentSlide = 0;
  } else {
    image[currentSlide + 1].classList.add("active");
    dot[currentSlide + 1].classList.add("active-dot");
    currentSlide += 1;
  }
}
function prevFu() {
  renderFu();
  if (currentSlide <= 0) {
    currentSlide = numberOfSlides - 1;
    image[numberOfSlides - 1].classList.add("active");
    dot[numberOfSlides - 1].classList.add("active-dot");
  } else {
    image[currentSlide - 1].classList.add("active");
    dot[currentSlide - 1].classList.add("active-dot");
    currentSlide -= 1;
  }
}

function renderFu() {
  for (let i = 0; i < image.length; i++) {
    image[i].classList.remove("active");
  }
  for (let i = 0; i < dot.length; i++) {
    dot[i].classList.remove("active-dot");
  }
}
