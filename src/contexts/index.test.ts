import { useContext } from "react";
import { renderHook } from "@testing-library/react-hooks";

import { AppContext } from ".";

describe("AppContext", () => {
  it("is defined and available for consumption", () => {
    const { result } = renderHook(() => useContext(AppContext));

    expect(result.current).toEqual({});
  });
});
