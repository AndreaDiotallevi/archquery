import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import PostSummary from "./PostSummary";

describe("PostSummary", () => {
  test("renders the main div", () => {
    const wrapper = shallow(<PostSummary />);
    const component = findByTestAttr(wrapper, "component-post-summary");
    expect(component.length).toBe(1);
  });
});
