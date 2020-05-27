import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../test/testUtils";
import Header from "./Header";

const setup = (props = {}) => {
  return shallow(<Header {...props} />);
};

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-header");
    expect(component.length).toBe(1);
  });
});
