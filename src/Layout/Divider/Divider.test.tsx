import React from "react";
import { render, screen } from "@testing-library/react";

import Divider, { TEST_ID } from "./Divider";

describe("Divider component", () => {
  it("renders", () => {
    render(<Divider />);

    expect(screen.getByTestId(TEST_ID)).toBeDefined();
  });

  describe("style props", () => {
    it("applies className prop", () => {
      const mockClass = "fooClass";
      render(<Divider className={mockClass} />);

      expect(screen.getByTestId(TEST_ID).classList).toContain(mockClass);
    });

    it("applies style prop", () => {
      const mockStyles = {
        color: "red",
      };

      render(<Divider style={mockStyles} />);

      expect(screen.getByTestId(TEST_ID).style.color).toBe(mockStyles.color);
    });
  });

  describe("solid prop", () => {
    it("renders a gradient divider when solid is false or undefined", () => {
      render(<Divider />);

      expect(screen.getByTestId(TEST_ID).className).toContain("divider_base");
    });

    it("renders a solid divider when solid is true", () => {
      render(<Divider solid />);

      expect(screen.getByTestId(TEST_ID).className).toContain("divider_solid");
    });
  });

  describe("vertical prop", () => {
    it("renders an hr divider when vertical is false or undefined", () => {
      render(<Divider />);

      expect(screen.getByTestId(TEST_ID).className).toContain("hr");
    });

    it("renders a vr divider when vertical is true", () => {
      render(<Divider vertical />);

      expect(screen.getByTestId(TEST_ID).className).toContain("vr");
    });
  });
});
