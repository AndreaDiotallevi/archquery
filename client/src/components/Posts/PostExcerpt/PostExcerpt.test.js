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

  test("renders the full question excerpt if body is less or equal than 100 characters", () => {
    const component = findByTestAttr(wrapper, "component-question-excerpt");
    expect(
      component.children().first().props().dangerouslySetInnerHTML.__html
    ).toEqual("body");
  });

  test("renders the first 100 characters of the question excerpt if body is more than 100 characters", () => {
    wrapper = setup({
      post: {
        body:
          "verylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongveryl",
      },
    });
    const component = findByTestAttr(wrapper, "component-question-excerpt");
    expect(
      component.children().first().props().dangerouslySetInnerHTML.__html
    ).toEqual(
      "verylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongvery..."
    );
  });
});
