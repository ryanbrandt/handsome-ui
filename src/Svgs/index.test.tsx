import React from "react";
import { render } from "@testing-library/react";

import * as Svgs from ".";

describe("SVG Components", () => {
  it.each(Object.keys(Svgs))("renders", (svgKey) => {
    const SVGComponent = Svgs[svgKey] as React.FunctionComponent;

    const { container } = render(<SVGComponent />);

    expect(container.querySelector("svg")).toBeDefined();
  });
});
