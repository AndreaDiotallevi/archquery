import React from "react";
import { shallow } from "enzyme";
import SignUpForm from "./SignUpForm";
import { storeFactory, findByTestAttr } from "../../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<SignUpForm store={store} {...initialProps} />)
    .dive()
    .dive();
  return wrapper;
};

describe("SignUpForm", () => {
  let state, props, wrapper;

  beforeEach(() => {
    state = {};
    wrapper = setup(state, props);
  });

  test("renders without errors", () => {
    expect(wrapper.length).toEqual(1);
  });
});
