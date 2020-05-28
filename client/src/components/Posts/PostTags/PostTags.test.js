import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import PostTags from "./PostTags";

const setup = (props = {}) => {
  return shallow(<PostTags {...props} />);
};

describe("PostTags", () => {
  let wrapper;

  describe("when there are tags", () => {
    beforeEach(() => {
      wrapper = setup({ post: { tags: ["tag"] } });
    });

    test("renders the main div", () => {
      const component = findByTestAttr(wrapper, "component-post-tags");
      expect(component.length).toBe(1);
    });
  });

  describe("when there are no tags", () => {
    beforeEach(() => {
      wrapper = setup({ post: { tags: null } });
    });

    test("does not render the main div", () => {
      const component = findByTestAttr(wrapper, "component-post-tags");
      expect(component.length).toBe(0);
    });
  });
});
