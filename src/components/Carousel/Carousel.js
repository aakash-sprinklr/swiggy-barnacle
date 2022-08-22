import "./Carousel.css";
import { useEffect, useRef } from "react";
import { LEFT, RIGHT, GAP } from "../../constants/constant";
import CarouselButton from "./CarouselButton";

const Carousel = () => {
  const carouselItem = useRef();
  const carouselRef = useRef();
  const carouselContainerRef = useRef();

  const scrollCarousel = (direction) => {
    let width = Math.floor(carouselItem.current.scrollWidth) + GAP;
    width = direction == LEFT ? -width : width;

    carouselRef.current.scrollBy({
      left: width,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const carouselObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const header = document.querySelector(".navbar-wrapper");
          const filterSection = document.querySelector(".filter-wrapper");
          header.classList.remove("hide-header");
          filterSection.classList.remove("filter-sticky");
        }
      },
      {
        root: null,
        threshold: [0, 1],
      }
    );
    carouselObserver.observe(carouselContainerRef.current);
    return () => carouselObserver.disconnect();
  }, []);

  return (
    <div ref={carouselContainerRef} className="carousel-container">
      <div className="container">
        <div className="carousel-wrapper">
          <CarouselButton
            onClick={() => scrollCarousel(LEFT)}
            className="left-btn"
            data-testid="carousel-left-btn"
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </CarouselButton>
          <CarouselButton
            onClick={() => scrollCarousel(RIGHT)}
            className="right-btn"
            data-testid="carousel-right-btn"
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </CarouselButton>

          <div data-testid="carousel" ref={carouselRef} className="carousel">
            {new Array(11).fill(0).map((_, index) => (
              <div
                ref={index == 0 ? carouselItem : null}
                className="carousel-item"
                data-testid={index == 0 ? "carousel-item" : ""}
                key={`carousel-${index}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
