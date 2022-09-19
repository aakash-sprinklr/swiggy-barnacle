import { useEffect, useRef } from "react";
import Carousel from "../Carousel/Carousel";

const CarouselWrapper = () => {
  const carouselContainerRef = useRef<HTMLDivElement>(null);

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
  return <Carousel ref={carouselContainerRef} />;
};

export default CarouselWrapper;
