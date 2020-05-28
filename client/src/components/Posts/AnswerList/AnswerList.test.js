import React from "react";
import { shallow } from "enzyme";
import AnswerList from "./AnswerList";
import { storeFactory, findByTestAttr } from "../../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<AnswerList store={store} {...initialProps} />)
    .dive()
    .dive();
  return wrapper;
};

describe("AnswerList", () => {
  let state, props, wrapper;

  describe("when number of answers are more than 0", () => {
    beforeEach(() => {
      state = { posts: { 1: { id: 1 } } };
      wrapper = setup(state, props);
    });

    test("renders the main div", () => {
      const div = findByTestAttr(wrapper, "component-answer-list");
      expect(div.length).toEqual(1);
    });

    test("renders the header with one answer", () => {
      const h1 = findByTestAttr(wrapper, "answer-list-header");
      expect(h1.length).toEqual(1);
      expect(h1.text()).toEqual("1 Answer");
    });

    test("renders the header with multiple answers", () => {
      state = { posts: { 1: { id: 1 }, 2: { id: 2 } } };
      wrapper = setup(state, {});
      const h1 = findByTestAttr(wrapper, "answer-list-header");
      expect(h1.length).toEqual(1);
      expect(h1.text()).toEqual("2 Answers");
    });
  });

  describe("when no answers", () => {
    beforeEach(() => {
      state = { posts: {} };
      wrapper = setup(state, props);
    });

    test("renders the main div", () => {
      const div = findByTestAttr(wrapper, "component-answer-list");
      expect(div.length).toEqual(1);
    });

    test("does not render the header", () => {
      const h1 = findByTestAttr(wrapper, "answer-list-header");
      expect(h1.length).toEqual(0);
    });
  });
});
