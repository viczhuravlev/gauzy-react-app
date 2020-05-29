import React from "react";
import {render, screen} from "@testing-library/react";

import {About} from "./About";

test("renders heading", () => {
  render(<About />);
  const heading = screen.getByText(/about/i);

  expect(heading).toBeInTheDocument();
});
