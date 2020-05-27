import React from "react";
import { shallow } from "enzyme";
import UsernameLink from "./UsernameLink";
import { storeFactory, findByTestAttr } from "../../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<UsernameLink store={store} {...initialProps} />)
    .dive()
    .dive();
  return wrapper;
};

describe("UsernameLink", () => {
  let state, props, wrapper;

  describe("when there is a user", () => {
    beforeEach(() => {
      state = { users: { 1: { id: 1, username: "username" } } };
      props = { userId: 1 };
      wrapper = setup(state, props);
    });

    test("renders without errors", () => {
      expect(wrapper.length).toEqual(1);
    });

    test("renders the main div with two children", () => {
      const component = findByTestAttr(wrapper, "component-username-link");
      expect(component.length).toBe(1);
    });
  });

  describe("when there is not a user", () => {
    beforeEach(() => {
      state = { users: { 1: { id: 1, username: "username" } } };
      props = { userId: 2 };
      wrapper = setup(state, props);
    });

    test("renders without errors", () => {
      expect(wrapper.length).toEqual(1);
    });

    test("does not render the main div", () => {
      const component = findByTestAttr(wrapper, "component-username-link");
      expect(component.length).toBe(0);
    });
  });
});
