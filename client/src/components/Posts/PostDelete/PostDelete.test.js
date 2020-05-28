import React from "react";
import { shallow } from "enzyme";
import PostDelete from "./PostDelete";
import { storeFactory, findByTestAttr } from "../../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(
    <PostDelete store={store} {...initialProps} />
  ).dive();
  return wrapper;
};

describe("PostDelete", () => {
  let state, props, wrapper;

  beforeEach(() => {
    state = { auth: { userId: 1 } };
    wrapper = setup(state, props);
  });

  test("renders the main div", () => {
    const div = findByTestAttr(wrapper, "component-post-delete");
    expect(div.length).toEqual(1);
  });
});
