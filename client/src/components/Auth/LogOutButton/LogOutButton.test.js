import React from "react";
import { shallow } from "enzyme";
import LogOutButton from "./LogOutButton";
import { storeFactory, findByTestAttr } from "../../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(
    <LogOutButton store={store} {...initialProps} />
  ).dive();
  return wrapper;
};

describe("LogOutButton", () => {
  let state, props, wrapper;

  beforeEach(() => {
    state = {};
    wrapper = setup(state, props);
  });

  test("renders without errors", () => {
    expect(wrapper.length).toEqual(1);
  });
});
