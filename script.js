const header = document.querySelector(".navbar-wrapper");
const leftButton = document.querySelector(".left-btn");
const rightButton = document.querySelector(".right-btn");
const carouselContainer = document.querySelector(".carousel-container");
const carousel = document.querySelector(".carousel");
const filterTabs = document.querySelectorAll(".filter-tab");
const filterSection = document.querySelector(".filter-wrapper");

filterTabs.forEach((filterTab) => {
  filterTab.addEventListener("click", (event) => onFilterClick(filterTab));
});

const onFilterClick = (filterTab) => {
  const oldSelectedTab = document.querySelector(".tab-selected");
  oldSelectedTab.classList.remove("tab-selected");
  filterTab.classList.add("tab-selected");
};

const scrollCarousel = (direction) => {
  let width =
    Math.floor(document.querySelector(".carousel-item").scrollWidth) + 32;
  width = direction == "left" ? -width : width;

  carousel.scrollBy({
    left: width,
    behavior: "smooth",
  });
};

const carouselObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      header.classList.remove("hide-header");
      filterSection.classList.remove("filter-sticky");
    }
  },
  {
    root: null,
    threshold: [0, 1],
  }
);

const observer = new window.IntersectionObserver(
  ([entry]) => {
    if (entry.boundingClientRect.top > 0) {
    } else {
      header.classList.add("hide-header");
      filterSection.classList.add("filter-sticky");
    }
  },
  {
    root: null,
    threshold: [0, 1],
  }
);

observer.observe(filterSection);
carouselObserver.observe(carouselContainer);
const onWindowScroll = () => {};

window.addEventListener("scroll", onWindowScroll);

rightButton.addEventListener("click", () => scrollCarousel("right"));
leftButton.addEventListener("click", () => scrollCarousel("left"));
