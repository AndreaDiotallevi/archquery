import React from "react";
import { shallow } from "enzyme";
import PostVote from "./PostVote";
import { storeFactory, findByTestAttr } from "../../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<PostVote store={store} {...initialProps} />).dive();
  return wrapper;
};

describe("PostVote", () => {
  let state, props, wrapper;

  beforeEach(() => {
    state = {};
    props = { post: {} };
    wrapper = setup(state, props);
  });

  test("renders without errors", () => {
    expect(wrapper.length).toEqual(1);
  });

  test("renders the main div", () => {
    const component = findByTestAttr(wrapper, "component-post-vote");
    expect(component.length).toBe(1);
  });
});
