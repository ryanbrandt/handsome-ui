import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AppContainer from "./AppContainer";

Enzyme.configure({ adapter: new Adapter() });

describe("App container", () => {
  const MOCK_CHILDREN = <div>child</div>;

  function getContainerDiv(
    wrapper: Enzyme.ShallowWrapper<
      any,
      Readonly<{}>,
      React.Component<{}, {}, any>
    >
  ) {
    return wrapper.find("div").at(0);
  }

  test("Component renders", () => {
    const wrapper = shallow(<AppContainer>{MOCK_CHILDREN}</AppContainer>);

    expect(wrapper.exists()).toBe(true);
  });

  test("Component renders children", () => {
    const wrapper = shallow(<AppContainer>{MOCK_CHILDREN}</AppContainer>);

    const children = wrapper.find("div").contains("child");

    expect(children).toBeDefined();
  });

  test("Component renders header prop", () => {
    const MOCK_HEADER = <div>header</div>;

    const wrapper = shallow(
      <AppContainer header={MOCK_HEADER}>{MOCK_CHILDREN}</AppContainer>
    );

    const header = wrapper.find("div").contains("header");

    expect(header).toBeDefined();
  });

  test("Component applies className prop", () => {
    const MOCK_CLASS = "jest-class";

    const wrapper = shallow(
      <AppContainer className={MOCK_CLASS}>{MOCK_CHILDREN}</AppContainer>
    );

    expect(getContainerDiv(wrapper).hasClass(MOCK_CLASS)).toBeTruthy();
  });

  test("Component applies inline style prop", () => {
    const MOCK_STYLES = {
      display: "flex",
    };

    const wrapper = shallow(
      <AppContainer style={MOCK_STYLES}>{MOCK_CHILDREN}</AppContainer>
    );

    expect(getContainerDiv(wrapper).get(0).props.style).toEqual(MOCK_STYLES);
  });

  test("Component adds resize listener on mount, and removes on unmount", () => {
    const EXPECTED_EVENT = "resize";

    let events = new Array<EventListenerOrEventListenerObject>();

    jest
      .spyOn(window, "addEventListener")
      .mockImplementation((event, handle, options?) => {
        events[event] = handle;
      });

    jest
      .spyOn(window, "removeEventListener")
      .mockImplementation((event, handle, options?) => {
        events[event] = undefined;
      });

    const wrapper = mount(<AppContainer>{MOCK_CHILDREN}</AppContainer>);

    expect(events[EXPECTED_EVENT]).toBeDefined();

    wrapper.unmount();

    expect(events[EXPECTED_EVENT]).toBeUndefined();
  });
});
