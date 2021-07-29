import React from "react";
import { render, screen } from "@testing-library/react";

import BounceLoader, { TEST_ID } from "./BounceLoader";

describe("BounceLoader component", () => {
  it("renders", () => {
    render(<BounceLoader />);

    expect(screen.getByTestId(TEST_ID)).toBeDefined();
  });
});
