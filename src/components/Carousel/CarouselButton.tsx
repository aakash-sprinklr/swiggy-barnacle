import "./Carousel.css";
import React, { ReactElement, ReactNode } from "react";

interface ICarouselButtonProps {
  className: string;
  children: ReactNode;
  onClick: () => void;
  "data-testid": string;
}

const CarouselButton = ({
  className,
  children,
  ...props
}: ICarouselButtonProps): ReactElement => {
  return (
    <button className={`carousel-btn ${className}`} {...props}>
      {children}
    </button>
  );
};

export default CarouselButton;
