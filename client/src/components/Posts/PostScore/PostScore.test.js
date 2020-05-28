import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import PostScore from "./PostScore";

const setup = (props = {}) => {
  return shallow(<PostScore {...props} />);
};

describe("PostScore", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ post: { score: 1 } });
  });

  test("renders the main div", () => {
    const component = findByTestAttr(wrapper, "component-post-score");
    expect(component.length).toBe(1);
  });

  test("renders the 'score' text if score is 1", () => {
    wrapper = setup({ post: { score: 1 } });
    const component = findByTestAttr(wrapper, "component-post-score");
    expect(component.children().last().text()).toEqual("vote");
  });

  test("renders the 'scores' text if score is more than 1", () => {
    wrapper = setup({ post: { score: 2 } });
    const component = findByTestAttr(wrapper, "component-post-score");
    expect(component.children().last().text()).toEqual("votes");
  });
});
