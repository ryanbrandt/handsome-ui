import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "./Button";

Enzyme.configure({ adapter: new Adapter() });

describe("Button Component", () => {
  test("Component renders", () => {
    const wrapper = shallow(<Button onClick={() => null} title="title" />);

    expect(wrapper.exists()).toBe(true);
  });

  test("Inverting prop styles correctly", () => {
    const wrapper = shallow(
      <Button onClick={() => null} title="title" inverting />
    );

    const containingDiv = wrapper.find("div").at(0);

    expect(containingDiv.hasClass("button_inverting")).toBe(true);
    expect(containingDiv.hasClass("button_standara")).toBe(false);
  });

  test("Standard button styles correctly", () => {
    const wrapper = shallow(<Button onClick={() => null} title="title" />);

    const containingDiv = wrapper.find("div").at(0);

    expect(containingDiv.hasClass("button_standard")).toBe(true);
    expect(containingDiv.hasClass("button_inverting")).toBe(false);
  });

  test("Disabled prop styles correctly", () => {
    const wrapper = shallow(
      <Button onClick={() => null} title="title" disabled />
    );

    const containingDiv = wrapper.find("div").at(0);

    expect(containingDiv.hasClass("button_disabled")).toBe(true);
  });

  test("onClick prop triggered onClick", () => {
    const mockFn = jest.fn(() => null);

    const wrapper = shallow(<Button onClick={mockFn} title="title" />);
    wrapper
      .find("div")
      .at(0)
      .simulate("click");

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
