import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import QuestionListHeader from "./QuestionListHeader";

const setup = (props = {}) => {
  return shallow(<QuestionListHeader {...props} />);
};

describe("QuestionListHeader", () => {
  let wrapper;

  describe("when there is a tag", () => {
    beforeEach(() => {
      wrapper = setup({ tag: "tag" });
    });

    test("renders the main div", () => {
      const component = findByTestAttr(
        wrapper,
        "component-question-list-header"
      );
      expect(component.length).toBe(1);
    });

    test("renders the tag in the header", () => {
      const component = findByTestAttr(
        wrapper,
        "component-question-list-header"
      );
      expect(component.children().first().text()).toEqual(
        "Questions tagged [tag]"
      );
    });
  });

  describe("when there is no tag", () => {
    beforeEach(() => {
      wrapper = setup({ tag: null });
    });

    test("renders the main div", () => {
      const component = findByTestAttr(
        wrapper,
        "component-question-list-header"
      );
      expect(component.length).toBe(1);
    });

    test("renders 'All Questions'", () => {
      const component = findByTestAttr(
        wrapper,
        "component-question-list-header"
      );
      expect(component.children().first().text()).toEqual("All Questions");
    });
  });
});
