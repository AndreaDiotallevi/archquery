import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import PostRelativeTime from "./PostRelativeTime";

const MockDate = require("mockdate");
MockDate.set(0);

const setup = (props = {}) => {
  return shallow(<PostRelativeTime {...props} />);
};

describe("PostRelativeTime", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ post: { creationDate: "", postTypeId: 1 } });
  });

  test("renders the main div", () => {
    const component = findByTestAttr(wrapper, "component-relative-time");
    expect(component.length).toBe(1);
  });
});

MockDate.reset();
