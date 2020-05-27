import React from "react";
import { shallow } from "enzyme";
import PostForm from "./PostForm";
import { storeFactory, findByTestAttr } from "../../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<PostForm store={store} {...initialProps} />)
    .dive()
    .dive();
  return wrapper;
};

describe("PostForm", () => {
  let state, props, wrapper;

  beforeEach(() => {
    state = {};
    wrapper = setup(state, props);
  });

  test("renders without errors", () => {
    expect(wrapper.length).toEqual(1);
  });
});
