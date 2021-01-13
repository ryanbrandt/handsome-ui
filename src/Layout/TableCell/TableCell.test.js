import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TableCell from "./TableCell";

Enzyme.configure({ adapter: new Adapter() });

const mockChildren = "foo";

const mockCell = <TableCell>{mockChildren}</TableCell>;

describe("TableCell component", () => {
  test("Component renders", () => {
    const wrapper = shallow(mockCell);

    expect(wrapper.exists()).toBe(true);
  });

  test("Renders children", () => {
    const wrapper = shallow(mockCell);

    expect(wrapper.contains(mockChildren)).toBe(true);
  });

  test("Applies CSS class prop", () => {
    const wrapper = shallow(
      <TableCell className="custom_class">foo</TableCell>
    );

    expect(wrapper.find("td").hasClass("custom_class")).toBe(true);
  });

  test("Applies inline styles", () => {
    const wrapper = shallow(
      <TableCell style={{ opacity: 0.5 }}>foo</TableCell>
    );

    expect(wrapper.find("td").prop("style")).toHaveProperty("opacity", 0.5);
  });
});
