import { renderHook } from "@testing-library/react-hooks";

import useWindowSize, { _useWindowSize } from "./useWindowSize";

import useAppContextOrHook from "./useAppContextOrHook";

jest.mock("./useAppContextOrHook");

const mockedUseAppContextOrHook = useAppContextOrHook as jest.MockedFunction<
  typeof useAppContextOrHook
>;

describe("useWindowSize", () => {
  beforeAll(() =>
    mockedUseAppContextOrHook.mockImplementation((_key, hook) => hook())
  );

  it("is wrapped in useAppContextOrHook", () => {
    renderHook(() => useWindowSize());

    expect(mockedUseAppContextOrHook).toHaveBeenCalledWith(
      "windowSize",
      _useWindowSize
    );
  });
});
