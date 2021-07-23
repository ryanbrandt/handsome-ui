import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Row from "./Row";
import { AppContext } from "../../contexts";
import Column from "../Column/Column";

Enzyme.configure({ adapter: new Adapter() });

const MOCK_CHILD = <div>foo</div>;

describe("Row component", () => {
  function getRowDiv(
    wrapper: Enzyme.ShallowWrapper<
      any,
      Readonly<{}>,
      React.Component<{}, {}, any>
    >
  ) {
    return wrapper.find("div").at(0);
  }

  test("Component renders", () => {
    const wrapper = shallow(<Row>{MOCK_CHILD}</Row>);

    expect(wrapper.exists()).toBeTruthy();
  });

  test("Renders children", () => {
    const wrapper = mount(<Row>{MOCK_CHILD}</Row>);

    expect(wrapper.contains(MOCK_CHILD)).toBeTruthy();
  });

  test("Defaults flex version to 'default'", () => {
    const wrapper = shallow(<Row>{MOCK_CHILD}</Row>);

    const rowDiv = getRowDiv(wrapper);

    expect(getRowDiv(wrapper).hasClass("row")).toBeTruthy();
  });

  test("Applies version prop correctly", () => {
    const defaultWrapper = shallow(<Row version="default">{MOCK_CHILD}</Row>);
    const spaceBetweennWrapper = shallow(
      <Row version="space-between">{MOCK_CHILD}</Row>
    );
    const spaceEvenlyWrapper = shallow(
      <Row version="space-evenly">{MOCK_CHILD}</Row>
    );

    expect(getRowDiv(defaultWrapper).hasClass("row")).toBeTruthy();
    expect(
      getRowDiv(spaceBetweennWrapper).hasClass("row_space-between")
    ).toBeTruthy();
    expect(
      getRowDiv(spaceEvenlyWrapper).hasClass("row_space-evenly")
    ).toBeTruthy();
  });

  test("Applies className prop", () => {
    const wrapper = shallow(<Row className="foo">{MOCK_CHILD}</Row>);

    expect(getRowDiv(wrapper).hasClass("foo")).toBeTruthy();
  });

  test("Applies inline style prop", () => {
    const wrapper = shallow(<Row style={{ color: "red" }}>{MOCK_CHILD}</Row>);

    const rowDiv = getRowDiv(wrapper);

    expect(rowDiv.props().style.color).toBe("red");
  });

  test("Defaults to responsive and renders column when mobile", () => {
    const expected = <Column>{MOCK_CHILD}</Column>;

    const wrapper = mount(
      <AppContext.Provider value={{ isMobile: true }}>
        <Row>{MOCK_CHILD}</Row>
      </AppContext.Provider>
    );

    expect(wrapper.contains(expected)).toBeTruthy();
  });

  test("Applies responsive prop", () => {
    const expectedResponsive = <Column>{MOCK_CHILD}</Column>;
    const expectedNotResponsive = MOCK_CHILD;

    const responsiveWrapper = mount(
      <AppContext.Provider value={{ isMobile: true }}>
        <Row responsive>{MOCK_CHILD}</Row>
      </AppContext.Provider>
    );
    const notResponsiveWrapper = mount(
      <AppContext.Provider value={{ isMobile: true }}>
        <Row responsive={false}>{MOCK_CHILD}</Row>
      </AppContext.Provider>
    );

    expect(responsiveWrapper.contains(expectedResponsive)).toBeTruthy();
    expect(notResponsiveWrapper.contains(expectedResponsive)).toBeFalsy();
    expect(notResponsiveWrapper.contains(expectedNotResponsive)).toBeTruthy();
  });

  test("Applies mobile classname", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ isMobile: true }}>
        <Row mobileClassName="foo">{MOCK_CHILD}</Row>
      </AppContext.Provider>
    );

    const column = wrapper.find("Column");
    expect(column.hasClass("foo")).toBeTruthy();
  });

  test("Applies mobile inline styles", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ isMobile: true }}>
        <Row mobileStyle={{ color: "red" }}>{MOCK_CHILD}</Row>
      </AppContext.Provider>
    );

    const column = wrapper.find("Column");
    expect(column.props().style.color).toBe("red");
  });
});
