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

describe("fetchPosts action creator", () => {
  test("adds the posts data to state", async () => {
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          { id: 1, body: "body1" },
          { id: 2, body: "body2" },
        ],
      });
    });

    await store.dispatch(fetchPosts());
    const newState = store.getState();
    expect(newState.posts).toEqual({
      1: { id: 1, body: "body1" },
      2: { id: 2, body: "body2" },
    });
    expect(newState.posts[1]["id"]).toEqual(1);
    expect(newState.posts[1]["body"]).toEqual("body1");
    expect(newState.posts[2]["id"]).toEqual(2);
    expect(newState.posts[2]["body"]).toEqual("body2");
  });
});

describe("clearPosts action creator", () => {
  test("deletes all post data from state", () => {
    const store = storeFactory({ posts: { 1: { id: 1, body: "body" } } });
    store.dispatch(clearPosts());
    const newState = store.getState();
    expect(newState.posts).toEqual({});
  });
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

    await store.dispatch(fetchPost(1));
    const newState = store.getState();
    expect(newState.posts).toEqual({ 1: { id: 1, body: "body" } });
    expect(newState.posts[1]["id"]).toEqual(1);
    expect(newState.posts[1]["body"]).toEqual("body");
  });
});

describe("createPost action creator", () => {
  test("create the post and add the post data to state", async () => {
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { id: 1, body: "body" },
      });
    });

    await store.dispatch(createPost({}));
    const newState = store.getState();
    expect(newState.posts).toEqual({
      1: { id: 1, body: "body" },
    });
    expect(newState.posts[1]["id"]).toEqual(1);
    expect(newState.posts[1]["body"]).toEqual("body");
  });
});

describe("eidtPost action creator", () => {
  test("edit the post and updates the post data to state", async () => {
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { id: 1, body: "body edited" },
      });
    });

    await store.dispatch(createPost({}));
    const newState = store.getState();
    expect(newState.posts).toEqual({
      1: { id: 1, body: "body edited" },
    });
    expect(newState.posts[1]["id"]).toEqual(1);
    expect(newState.posts[1]["body"]).toEqual("body edited");
  });
});
