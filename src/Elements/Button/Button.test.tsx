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

  test("Standard button styles correctly", () => {
    const wrapper = shallow(<Button onClick={() => null} title="title" />);

    const containingDiv = wrapper.find("div").at(0);

    expect(containingDiv.hasClass("button_common")).toBe(true);
    expect(containingDiv.hasClass("button_inverting")).toBe(false);
    expect(containingDiv.hasClass("button_round")).toBe(false);
    expect(containingDiv.hasClass("button_disabled")).toBe(false);
  });

  test("Inverting prop styles correctly", () => {
    const wrapper = shallow(
      <Button onClick={() => null} title="title" inverting />
    );

    const containingDiv = wrapper.find("div").at(0);

    expect(containingDiv.hasClass("button_inverting")).toBe(true);
  });

  test("Round prop styles correctly", () => {
    const wrapper = shallow(
      <Button onClick={() => null} title="title" round />
    );

    const containingDiv = wrapper.find("div").at(0);

    expect(containingDiv.hasClass("button_round")).toBe(true);
  });

  test("Disabled prop styles correctly", () => {
    const wrapper = shallow(
      <Button onClick={() => null} title="title" disabled />
    );

    const containingDiv = wrapper.find("div").at(0);

    expect(containingDiv.hasClass("button_disabled")).toBe(true);
  });

  test("Composes classes with custom className", () => {
    const wrapper = shallow(
      <Button onClick={() => null} title="title" className="foo_bar" />
    );

    const containingDiv = wrapper.find("div").at(0);

    expect(containingDiv.hasClass("foo_bar")).toBe(true);
  });

  test("Inline styling is obeyed", () => {
    const wrapper = shallow(
      <Button onClick={() => null} title="title" style={{ opacity: 0.5 }} />
    );

    const containingDivStyle = wrapper
      .find("div")
      .at(0)
      .props().style;

    expect(containingDivStyle).toHaveProperty("opacity", 0.5);
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
