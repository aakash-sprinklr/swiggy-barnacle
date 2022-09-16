import "./Carousel.css";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { LEFT, RIGHT, GAP } from "../../constants/constant";
import CarouselButton from "./CarouselButton";

const CLEAREANCE_RIGHT: number = 300;

interface IButtonVisiblity {
  left: boolean;
  right: boolean;
}

const Carousel = (): ReactElement => {
  const carouselItem = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const [btnVisible, setbtnVisble] = useState<IButtonVisiblity>({
    left: false,
    right: true,
  });

  const { left, right } = btnVisible;

  const checkVisiblity = (direction: string) => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) {
      return;
    }

    if (
      direction === RIGHT &&
      carouselElement.scrollWidth - CLEAREANCE_RIGHT <=
        carouselElement.clientWidth + carouselElement.scrollLeft
    ) {
      setbtnVisble({
        right: false,
        left: true,
      });
      return;
    }

    if (direction === LEFT && carouselElement.scrollLeft === 0) {
      setbtnVisble({
        right: true,
        left: false,
      });
      return;
    }

    setbtnVisble({
      right: true,
      left: true,
    });
  };

  const scrollCarousel = (direction: string) => {
    if (!carouselItem.current || !carouselRef.current) {
      return;
    }
    let width = Math.floor(carouselItem.current.scrollWidth) + GAP;
    width = direction === LEFT ? -width : width;

    carouselRef.current.scrollBy({
      left: width,
      behavior: "smooth",
    });

    checkVisiblity(direction);
  };

  useEffect(() => {
    const carouselObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const header = document.querySelector(".navbar-wrapper")!;
          const filterSection = document.querySelector(".filter-wrapper")!;
          header.classList.remove("hide-header");
          filterSection.classList.remove("filter-sticky");
        }
      },
      {
        root: null,
        threshold: [0, 1],
      }
    );
    carouselObserver.observe(carouselContainerRef.current!);
    return () => carouselObserver.disconnect();
  }, []);

  return (
    <div ref={carouselContainerRef} className="carousel-container">
      <div className="container">
        <div className="carousel-wrapper">
          {left ? (
            <CarouselButton
              onClick={() => scrollCarousel(LEFT)}
              className="left-btn"
              data-testid="carousel-left-btn"
            >
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </CarouselButton>
          ) : null}
          {right ? (
            <CarouselButton
              onClick={() => scrollCarousel(RIGHT)}
              className="right-btn"
              data-testid="carousel-right-btn"
            >
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </CarouselButton>
          ) : null}

          <div data-testid="carousel" ref={carouselRef} className="carousel">
            {new Array(11).fill(0).map((_, index) => (
              <div
                ref={index === 0 ? carouselItem : null}
                className="carousel-item"
                data-testid={index === 0 ? "carousel-item" : ""}
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
