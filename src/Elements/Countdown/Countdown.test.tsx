import React from "react";
import { render, screen } from "@testing-library/react";

import Countdown, { TEST_ID } from "./Countdown";

describe("Countdown component", () => {
  it("renders", () => {
    render(<Countdown initialCount={10} />);

    expect(screen.getByTestId(TEST_ID)).toBeDefined();
  });

  describe("Countdown logic", () => {
    it("fires onCompletion after initialCount seconds", () => {});

    it("removes interval on count completion", () => {});

    it("repeats infinitely when infite is true", () => {});
  });

  describe("style props", () => {
    it("applies className prop", () => {
      const mockClassName = "fooClass";
      render(<Countdown initialCount={10} className={mockClassName} />);

      expect(screen.getByTestId(TEST_ID).classList).toContain(mockClassName);
    });

    it("applies style prop", () => {
      const mockStyles = {
        color: "red",
      };

      render(<Countdown initialCount={10} style={mockStyles} />);
      expect(screen.getByTestId(TEST_ID).style.color).toBe(mockStyles.color);
    });
  });
});
