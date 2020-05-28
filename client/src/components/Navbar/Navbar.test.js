import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";
import { storeFactory, findByTestAttr } from "../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Navbar store={store} {...initialProps} />)
    .dive()
    .dive();
  return wrapper;
};

describe("Navbar", () => {
  let state, props, wrapper;

  beforeEach(() => {
    state = {};
    wrapper = setup(state, props);
  });

  test("renders the main div", () => {
    const div = findByTestAttr(wrapper, "component-navbar");
    expect(div.length).toEqual(1);
  });
});
