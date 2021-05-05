import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

// App component testing
it("should take a snapshot of app", () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});
