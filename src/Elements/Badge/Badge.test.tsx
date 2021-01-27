import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Badge from "./Badge";

Enzyme.configure({ adapter: new Adapter() });

describe("Badge Component", () => {
  const MOCK_TEXT_CONTENT = "foo";

  const MOCK_REACT_CONTENT = <div>foo</div>;

  function getContainingDiv(
    wrapper: Enzyme.ShallowWrapper<
      any,
      Readonly<{}>,
      React.Component<{}, {}, any>
    >
  ) {
    return wrapper.find("div").at(0);
  }

  test("Component renders", () => {
    const wrapper = shallow(<Badge content={MOCK_TEXT_CONTENT} />);

    expect(wrapper.exists()).toBe(true);
  });

  test("Component renders text content", () => {
    const wrapper = shallow(<Badge content={MOCK_TEXT_CONTENT} />);

    expect(wrapper.find(MOCK_TEXT_CONTENT)).toBeDefined();
  });

  test("Component renders react content", () => {
    const wrapper = shallow(<Badge content={MOCK_REACT_CONTENT} />);

    expect(wrapper.find(MOCK_REACT_CONTENT)).toBeDefined();
  });

  test("Component applies CSS className prop", () => {
    const MOCK_CLASSNAME = "foo_class";

    const wrapper = shallow(
      <Badge className={MOCK_CLASSNAME} content={MOCK_TEXT_CONTENT} />
    );

    expect(getContainingDiv(wrapper).hasClass(MOCK_CLASSNAME)).toBeTruthy();
  });

  test("Component applies inline style prop", () => {
    const wrapper = shallow(
      <Badge style={{ color: "red" }} content={MOCK_TEXT_CONTENT} />
    );

    expect(getContainingDiv(wrapper).get(0).props.style).toHaveProperty(
      "color"
    );
    expect(getContainingDiv(wrapper).get(0).props.style.color).toEqual("red");
  });
});
