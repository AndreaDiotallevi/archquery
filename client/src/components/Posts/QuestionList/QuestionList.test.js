import React from "react";
import { shallow } from "enzyme";
import QuestionList from "./QuestionList";
import { storeFactory, findByTestAttr } from "../../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<QuestionList store={store} {...initialProps} />)
    .dive()
    .dive();
  return wrapper;
};

describe("QuestionList", () => {
  let state, props, wrapper;

  beforeEach(() => {
    state = { posts: {} };
    props = { match: { params: { tag: "tag" } } };
    wrapper = setup(state, props);
  });

  test("renders the main div", () => {
    const component = findByTestAttr(wrapper, "component-question-list");
    expect(component.length).toBe(1);
  });
});
