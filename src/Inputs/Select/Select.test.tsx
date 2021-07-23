import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Select from "./Select";

Enzyme.configure({ adapter: new Adapter() });

const mockOptions = ["option 1", "option 2", "option 3"];

describe("Select component", () => {
  test("Component renders", () => {
    const wrapper = shallow(
      <Select value="" options={mockOptions} onChange={() => null} />
    );

    expect(wrapper.exists()).toBe(true);
  });

  test("Renders all options", () => {
    const wrapper = shallow(
      <Select value="" options={mockOptions} onChange={() => null} />
    );

    expect(wrapper.contains("option 1")).toBe(true);
    expect(wrapper.contains("option 2")).toBe(true);
    expect(wrapper.contains("option 3")).toBe(true);
  });

  test("Respects disabled prop", () => {
    const wrapper = shallow(
      <Select value="" options={mockOptions} onChange={() => null} disabled />
    );

    expect(wrapper.find("select").hasClass("select_select_disabled")).toBe(
      true
    );
  });

  test("Executes onChange prop onChange", () => {
    const mockFn = jest.fn(() => null);
    const wrapper = shallow(
      <Select value="" options={mockOptions} onChange={mockFn} />
    );

    wrapper.find("select").simulate("change", {
      currentTarget: { value: "option 1" },
    });

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("CSS class props are applied", () => {
    const wrapper = shallow(
      <Select
        value=""
        options={mockOptions}
        onChange={() => null}
        containerClasses="container_class"
        selectClasses="select_class"
      />
    );

    const containingDiv = wrapper.find("div").at(0);
    const select = wrapper.find("select");

    expect(containingDiv.hasClass("container_class")).toBe(true);
    expect(select.hasClass("select_class")).toBe(true);
  });
});
