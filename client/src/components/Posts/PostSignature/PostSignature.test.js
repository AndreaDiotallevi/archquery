import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import PostSignature from "./PostSignature";

const setup = (props = {}) => {
  return shallow(<PostSignature {...props} />);
};

describe("PostSignature", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ post: {} });
  });

  test("renders the main div", () => {
    const component = findByTestAttr(wrapper, "component-post-signature");
    expect(component.length).toBe(1);
  });
});
