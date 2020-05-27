import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import PostStats from "./PostStats";

const setup = (props = {}) => {
  return shallow(<PostStats {...props} />);
};

describe("PostStats", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ post: { score: 1 } });
  });

  test("renders without errors", () => {
    expect(wrapper.length).toEqual(1);
  });

  test("renders the main div", () => {
    const component = findByTestAttr(wrapper, "component-post-stats");
    expect(component.length).toBe(1);
  });
});
