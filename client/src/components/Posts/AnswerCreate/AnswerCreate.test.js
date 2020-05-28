import React from "react";
import { shallow } from "enzyme";
import AnswerCreate from "./AnswerCreate";
import { storeFactory, findByTestAttr } from "../../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<AnswerCreate store={store} {...initialProps} />)
    .dive()
    .dive();
  return wrapper;
};

describe("AnswerCreate", () => {
  let state, props, wrapper;

  describe("when user is authenticated", () => {
    beforeEach(() => {
      state = { auth: { userId: 1 } };
      wrapper = setup(state, props);
    });

    test("renders the main div", () => {
      const div = findByTestAttr(wrapper, "component-answer-create");
      expect(div.length).toEqual(1);
    });
  });

  describe("when user is not authenticated", () => {
    beforeEach(() => {
      state = {};
      wrapper = setup(state, props);
    });

    test("renders the main div", () => {
      const div = findByTestAttr(wrapper, "component-answer-create");
      expect(div.length).toEqual(0);
    });
  });
});
