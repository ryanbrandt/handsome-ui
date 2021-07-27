import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FileInput from "./FileInput";

describe("FileInput component", () => {
  const getInput = (): HTMLInputElement => {
    return screen.getByLabelText("Choose Files") as HTMLInputElement;
  };

  it("renders", () => {
    render(<FileInput onChange={jest.fn()} selection={[]} />);

    expect(screen.getByTestId("fileInput")).toBeDefined();
  });

  describe("when files are selected", () => {
    it("fires onChange prop with selected files", () => {
      const mockOnChange = jest.fn();

      const mockFiles = [new File(["foo"], "foo.png", { type: "image/png" })];

      render(<FileInput onChange={mockOnChange} selection={[]} />);

      const input = getInput();
      userEvent.upload(input, mockFiles);

      expect(mockOnChange).toHaveBeenCalledWith(mockFiles);
    });
  });

  describe("when selection is empty", () => {
    it("displays no selection message", () => {
      render(<FileInput onChange={jest.fn()} selection={[]} />);

      expect(screen.getByText("No files selected")).toBeDefined();
    });
  });

  describe("when selection is nonempty", () => {
    it("displays nonempty selection message", () => {
      render(
        <FileInput
          onChange={jest.fn()}
          selection={[new File(["foo"], "foo.png", { type: "image/png" })]}
        />
      );

      expect(screen.getByText("1 file(s) selected")).toBeDefined();
    });
  });

  describe("when label is provided", () => {
    it("renders the label above the input", () => {
      const mockLabel = "Label";

      render(
        <FileInput onChange={jest.fn()} selection={[]} label={mockLabel} />
      );

      expect(screen.getByText(mockLabel)).toBeDefined();
    });
  });

  describe("when error is provided", () => {
    it("renders the errror below the input", () => {
      const mockError = "Error";

      render(
        <FileInput onChange={jest.fn()} selection={[]} error={mockError} />
      );

      expect(screen.getByText(mockError)).toBeDefined();
    });
  });

  describe("file input props", () => {
    it("applies the multiple prop to the file input", () => {
      render(<FileInput onChange={jest.fn()} selection={[]} multiple />);

      const input = getInput();

      expect(input.multiple).toBeTruthy();
    });

    it("it applies the accept prop to the file input", () => {
      const mockAccept = "image/png";
      render(
        <FileInput onChange={jest.fn()} selection={[]} accept={mockAccept} />
      );

      const input = getInput();

      expect(input.accept).toBe(mockAccept);
    });
  });
});
