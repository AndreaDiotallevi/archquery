import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import PostSummary from "./PostSummary";

const setup = (props = {}) => {
  return shallow(<PostSummary {...props} />);
};

describe("PostSummary", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ post: {} });
  });

  test("renders without errors", () => {
    expect(wrapper.length).toEqual(1);
  });

  test("renders the main div", () => {
    const component = findByTestAttr(wrapper, "component-post-summary");
    expect(component.length).toBe(1);
  });
});
