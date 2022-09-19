import { render, screen } from "@testing-library/react";
import Header from "../../components/Header/Header";

test("Location is present", () => {
  render(<Header />);
  const locationNode = screen.getByText(/gurugram, india/i);
  expect(locationNode).toBeInTheDocument();
});

test("All navbar items are present", () => {
  render(<Header />);
  const navbarItems = screen.getByTestId("nabvar-items");
  expect(navbarItems.childNodes.length).toBe(4);
});

test("All navbar items must have link", () => {
  render(<Header />);

  screen.getAllByRole("link").forEach((item) => {
    expect(item).toHaveAttribute("href");
  });
});
