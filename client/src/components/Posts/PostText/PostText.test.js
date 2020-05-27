import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import PostText from "./PostText";

const setup = (props = {}) => {
  return shallow(<PostText {...props} />);
};

describe("PostText", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ post: { body: "body" } });
  });

  test("renders without errors", () => {
    expect(wrapper.length).toEqual(1);
  });

  test("renders the main div", () => {
    const component = findByTestAttr(wrapper, "component-post-text");
    expect(component.length).toBe(1);
  });
});
