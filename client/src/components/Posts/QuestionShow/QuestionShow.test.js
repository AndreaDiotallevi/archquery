import React from "react";
import { shallow } from "enzyme";
import QuestionShow from "./QuestionShow";
import { storeFactory } from "../../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(
    <QuestionShow store={store} {...initialProps} />
  ).dive();
  return wrapper;
};

describe("QuestionShow", () => {
  let state, props, wrapper;

  beforeEach(() => {
    state = {};
    props = { match: { params: {} } };
    wrapper = setup(state, props);
  });

  test("renders without errors", () => {
    expect(wrapper.length).toEqual(1);
  });
});
