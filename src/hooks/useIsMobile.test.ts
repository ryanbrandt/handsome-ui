import { renderHook } from "@testing-library/react-hooks";

import useIsMobile, { _useIsMobile } from "./useIsMobile";

import useAppContextOrHook from "./useAppContextOrHook";
import useWindowSize from "./useWindowSize";

jest.mock("./useAppContextOrHook");
jest.mock("./useWindowSize");

const mockedUseAppContextOrHook = useAppContextOrHook as jest.MockedFunction<
  typeof useAppContextOrHook
>;
const mockedUseWindowSize = useWindowSize as jest.MockedFunction<
  typeof useWindowSize
>;

describe("useIsMobile", () => {
  beforeAll(() =>
    mockedUseAppContextOrHook.mockImplementation((_key, hook) => hook())
  );

  it("is wrapped in a call to useAppContextOrHook", () => {
    renderHook(() => useIsMobile());

    expect(mockedUseAppContextOrHook).toHaveBeenNthCalledWith(
      1,
      "isMobile",
      _useIsMobile
    );
  });

  describe("when innerWidth is less than 1024", () => {
    beforeAll(() => {
      mockedUseWindowSize.mockReturnValue({
        innerWidth: 1023,
        innerHeight: 1000,
        outerWidth: 1000,
        outerHeight: 1000,
      });
    });

    it("returns true", () => {
      const { result } = renderHook(() => useIsMobile());

      expect(result.current).toBeTruthy();
    });
  });

  describe("when innerWidth is greater-than-or-equal 1024", () => {
    beforeAll(() => {
      mockedUseWindowSize.mockReturnValue({
        innerWidth: 1025,
        innerHeight: 1000,
        outerWidth: 1000,
        outerHeight: 1000,
      });
    });

    it("returns false", () => {
      const { result } = renderHook(() => useIsMobile());

      expect(result.current).toBeFalsy();
    });
  });
});
