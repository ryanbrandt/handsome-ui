import { renderHook } from "@testing-library/react-hooks";

import useWindowSize, { WindowSize, _useWindowSize } from "./useWindowSize";

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

  it("adds an event listener on call and cleans up on unmount", () => {
    const EXPECTED_EVENT = "resize";
    let events = new Array<EventListenerOrEventListenerObject>();

    jest
      .spyOn(window, "addEventListener")
      .mockImplementation((event, handle, _options) => {
        events[event] = handle;
      });

    jest
      .spyOn(window, "removeEventListener")
      .mockImplementation((event, _handle, _options) => {
        events[event] = undefined;
      });

    const hook = renderHook(() => useWindowSize());

    expect(events[EXPECTED_EVENT]).toBeDefined();

    hook.unmount();

    expect(events[EXPECTED_EVENT]).toBeUndefined();
  });

  it("returns the window sizes from the window object", () => {
    const MOCK_SIZES: WindowSize = {
      innerWidth: 500,
      innerHeight: 600,
      outerWidth: 700,
      outerHeight: 800,
    };

    jest
      .spyOn(global, "window", "get")
      // @ts-ignore
      .mockImplementation(() => ({
        ...MOCK_SIZES,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      }));

    const { result } = renderHook(() => useWindowSize());

    expect(result.current).toEqual(MOCK_SIZES);
  });
});
