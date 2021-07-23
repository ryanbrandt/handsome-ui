import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Text from "./Text";

Enzyme.configure({ adapter: new Adapter() });

describe("Text component", () => {
  test("Component renders", () => {
    const wrapper = shallow(<Text />);

    expect(wrapper).toBeDefined();
  });

  test("Renders label", () => {
    const wrapper = mount(
      <Text label="My label" value="" onChange={() => null} />
    );

    expect(wrapper.find("label").contains("My label")).toBe(true);
  });

  test("Renders errors", () => {
    const wrapper = mount(
      <Text error="My error" value="" onChange={() => null} />
    );

    expect(wrapper.find("span").contains("My error")).toBe(true);
  });

  test("Renders help text", () => {
    const wrapper = mount(<Text help="help" value="" onChange={() => null} />);

    expect(wrapper.find("span").contains("help")).toBe(true);
  });

  test("Styles appropriately when disabled", () => {
    const wrapper = mount(<Text value="" onChange={() => null} disabled />);

    const inputTag = wrapper.find("textarea");

    expect(inputTag.hasClass("text_text_disabled")).toBe(true);
  });

  test("Execute onChange function when value changed", () => {
    const mockFn = jest.fn(() => null);
    const wrapper = mount(<Text onChange={mockFn} />);

    wrapper.find("textarea").simulate("change", {
      currentTarget: { value: "change" },
    });

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("Execute onBlur function when leaves focus", () => {
    const mockFn = jest.fn(() => null);
    const wrapper = mount(<Text onBlur={mockFn} />);

    wrapper.find("textarea").simulate("blur", {
      currentTarget: { value: "blur" },
    });

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("CSS class props are applied", () => {
    const wrapper = mount(
      <Text className="text_class" containerClassName="container_class" />
    );

    const containingDiv = wrapper.find("div").at(0);
    const textarea = wrapper.find("textarea");

    expect(containingDiv.hasClass("container_class")).toBe(true);
    expect(textarea.hasClass("text_class")).toBe(true);
  });

  test("Inline style props are applied", () => {
    const wrapper = mount(
      <Text style={{ color: "blue" }} containerStyle={{ color: "red" }} />
    );

    const containingDiv = wrapper.find("div").at(0);
    const textarea = wrapper.find("textarea");

    expect(containingDiv.get(0).props.style).toHaveProperty("color");
    expect(textarea.get(0).props.style).toHaveProperty("color");

    expect(containingDiv.get(0).props.style.color).toEqual("red");
    expect(textarea.get(0).props.style.color).toEqual("blue");
  });
});
