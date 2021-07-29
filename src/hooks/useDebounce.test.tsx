import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import useDebounce from "./useDebounce";

describe("useDebounce", () => {
  const mockInitialValue = "bar";
  const mockUpdateValue = "foo";

  let mockSetStateValue = mockInitialValue;
  const mockSetStateSetter = jest.fn(
    (value: any) => (mockSetStateValue = value)
  );

  const MockComponent = () => {
    const [value, setValue] = React.useState(mockInitialValue);

    const debouncedValue = useDebounce(value);

    return (
      <div onClick={() => setValue(mockUpdateValue)}>{debouncedValue}</div>
    );
  };

  beforeAll(() => {
    jest.useFakeTimers();

    jest
      .spyOn(React, "useState")
      .mockImplementation(() => [mockSetStateValue, mockSetStateSetter]);
  });

  it("debounces updates applied to the value", () => {
    render(<MockComponent />);
    jest.advanceTimersByTime(500);

    const stateUpdateBtn = screen.getByText(mockInitialValue);

    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
    expect(mockSetStateSetter).toHaveBeenCalledTimes(1);
    expect(mockSetStateSetter).toHaveBeenCalledWith(mockInitialValue);

    userEvent.click(stateUpdateBtn);
    jest.advanceTimersByTime(500);

    expect(mockSetStateSetter).toHaveBeenCalledTimes(2);
    expect(mockSetStateSetter).toHaveBeenCalledWith(mockUpdateValue);
  });
});
