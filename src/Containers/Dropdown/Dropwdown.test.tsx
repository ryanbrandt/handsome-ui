import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Dropdown from "./Dropdown";

Enzyme.configure({ adapter: new Adapter() });

describe("Dropdown component", () => {
  const OPEN_CLASS = "dropdown-open";
  const CLOSE_CLASS = "dropdown-closed";

  const MOCK_CHILDREN = <div>foo</div>;

  function getContentDiv(
    wrapper: Enzyme.ShallowWrapper<
      any,
      Readonly<{}>,
      React.Component<{}, {}, any>
    >
  ) {
    return wrapper.find("div").at(2);
  }

  test("Component renders", () => {
    const wrapper = shallow(<Dropdown>{MOCK_CHILDREN}</Dropdown>);

    expect(wrapper.exists()).toBeTruthy();
  });

  test("Renders children", () => {
    const wrapper = shallow(<Dropdown>{MOCK_CHILDREN}</Dropdown>);

    expect(wrapper.contains(MOCK_CHILDREN)).toBeTruthy();
  });

  test("Opens and closes on click", () => {
    const wrapper = shallow(<Dropdown>{MOCK_CHILDREN}</Dropdown>);

    expect(getContentDiv(wrapper).hasClass(CLOSE_CLASS)).toBeTruthy();
    expect(getContentDiv(wrapper).hasClass(OPEN_CLASS)).toBeFalsy();

    wrapper.simulate("click");

    expect(getContentDiv(wrapper).hasClass(CLOSE_CLASS)).toBeFalsy();
    expect(getContentDiv(wrapper).hasClass(OPEN_CLASS)).toBeTruthy();
  });

  test("Executes onOpen function on open click", () => {
    const mockFn = jest.fn();

    const wrapper = shallow(
      <Dropdown onOpen={mockFn}>{MOCK_CHILDREN}</Dropdown>
    );

    wrapper.simulate("click");

    expect(mockFn).toHaveBeenCalledTimes(1);

    wrapper.simulate("click");

    expect(mockFn).toHaveBeenCalledTimes(1);

    wrapper.simulate("click");

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test("Renders heading string", () => {
    const MOCK_HEADING = "Heading";
    const wrapper = shallow(
      <Dropdown heading={MOCK_HEADING}>{MOCK_CHILDREN}</Dropdown>
    );

    expect(wrapper.contains(MOCK_HEADING)).toBeTruthy();
  });

  test("Renders heading JSX", () => {
    const MOCK_HEADING = <div>"Heading"</div>;
    const wrapper = shallow(
      <Dropdown heading={MOCK_HEADING}>{MOCK_CHILDREN}</Dropdown>
    );

    expect(wrapper.contains(MOCK_HEADING)).toBeTruthy();
  });

  test("Respects defaultOpen prop", () => {
    const wrapper = shallow(<Dropdown defaultOpen>{MOCK_CHILDREN}</Dropdown>);

    expect(getContentDiv(wrapper).hasClass(OPEN_CLASS)).toBeTruthy();
    expect(getContentDiv(wrapper).hasClass(CLOSE_CLASS)).toBeFalsy();

    wrapper.simulate("click");

    expect(getContentDiv(wrapper).hasClass(OPEN_CLASS)).toBeFalsy();
    expect(getContentDiv(wrapper).hasClass(CLOSE_CLASS)).toBeTruthy();
  });

  test("Respects dividerTop prop", () => {
    const TOP_DIVIDER_CLASS = "dropdown_container_divider_top";
    const dividerWrapper = shallow(
      <Dropdown dividerTop>{MOCK_CHILDREN}</Dropdown>
    );
    const wrapper = shallow(<Dropdown>{MOCK_CHILDREN}</Dropdown>);

    expect(wrapper.find("Divider").exists()).toBeFalsy();

    expect(dividerWrapper.find("Divider").exists()).toBeTruthy();
    expect(dividerWrapper.find("Divider").props().className).toBe(
      TOP_DIVIDER_CLASS
    );
  });

  test("Respects dividerBottom prop", () => {
    const BOTTOM_DIVIDER_CLASS = "dropdown_container_divider_bottom";
    const dividerWrapper = shallow(
      <Dropdown dividerBottom>{MOCK_CHILDREN}</Dropdown>
    );
    const wrapper = shallow(<Dropdown>{MOCK_CHILDREN}</Dropdown>);

    expect(wrapper.find("Divider").exists()).toBeFalsy();

    expect(dividerWrapper.find("Divider").exists()).toBeTruthy();
    expect(dividerWrapper.find("Divider").props().className).toBe(
      BOTTOM_DIVIDER_CLASS
    );
  });

  test("Applies headingClasses prop", () => {
    const wrapper = shallow(
      <Dropdown heading="Foo" headingClasses="foo">
        {MOCK_CHILDREN}
      </Dropdown>
    );

    expect(
      wrapper
        .find("div")
        .at(2)
        .hasClass("foo")
    ).toBeTruthy();
  });

  test("Applies contentClasses prop", () => {
    const wrapper = shallow(
      <Dropdown contentClasses="foo">{MOCK_CHILDREN}</Dropdown>
    );

    expect(getContentDiv(wrapper).hasClass("foo")).toBeTruthy();
  });
});
