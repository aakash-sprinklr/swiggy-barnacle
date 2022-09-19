import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CarouselWrapper from "../../components/CarouselWrapper";
import { GAP } from "../../constants/carousel";

beforeEach(() => {
  const observe = jest.fn();
  const unobserve = jest.fn();
  const disconnect = jest.fn();

  (window.IntersectionObserver as any) = jest.fn(() => ({
    observe,
    unobserve,
    disconnect,
  }));
});

test("carousel button click", async () => {
  const scrollMock = jest.fn();
  Element.prototype.scrollBy = scrollMock;
  render(<CarouselWrapper />);

  const carouselItem = screen.getByTestId("carousel-item");
  let leftButton = screen.queryByTestId("carousel-left-btn");
  const rightButton = screen.getByTestId("carousel-right-btn");
  expect(leftButton).not.toBeInTheDocument();
  await userEvent.click(rightButton);

  expect(scrollMock).toHaveBeenNthCalledWith(1, {
    left: Math.floor(carouselItem.scrollWidth) + GAP,
    behavior: "smooth",
  });

  leftButton = screen.getByTestId("carousel-left-btn");
  await userEvent.click(leftButton);
  expect(scrollMock).toHaveBeenNthCalledWith(2, {
    left: -(Math.floor(carouselItem.scrollWidth) + GAP),
    behavior: "smooth",
  });
});

test("Carousel Intersection Obeserver cleanup", () => {
  let observer = new IntersectionObserver(() => {});
  const { unmount } = render(<CarouselWrapper />);
  unmount();
  expect(observer.disconnect).toBeCalledTimes(1);
});

test("Carouser Intersection Observer is attached", () => {
  let observer = new IntersectionObserver(() => {});
  render(<CarouselWrapper />);
  expect(observer.observe).toBeCalledTimes(1);
});
