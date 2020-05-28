import React from "react";
import { shallow } from "enzyme";
import QuestionShow from "./QuestionShow";
import { storeFactory, findByTestAttr } from "../../../../test/testUtils";

global.scrollTo = jest.fn();

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<QuestionShow store={store} {...initialProps} />)
    .dive()
    .dive();
  return wrapper;
};

describe("QuestionShow", () => {
  let state, props, wrapper;

  describe("when there is a question", () => {
    beforeEach(() => {
      state = { posts: { 1: { id: 1 } } };
      props = { match: { params: { id: 1 } } };
      wrapper = setup(state, props);
    });

    test("renders the main div", () => {
      const component = findByTestAttr(wrapper, "component-question-show");
      expect(component.length).toBe(1);
    });
  });

  describe("when there is not a question", () => {
    beforeEach(() => {
      state = { posts: { 2: { id: 2 } } };
      props = { match: { params: { id: 1 } } };
      wrapper = setup(state, props);
    });

    test("does not render the main div", () => {
      const component = findByTestAttr(wrapper, "component-question-show");
      expect(component.length).toBe(0);
    });
  });
});
