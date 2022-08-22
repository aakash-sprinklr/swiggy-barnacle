import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import CardList from "../../components/CardList/CardList";

test("Add link on hover", async () => {
  render(<CardList />);
  const card = screen.getByTestId("card");
  await userEvent.hover(card);
  const link = within(card).getByText(/i'm hovered!/i);
  expect(link).toBeInTheDocument();
});
