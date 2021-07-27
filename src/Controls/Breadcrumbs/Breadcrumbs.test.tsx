import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import BreadCrumbs from "./Breadcrumbs";

describe("BreadCrumbs component", () => {
  const mockCrumbOne = {
    title: "Crumb One",
    action: jest.fn(),
  };

  const mockCrumbTwo = {
    title: "Crumb Two",
    disabled: true,
  };

  const MOCK_CRUMBS = [mockCrumbOne, mockCrumbTwo];

  it("renders when there are crumbs", () => {
    render(<BreadCrumbs crumbs={MOCK_CRUMBS} />);

    expect(screen.getByTestId("breadcrumbs")).toBeDefined();
  });

  it("does not render when there are no crumbs", () => {
    render(<BreadCrumbs crumbs={[]} />);

    expect(() => screen.getByTestId("breadcrumbs")).toThrow();
  });

  describe("crumbs", () => {
    it("applies crumb.title", () => {
      render(<BreadCrumbs crumbs={MOCK_CRUMBS} />);

      MOCK_CRUMBS.forEach((crumb) =>
        expect(screen.getByText(crumb.title)).toBeDefined()
      );
    });

    it("fires crumb.action on crumb click", () => {
      render(<BreadCrumbs crumbs={MOCK_CRUMBS} />);

      userEvent.click(screen.getByText(mockCrumbOne.title));

      expect(mockCrumbOne.action).toHaveBeenCalledTimes(1);
    });

    it("applies crumb.disabled", () => {
      render(<BreadCrumbs crumbs={MOCK_CRUMBS} />);

      const disabledCrumb = screen.getByText(mockCrumbTwo.title);

      expect(disabledCrumb.classList).toContain("disabled");
    });
  });
});
