import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal, { TEST_ID } from "./Modal";

const MOCK_CHILDREN = <p data-testid="child">child</p>;

describe("Modal component", () => {
  it("renders", () => {
    render(
      <Modal onClose={jest.fn()} open>
        {MOCK_CHILDREN}
      </Modal>
    );

    expect(screen.getByTestId(TEST_ID)).toBeDefined();
  });

  it("does not render when open is false", () => {
    render(
      <Modal onClose={jest.fn()} open={false}>
        {MOCK_CHILDREN}
      </Modal>
    );

    expect(() => screen.getByTestId(TEST_ID)).toThrow();
  });

  it("renders children", () => {
    render(
      <Modal onClose={jest.fn()} open>
        {MOCK_CHILDREN}
      </Modal>
    );

    expect(screen.getByTestId("child")).toBeDefined();
  });

  describe("onClose prop", () => {
    it("fires on background click", () => {
      let mockOnClose = jest.fn();
      render(
        <Modal onClose={mockOnClose} open>
          {MOCK_CHILDREN}
        </Modal>
      );

      userEvent.click(screen.getByTestId(TEST_ID));

      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it("does not fire on foreground click", () => {
      let mockOnClose = jest.fn();
      render(
        <Modal onClose={mockOnClose} open>
          {MOCK_CHILDREN}
        </Modal>
      );

      userEvent.click(screen.getByTestId("child"));

      expect(mockOnClose).toHaveBeenCalledTimes(0);
    });

    it("fires on 'close' click", () => {
      let mockOnClose = jest.fn();
      render(
        <Modal onClose={mockOnClose} open>
          {MOCK_CHILDREN}
        </Modal>
      );

      userEvent.click(screen.getByText("close"));

      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });

  describe("heading prop", () => {
    const mockHeading = "Hello, foo";

    describe("when heading is a string", () => {
      it("renders the heading styled as a normal header", () => {
        render(
          <Modal onClose={jest.fn()} heading={mockHeading} open>
            {MOCK_CHILDREN}
          </Modal>
        );

        expect(screen.getByText(mockHeading)).toBeDefined();
      });
    });

    describe("when heading is a react node", () => {
      it("renders the provided react node", () => {
        const mockHeadingNode = (
          <div data-testid="mockHeading">{mockHeading}</div>
        );

        render(
          <Modal onClose={jest.fn()} heading={mockHeadingNode} open>
            {MOCK_CHILDREN}
          </Modal>
        );

        expect(screen.getByTestId("mockHeading")).toBeDefined();
      });
    });
  });

  it("applies modalClassName prop", () => {
    const mockClassName = "foo";
    render(
      <Modal onClose={jest.fn()} modalClassName={mockClassName} open>
        {MOCK_CHILDREN}
      </Modal>
    );

    const root = screen.getByTestId(TEST_ID);

    expect(root.querySelector("div").classList).toContain(mockClassName);
  });
});
