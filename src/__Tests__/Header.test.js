import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Components/Views/HeaderView";

// To test if the searchbar is empty
it("should equal to empty string in the start in the searchbar", () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId("search")).toHaveTextContent("");
});

//To Test if the logo is present on the screen
it("should be in the screen as logo", () => {
  const { getByAltText } = render(<Header />);
  expect(getByAltText("logo")).toBeInTheDocument();
});

//To check if the window location and url are changed on logo click
it("should not change the window on clicking the logo ", () => {
  const url = "http://localhost/";
  const { getByAltText } = render(<Header />);
  fireEvent.click(getByAltText("logo"));
  expect(window.location.href).toEqual(url);
});
