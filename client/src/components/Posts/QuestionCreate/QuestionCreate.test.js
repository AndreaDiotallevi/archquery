import React from "react";
import { shallow } from "enzyme";
import QuestionCreate from "./QuestionCreate";
import { storeFactory, findByTestAttr } from "../../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<QuestionCreate store={store} {...initialProps} />)
    .dive()
    .dive();
  return wrapper;
};

describe("QuestionCreate", () => {
  let state, props, wrapper;

  beforeEach(() => {
    state = { auth: { userId: 1 }, tags: ["tag"] };
    wrapper = setup(state, props);
  });

  test("renders the main div", () => {
    const component = findByTestAttr(wrapper, "component-question-create");
    expect(component.length).toBe(1);
  });
});
