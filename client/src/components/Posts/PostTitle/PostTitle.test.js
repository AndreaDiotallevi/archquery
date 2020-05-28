import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import PostTitle from "./PostTitle";

const setup = (props = {}) => {
  return shallow(<PostTitle {...props} />);
};

describe("PostTitle", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ post: { id: 1, title: "title" } });
  });

  test("renders the main div", () => {
    const component = findByTestAttr(wrapper, "component-post-title");
    expect(component.length).toBe(1);
  });
});
