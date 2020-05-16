import React from "react";
import { shallow } from "enzyme";
import SignUp from "./SignUp";
import { storeFactory } from "../../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<SignUp store={store} {...initialProps} />).dive();
  return wrapper;
};

describe("SignUp", () => {
  let state, props, wrapper;

  beforeEach(() => {
    state = {};
    wrapper = setup(state, props);
  });

  test("renders without errors", () => {
    expect(wrapper.length).toEqual(1);
  });
});
