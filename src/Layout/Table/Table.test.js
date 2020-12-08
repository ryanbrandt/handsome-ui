import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Table from "./Table";
import TableRow from "../TableRow/TableRow";
import TableCell from "../TableCell/TableCell";

Enzyme.configure({ adapter: new Adapter() });

const mockChildren = (
  <TableRow>
    <TableCell>foo</TableCell>
  </TableRow>
);

const mockTable = <Table headers={["mock"]}>{mockChildren}</Table>;

describe("Table component", () => {
  test("Component renders", () => {
    const wrapper = shallow(mockTable);

    expect(wrapper.exists()).toBe(true);
  });

  test("Renders headers when strings", () => {
    const wrapper = shallow(mockTable);

    expect(wrapper.contains("mock")).toBe(true);
  });

  test("Renders headers when react elements", () => {
    const mockHeader = <h1>mock</h1>;

    const wrapper = shallow(
      <Table headers={[mockHeader]}>
        <TableRow>
          <TableCell>foo</TableCell>
        </TableRow>
      </Table>
    );

    expect(wrapper.contains(mockHeader)).toBe(true);
  });

  test("Renders children", () => {
    const wrapper = shallow(mockTable);

    expect(wrapper.contains(mockChildren)).toBe(true);
  });

  test("Applies CSS class prop", () => {
    const wrapper = shallow(
      <Table className="custom_class" headers={["mock"]}>
        <TableRow>
          <TableCell>foo</TableCell>
        </TableRow>
      </Table>
    );

    const table = wrapper.find("table");

    expect(table.hasClass("custom_class")).toBe(true);
  });

  test("Applies inline styles", () => {
    const wrapper = shallow(
      <Table style={{ opacity: 0.5 }} headers={["mock"]}>
        <TableRow>
          <TableCell>foo</TableCell>
        </TableRow>
      </Table>
    );

    const table = wrapper.find("table");

    expect(table.prop("style")).toHaveProperty("opacity", 0.5);
  });
});
