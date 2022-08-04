const header = document.querySelector(".navbar-wrapper");
const leftButton = document.querySelector(".left-btn");
const rightButton = document.querySelector(".right-btn");
const carouselContainer = document.querySelector(".carousel-container");
const carousel = document.querySelector(".carousel");
const filterTabs = document.querySelectorAll(".filter-tab");
const filterSection = document.querySelector(".filter-wrapper");
const cardContainer = document.querySelector(".card-container");

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
    if (entry.boundingClientRect.top <= 0) {
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

rightButton.addEventListener("click", () => scrollCarousel("right"));
leftButton.addEventListener("click", () => scrollCarousel("left"));

let data = [
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/gfkicyyqxr0aegwrtyfh",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/crumbigyyv72dwoepcxx",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/soafwfvm6b7narqfemmu",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/ghswgwzuh0lo8k4dn51m",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/j2vhfamlnsk70zk1qhxb",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/yiz4d7ztgtinx2xygbr5",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/vts5euhkwodjpaq45nnm",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/ghswgwzuh0lo8k4dn51m",
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/qfc7iuzrsckx4hujzujp",
];

data.forEach((src) => {
  const card = document.createElement("div");
  card.classList.add("card");
  const element = `
  <div class="content">
    <img class="card-image"
        src=${src} />
    <div class="food-description">
        <h3 class="food-name">Burger Point</h3>
        <p class="food-cuisine">Healthy Food, Indian, Bakery</p>
    </div>
  </div>
  <div class="hover-content">
    <span class="hover-text">
        I'm hovered!
    </span>
</div>
  
  `;
  card.innerHTML = element;
  cardContainer.append(card);
});
