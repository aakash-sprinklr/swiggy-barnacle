import "./Carousel.css";
const CarouselButton = ({ className, children, ...props }) => {
  return (
    <button className={`carousel-btn ${className}`} {...props}>
      {children}
    </button>
  );
};

export default CarouselButton;
