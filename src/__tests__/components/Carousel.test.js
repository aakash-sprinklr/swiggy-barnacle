import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Carousel from "../../components/Carousel/Carousel";
import React from "react";
import { GAP } from "../../constants/constant";

beforeEach(() => {
  const observe = jest.fn();
  const unobserve = jest.fn();
  const disconnect = jest.fn();

  window.IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
    disconnect,
  }));
});

test("carousel button click", async () => {
  const scrollMock = jest.fn();
  Element.prototype.scrollBy = scrollMock;
  render(<Carousel />);

  const carouselItem = screen.getByTestId("carousel-item");
  const leftButton = screen.getByTestId("carousel-left-btn");
  const rightButton = screen.getByTestId("carousel-right-btn");
  await userEvent.click(rightButton);

  expect(scrollMock).toHaveBeenNthCalledWith(1, {
    left: Math.floor(carouselItem.scrollWidth) + GAP,
    behavior: "smooth",
  });

  await userEvent.click(leftButton);
  expect(scrollMock).toHaveBeenNthCalledWith(2, {
    left: -(Math.floor(carouselItem.scrollWidth) + GAP),
    behavior: "smooth",
  });
});

test("Carousel Intersection Obeserver cleanup", () => {
  let { disconnect } = IntersectionObserver();
  const { unmount } = render(<Carousel />);
  unmount();
  expect(disconnect).toBeCalledTimes(1);
});

test("Carouser Intersection Observer is attached", () => {
  let { observe } = IntersectionObserver();
  render(<Carousel />);
  expect(observe).toBeCalledTimes(1);
});
