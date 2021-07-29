import React from "react";

import useAppContextOrHook from "./useAppContextOrHook";

describe("useAppContextOrHook", () => {
  const mockContextKey = "key";
  const mockContextValue = "value";

  const mockHookValue = "valueAlso";
  const mockHook = jest.fn(() => mockHookValue);

  describe("when the key is defined on AppContext", () => {
    beforeEach(() => {
      jest
        .spyOn(React, "useContext")
        .mockReturnValueOnce({ [mockContextKey]: mockContextValue });
    });

    it("relies on context for the value", () => {
      const result = useAppContextOrHook(mockContextKey, mockHook);

      expect(mockHook).not.toHaveBeenCalled();
      expect(result).toBe(mockContextValue);
    });
  });

  describe("when the key is not defined on AppContext", () => {
    beforeEach(() => {
      jest.spyOn(React, "useContext").mockReturnValueOnce({});
    });

    it("returns the provided hook with any applied params", () => {
      const mockParam = "someParam";

      const result = useAppContextOrHook(mockContextKey, mockHook, mockParam);

      expect(mockHook).toBeCalledTimes(1);
      expect(mockHook).toHaveBeenCalledWith(mockParam);
      expect(result).toBe(mockHookValue);
    });
  });
});
