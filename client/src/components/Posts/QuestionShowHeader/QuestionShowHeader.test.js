import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import QuestionShowHeader from "./QuestionShowHeader";

const setup = (props = {}) => {
  return shallow(<QuestionShowHeader {...props} />);
};

describe("QuestionShowHeader", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ post: {} });
  });

  test("renders without errors", () => {
    expect(wrapper.length).toEqual(1);
  });

  test("renders the main div", () => {
    const component = findByTestAttr(wrapper, "component-question-header");
    expect(component.length).toBe(1);
  });
});
