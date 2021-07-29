import React from "react";
import { render, screen } from "@testing-library/react";

import LoadingOverlay, { TEST_ID } from "./LoadingOverlay";

describe("LoadingOverlay component", () => {
  it("renders", () => {
    render(<LoadingOverlay show />);

    expect(screen.getByTestId(TEST_ID)).toBeDefined();
  });

  it("displays the message prop", () => {
    const mockMessage = "Hi, foo";
    render(<LoadingOverlay message={mockMessage} show />);

    expect(screen.getByText(mockMessage)).toBeDefined();
  });

  it("applies the fade prop", () => {
    render(<LoadingOverlay show fade />);

    expect(screen.getByTestId(TEST_ID).classList).toContain("fadeable-content");
  });

  describe("show prop", () => {
    it("hides the overlay when show is false", () => {
      render(<LoadingOverlay show={false} />);

      expect(screen.getByTestId(TEST_ID).classList).toContain("hidden");
    });

    it("shows the overlay when show is true", () => {
      render(<LoadingOverlay show />);

      expect(screen.getByTestId(TEST_ID).classList).toContain("revealed");
    });
  });
});
