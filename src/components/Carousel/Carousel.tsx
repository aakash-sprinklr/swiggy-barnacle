import "./Carousel.css";
import {
  ForwardedRef,
  forwardRef,
  ReactElement,
  useRef,
  useState,
} from "react";
import { LEFT, RIGHT, GAP, CLEAREANCE_RIGHT } from "../../constants/carousel";
import CarouselButton from "./CarouselButton";

interface IButtonVisiblity {
  left: boolean;
  right: boolean;
}

const Carousel = forwardRef(
  (_, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    const carouselItem = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const [{ left, right }, setbtnVisble] = useState<IButtonVisiblity>({
      left: false,
      right: true,
    });

    const updateVisiblity = (direction: string) => {
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
      const absDiffToScroll =
        Math.floor(carouselItem.current.scrollWidth) + GAP;
      const diffToScroll =
        direction === LEFT ? -absDiffToScroll : absDiffToScroll;

      carouselRef.current.scrollBy({
        left: diffToScroll,
        behavior: "smooth",
      });

      updateVisiblity(direction);
    };

    return (
      <div ref={ref} className="carousel-container">
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
  }
);

export default Carousel;
