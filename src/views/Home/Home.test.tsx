import React from "react";
import {render, screen} from "@testing-library/react";

import {Home} from "./Home";

test("renders heading", () => {
  render(<Home />);
  const heading = screen.getByText(/home/i);

  expect(heading).toBeInTheDocument();
});
