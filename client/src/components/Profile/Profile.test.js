import React from "react";
import { shallow } from "enzyme";
import Profile from "./Profile";
import { storeFactory, findByTestAttr } from "../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Profile store={store} {...initialProps} />)
    .dive()
    .dive();
  return wrapper;
};

describe("Profile", () => {
  let state, props, wrapper;

  describe("when there is a user", () => {
    beforeEach(() => {
      state = { users: { 1: { id: 1 } } };
      props = { match: { params: { id: 1 } } };
      wrapper = setup(state, props);
    });

    test("renders the main div", () => {
      const component = findByTestAttr(wrapper, "component-profile");
      expect(component.length).toBe(1);
    });
  });

  describe("when there is not a user", () => {
    beforeEach(() => {
      state = { users: { 1: { id: 1 } } };
      props = { match: { params: { id: 2 } } };
      wrapper = setup(state, props);
    });

    test("does not render the main div", () => {
      const component = findByTestAttr(wrapper, "component-profile");
      expect(component.length).toBe(0);
    });
  });
});
