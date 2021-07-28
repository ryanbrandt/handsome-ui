import React from "react";
import { render, screen } from "@testing-library/react";

import Spinner, { TEST_ID } from "./Spinner";

describe("Spinner component", () => {
  it("renders", () => {
    render(<Spinner />);

    expect(screen.getByTestId(TEST_ID)).toBeDefined();
  });
});
