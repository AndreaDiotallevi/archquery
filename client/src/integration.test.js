import moxios from "moxios";

import { storeFactory } from "../test/testUtils";
import {
  fetchPosts,
  clearPosts,
  fetchPost,
  createPost,
  editPost,
  deletePost,
  fetchTags,
  fetchTag,
  createTag,
  createTags,
  fetchUser,
  fetchPostsAndUsers,
  createPostAndTags,
  createPostsTags,
  editPostAndTags,
  deletePostsTags,
  createPostAndAddAnswerCount,
  incrementAnswerCount,
  deletePostAndDecrementAnswerCount,
  decrementAnswerCount,
  signUp,
  logIn,
  logOut,
  isAlreadyLoggedIn,
} from "./actions";

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

describe("fetchPost action creator", () => {
  test("adds the post data to state", async () => {
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { id: 1, body: "body" },
      });
    });

    await store.dispatch(fetchPost(""));
    const newState = store.getState();
    expect(newState.posts).toEqual({ 1: { id: 1, body: "body" } });
    expect(newState.posts[1]["id"]).toEqual(1);
    expect(newState.posts[1]["body"]).toEqual("body");
  });
});
