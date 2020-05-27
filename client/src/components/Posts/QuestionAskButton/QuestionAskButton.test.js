import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import QuestionAskButton from "./QuestionAskButton";

describe("QuestionAskButton", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<QuestionAskButton />);
  });

  test("renders without errors", () => {
    expect(wrapper.length).toEqual(1);
  });

  test("renders the main div", () => {
    const component = findByTestAttr(wrapper, "component-question-ask-button");
    expect(component.length).toBe(1);
  });
});
