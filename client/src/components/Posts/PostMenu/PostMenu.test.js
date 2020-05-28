import React from "react";
import { shallow } from "enzyme";
import PostMenu from "./PostMenu";
import { storeFactory, findByTestAttr } from "../../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<PostMenu store={store} {...initialProps} />)
    .dive()
    .dive();
  return wrapper;
};

describe("PostMenu", () => {
  let state, props, wrapper;

  describe("when user is authenticated", () => {
    beforeEach(() => {
      state = { auth: { userId: 1 } };
      props = { post: { owner_user_id: 1 } };
      wrapper = setup(state, props);
    });

    test("renders the main div with two children", () => {
      const component = findByTestAttr(wrapper, "component-post-menu");
      expect(component.length).toBe(1);
      expect(component.children().length).toEqual(2);
    });
  });

  describe("when user is not authenticated", () => {
    beforeEach(() => {
      state = { auth: { userId: null } };
      props = { post: { owner_user_id: 1 } };
      wrapper = setup(state, props);
    });

    test("renders the main div with no children", () => {
      const component = findByTestAttr(wrapper, "component-post-menu");
      expect(component.length).toBe(1);
      expect(component.children().length).toEqual(0);
    });
  });
});
