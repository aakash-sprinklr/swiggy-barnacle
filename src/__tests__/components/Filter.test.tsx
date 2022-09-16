import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filter from "../../components/Filter/Filter";
import React from "react";
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

test("Intersection Obeserver cleanup", () => {
  let observer = new IntersectionObserver(() => {});
  const { unmount } = render(<Filter />);
  unmount();
  expect(observer.disconnect).toBeCalledTimes(1);
});

test("Observer is attached", () => {
  let observer = new IntersectionObserver(() => {});
  render(<Filter />);
  expect(observer.observe).toBeCalledTimes(1);
});

test("Tab switch", async () => {
  render(<Filter />);
  const tabs = screen.getByTestId("filter-tabs").children;
  const firstTab = tabs[0];
  const secondTab = tabs[1];
  expect(firstTab.classList[1]).toBe("tab-selected");
  await userEvent.click(secondTab);
  expect(secondTab.classList[1]).toBe("tab-selected");
});
