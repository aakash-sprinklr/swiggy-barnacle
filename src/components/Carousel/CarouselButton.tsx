import "./Carousel.css";
import { ReactElement, ReactNode } from "react";

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
}: ICarouselButtonProps): ReactElement => (
  <button className={`carousel-btn ${className}`} {...props}>
    {children}
  </button>
);

export default CarouselButton;
