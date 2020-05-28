import React from "react";
import { shallow } from "enzyme";
import LogIn from "./LogIn";
import { storeFactory, findByTestAttr } from "../../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<LogIn store={store} {...initialProps} />)
    .dive()
    .dive();
  return wrapper;
};

describe("LogIn", () => {
  let state, props, wrapper;

  beforeEach(() => {
    state = {};
    wrapper = setup(state, props);
  });

  test("renders the main div", () => {
    const div = findByTestAttr(wrapper, "component-login");
    expect(div.length).toEqual(1);
  });
});
