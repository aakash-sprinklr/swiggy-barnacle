import { render, screen } from "@testing-library/react";
import App from "./App";

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

test("Header is rendered", () => {
  render(<App />);

  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
});

test("Carousel is rendered", () => {
  render(<App />);
  const carousel = screen.getByTestId("carousel");
  expect(carousel).toBeInTheDocument();
});

test("Filter is rendered", () => {
  render(<App />);
  const filter = screen.getByTestId("filter-tabs");
  expect(filter).toBeInTheDocument();
});
test("CardList is rendered", () => {
  render(<App />);
  const cardList = screen.getByTestId("card-list");
  expect(cardList).toBeInTheDocument();
});
test("Footer is rendered", () => {
  render(<App />);
  const filter = screen.getByTestId("footer");
  expect(filter).toBeInTheDocument();
});
