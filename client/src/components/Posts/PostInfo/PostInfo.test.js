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

  // test("renders the full question excerpt if body is less or equal than 200 characters", () => {
  //   const div = findByTestAttr(wrapper, "question-excerpt-text");
  //   expect(div.props().dangerouslySetInnerHTML.__html).toEqual("body");
  // });
});
