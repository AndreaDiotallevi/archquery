import React from "react";
import { shallow } from "enzyme";
import SignUp from "./SignUp";
import { storeFactory, findByTestAttr } from "../../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<SignUp store={store} {...initialProps} />)
    .dive()
    .dive();
  return wrapper;
};

describe("SignUp", () => {
  let state, props, wrapper;

  beforeEach(() => {
    state = {};
    wrapper = setup(state, props);
  });

  test("renders the main div", () => {
    const div = findByTestAttr(wrapper, "component-signup");
    expect(div.length).toEqual(1);
  });
});
