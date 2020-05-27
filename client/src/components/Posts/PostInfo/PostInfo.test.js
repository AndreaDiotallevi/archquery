import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import PostInfo from "./PostInfo";

const setup = (props = {}) => {
  return shallow(<PostInfo {...props} />);
};

describe("PostInfo", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ post: {} });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-post-info");
    expect(component.length).toBe(1);
  });
});
