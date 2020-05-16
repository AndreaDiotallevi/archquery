import React from "react";
import { shallow } from "enzyme";
import QuestionList from "./QuestionList";
import { storeFactory } from "../../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(
    <QuestionList store={store} {...initialProps} />
  ).dive();
  return wrapper;
};

describe("QuestionList", () => {
  let state, props, wrapper;

  beforeEach(() => {
    state = {};
    wrapper = setup(state, props);
  });

  test("renders without errors", () => {
    expect(wrapper.length).toEqual(1);
  });
});
