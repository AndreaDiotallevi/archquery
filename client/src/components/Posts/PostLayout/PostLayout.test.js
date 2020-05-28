import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import PostLayout from "./PostLayout";

const setup = (props = {}) => {
  return shallow(<PostLayout {...props} />);
};

describe("PostLayout", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ post: {} });
  });

  test("renders the main div", () => {
    const component = findByTestAttr(wrapper, "component-post-layout");
    expect(component.length).toBe(1);
  });
});
