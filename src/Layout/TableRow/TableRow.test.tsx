import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import TableRow from "./TableRow";
import TableCell from "../TableCell/TableCell";

Enzyme.configure({ adapter: new Adapter() });

const mockChildren = <TableCell>foo</TableCell>;

const mockRow = <TableRow>{mockChildren}</TableRow>;

describe("TableRow component", () => {
  test("Component renders", () => {
    const wrapper = shallow(mockRow);

    expect(wrapper.exists()).toBe(true);
  });

  test("Applies darkened prop", () => {
    const notDarkenedWrapper = shallow(mockRow);
    const darkenedWrapper = shallow(
      <TableRow darkened>
        <TableCell>foo</TableCell>
      </TableRow>
    );

    expect(notDarkenedWrapper.find("tr").hasClass("table_row_darkened")).toBe(
      false
    );
    expect(darkenedWrapper.find("tr").hasClass("table_row_darkened")).toBe(
      true
    );
  });

  test("Renders children", () => {
    const wrapper = shallow(mockRow);

    expect(wrapper.contains(mockChildren)).toBe(true);
  });

  test("Applies CSS class prop", () => {
    const wrapper = shallow(
      <TableRow className="custom_class">
        <TableCell>foo</TableCell>
      </TableRow>
    );

    expect(wrapper.find("tr").hasClass("custom_class")).toBe(true);
  });

  test("Applies inline styles", () => {
    const wrapper = shallow(
      <TableRow style={{ opacity: 0.5 }}>
        <TableCell>foo</TableCell>
      </TableRow>
    );

    expect(wrapper.find("tr").prop("style")).toHaveProperty("opacity", 0.5);
  });

  test("Executes onClick prop on click", () => {
    const mockFn = jest.fn(() => null);
    const wrapper = shallow(
      <TableRow onClick={mockFn}>
        <TableCell>foo</TableCell>
      </TableRow>
    );

    wrapper.find("tr").simulate("click");

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("Applies disabled prop", () => {
    const wrapper = shallow(
      <TableRow disabled>
        <TableCell>foo</TableCell>
      </TableRow>
    );

    expect(wrapper.find("tr").hasClass("table_row-disabled")).toBe(true);
  });
});
