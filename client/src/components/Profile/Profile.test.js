import React from "react";
import { shallow } from "enzyme";
import Profile from "./Profile";
import { storeFactory } from "../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Profile store={store} {...initialProps} />).dive();
  return wrapper;
};

describe("Profile", () => {
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
