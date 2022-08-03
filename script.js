const leftButton = document.querySelector(".left-btn");
const rightButton = document.querySelector(".right-btn");
const carousel = document.querySelector(".carousel");

const scroll = (direction) => {
  let width =
    Math.floor(document.querySelector(".carousel-item").scrollWidth) + 16;
  width = direction == "left" ? -width : width;

  carousel.scrollBy({
    left: width,
    behavior: "smooth",
  });
};

rightButton.addEventListener("click", () => scroll("right"));
leftButton.addEventListener("click", () => scroll("left"));
