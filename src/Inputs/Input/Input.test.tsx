import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Input from "./Input";
import { Search } from "../../Svgs";

Enzyme.configure({ adapter: new Adapter() });

describe("Input component", () => {
  test("Component renders", () => {
    const wrapper = mount(<Input value="" onChange={() => null} />);

    expect(wrapper.exists()).toBe(true);
  });

  test("Renders appropriate input type", () => {
    const textWrapper = mount(<Input value="" onChange={() => null} />);
    const numberWrapper = mount(
      <Input type="number" value="" onChange={() => null} />
    );
    const dateWrapper = mount(
      <Input type="date" value="" onChange={() => null} />
    );

    expect(textWrapper.find("input").props().type).toBe("text");
    expect(numberWrapper.find("input").props().type).toBe("number");
    expect(dateWrapper.find("input").props().type).toBe("date");
  });

  test("Renders label", () => {
    const wrapper = mount(
      <Input label="My label" value="" onChange={() => null} />
    );

    expect(wrapper.find("label").contains("My label")).toBe(true);
  });

  test("Renders errors", () => {
    const wrapper = mount(
      <Input error="My error" value="" onChange={() => null} />
    );

    expect(wrapper.find("span").contains("My error")).toBe(true);
  });

  test("Renders help text", () => {
    const wrapper = mount(<Input help="help" value="" onChange={() => null} />);

    expect(wrapper.find("span").contains("help")).toBe(true);
  });

  test("Renders left icon prop", () => {
    const wrapper = mount(
      <Input iconLeft={<Search />} value="" onChange={() => null} />
    );

    expect(wrapper.find(Search).exists()).toBe(true);
  });

  test("Styles appropriately when disabled", () => {
    const wrapper = mount(<Input value="" onChange={() => null} disabled />);

    const inputTag = wrapper.find("input");

    expect(inputTag.hasClass("input_input_disabled")).toBe(true);
  });

  test("Execute onChange function when value changed", () => {
    const mockFn = jest.fn(() => null);
    const wrapper = mount(<Input onChange={mockFn} />);

    wrapper.find("input").simulate("change", {
      currentTarget: { value: "change" },
    });

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("Execute onBlur function when leaves focus", () => {
    const mockFn = jest.fn(() => null);
    const wrapper = mount(<Input onBlur={mockFn} />);

    wrapper.find("input").simulate("blur", {
      currentTarget: { value: "blur" },
    });

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("CSS class props are applied", () => {
    const wrapper = mount(
      <Input className="input_class" containerClassName="container_class" />
    );

    const containingDiv = wrapper.find("div").at(0);
    const input = wrapper.find("input");

    expect(containingDiv.hasClass("container_class")).toBe(true);
    expect(input.hasClass("input_class")).toBe(true);
  });

  test("Inline style props are applied", () => {
    const wrapper = mount(
      <Input style={{ color: "blue" }} containerStyle={{ color: "red" }} />
    );

    const containingDiv = wrapper.find("div").at(0);
    const input = wrapper.find("input");

    expect(containingDiv.get(0).props.style).toHaveProperty("color");
    expect(input.get(0).props.style).toHaveProperty("color");

    expect(containingDiv.get(0).props.style.color).toEqual("red");
    expect(input.get(0).props.style.color).toEqual("blue");
  });
});
