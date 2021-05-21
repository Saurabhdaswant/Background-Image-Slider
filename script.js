const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
// const dots = Array.from(dotsNav.children);

const slidewidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to one anothr

const setSlidePosition = (slide, index) => {
  slide.style.left = slidewidth * index + "px";
};

slides.forEach(setSlidePosition);
// when i click left , moeve slides to the left
// when i click right , moeve slides to the right

nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;
  //move the next  slide
  track.style.transform = "translateX(-" + amountToMove + ")";
});
//when i click the nav indicator , move to that slide
