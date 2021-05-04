import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "../../Components/Views/HeaderView";

afterEach(cleanup);

// To test if the searchbar is empty
it("should equal to empty string", () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId("search")).toHaveTextContent("");
});
