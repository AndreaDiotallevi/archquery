import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import PostAnswers from "./PostAnswers";

const setup = (props = {}) => {
  return shallow(<PostAnswers {...props} />);
};

describe("PostAnswers", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ post: { answer_count: 1 } });
  });

  test("renders the main div", () => {
    const component = findByTestAttr(wrapper, "component-post-answers");
    expect(component.length).toBe(1);
  });

  test("renders text for 1 answer", () => {
    const component = findByTestAttr(wrapper, "component-post-answers");
    expect(component.children().last().text()).toEqual("answer");
  });

  test("renders text for multiple answers", () => {
    wrapper = setup({ post: { answer_count: 2 } });
    const component = findByTestAttr(wrapper, "component-post-answers");
    expect(component.children().last().text()).toEqual("answers");
  });
});
