import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Badge from "./Badge";

Enzyme.configure({ adapter: new Adapter() });

const mockContent = <div>mock</div>;

describe("Badge Component", () => {
  test("Component renders", () => {
    const wrapper = shallow(<Badge content="foo" />);

    expect(wrapper.exists()).toBe(true);
  });
});
