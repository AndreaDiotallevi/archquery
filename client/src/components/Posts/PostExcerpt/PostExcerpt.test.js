import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import PostExcerpt from "./PostExcerpt";

const setup = (props = {}) => {
  return shallow(<PostExcerpt {...props} />);
};

describe("PostExcerpt", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ post: { body: "body" } });
  });

  test("renders the main div", () => {
    const component = findByTestAttr(wrapper, "component-question-excerpt");
    expect(component.length).toBe(1);
  });

  test("renders the full question excerpt if body is less or equal than 200 characters", () => {
    const component = findByTestAttr(wrapper, "component-question-excerpt");
    expect(
      component.children().first().props().dangerouslySetInnerHTML.__html
    ).toEqual("body");
  });

  test("renders the first 200 characters of the question excerpt if body is more than 200 characters", () => {
    wrapper = setup({
      post: {
        body:
          "verylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongv",
      },
    });
    const component = findByTestAttr(wrapper, "component-question-excerpt");
    expect(
      component.children().first().props().dangerouslySetInnerHTML.__html
    ).toEqual(
      "verylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylong..."
    );
  });
});
