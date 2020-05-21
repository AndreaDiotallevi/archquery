import _ from "lodash";
import {
  POSTS_FETCHED,
  POSTS_CLEARED,
  POST_FETCHED,
  POST_CREATED,
  POST_EDITED,
  POST_DELETED,
  USER_FETCHED,
  TAGS_FETCHED,
  TAG_FETCHED,
  TAG_CREATED,
  TAGS_CREATED,
  SIGN_UP,
  LOG_IN,
  LOG_OUT,
  GET_ERRORS,
  CLEAR_ERRORS,
} from "./types";
import axios from "axios";
import history from "../history";

export const fetchPosts = (postTypeId, parentId, tagName) => async (
  dispatch
) => {
  try {
    const response = await axios.get(
      `/api/posts/?postTypeId=${postTypeId}${
        parentId ? `&parentId=${parentId}` : ""
      }${tagName ? `&tagName=${tagName}` : ""}`
    );

    dispatch({ type: POSTS_FETCHED, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const clearPosts = () => {
  return {
    type: POSTS_CLEARED,
  };
};

export const fetchPost = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/posts/${id}`);

    dispatch({ type: POST_FETCHED, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (formValues) => async (dispatch) => {
  try {
    const response = await axios.post("/api/posts", formValues);

    dispatch({ type: POST_CREATED, payload: response.data });

    if (formValues.postTypeId === 1) {
      history.push("/");
    }
  } catch (err) {
    console.log(err);
  }
};

export const incrementAnswerCount = (parentId) => async (
  dispatch,
  getState
) => {
  const post = getState().posts[parentId];
  dispatch(
    editPost(parentId, {
      ...post,
      answerCount: post.answer_count + 1,
    })
  );
};

export const createPostAndAddAnswerCount = (formValues) => async (dispatch) => {
  try {
    await dispatch(createPost(formValues));
    dispatch(incrementAnswerCount(formValues.parentId));
  } catch (err) {
    console.log(err);
  }
};

export const createPostAndTags = (formValues) => async (dispatch, getState) => {
  try {
    await dispatch(createPost(formValues));
    await dispatch(createTags(formValues.tags));
    const posts = getState().posts;
    const postId = Object.keys(posts)[Object.keys(posts).length - 1];
    await dispatch(createPostsTags(postId, formValues.tags));
  } catch (err) {
    console.log(err);
  }
};

export const editPostAndTags = (postId, formValues) => async (dispatch) => {
  try {
    await dispatch(editPost(postId, formValues));
    await dispatch(createTags(formValues.tags));
    await dispatch(deletePostsTags(postId));
    await dispatch(createPostsTags(postId, formValues.tags));
    history.goBack();
  } catch (err) {
    console.log(err);
  }
};

export const createPostsTags = (postId, tagNames) => async (
  dispatch,
  getState
) => {
  try {
    await axios.post("/api/postsTags", {
      postId,
      tagIds: tagNames.map((tagName) => getState().tags[tagName].id),
    });
  } catch (err) {
    console.log(err);
  }
};

export const deletePostsTags = (postId) => async (dispatch) => {
  try {
    await axios.delete(`/api/postsTags/${postId}`);
  } catch (err) {
    console.log(err);
  }
};

export const fetchUser = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/users/${id}`);

    dispatch({ type: USER_FETCHED, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const createTag = (name) => async (dispatch) => {
  try {
    const response = await axios.post("/api/tags", { name });

    dispatch({ type: TAG_CREATED, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const createTags = (tagNames) => async (dispatch, getState) => {
  try {
    const response = await axios.post("/api/tagCollection", {
      tagNames: tagNames.filter((tagName) => !(tagName in getState().tags)),
    });

    dispatch({ type: TAGS_CREATED, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const fetchTag = (tagName) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/tags/${tagName}`);

    dispatch({ type: TAG_FETCHED, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const fetchTags = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/tags");

    dispatch({ type: TAGS_FETCHED, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const fetchPostsAndUsers = (postTypeId, parentId, tagName) => async (
  dispatch,
  getState
) => {
  try {
    await dispatch(fetchPosts(postTypeId, parentId, tagName));
    _.chain(getState().posts)
      .map("owner_user_id")
      .uniq()
      .forEach((id) => dispatch(fetchUser(id)))
      .value();
  } catch (err) {
    console.log(err);
  }
};

export const editPost = (postId, formValues) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/posts/${postId}`, formValues);

    dispatch({ type: POST_EDITED, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = (postId, postTypeId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${postId}`);

    dispatch({ type: POST_DELETED, payload: postId });
    if (postTypeId === 1) {
      history.push("/");
    }
  } catch (err) {
    console.log(err);
  }
};

export const signUp = (formValues) => async (dispatch) => {
  try {
    await axios.post("/api/auth/signup", formValues);

    dispatch({ type: SIGN_UP });
    history.push("/users/login");
  } catch (err) {
    dispatch({ type: GET_ERRORS, payload: err.response.data });
  }
};

export const logIn = (formValues) => async (dispatch) => {
  try {
    const response = await axios.post("/api/auth/login", formValues);

    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: LOG_IN, payload: response.data });
    history.push("/");
  } catch (err) {
    dispatch({ type: GET_ERRORS, payload: err.response.data });
  }
};

export const logOut = (formValues) => async (dispatch) => {
  try {
    await axios.post("/api/auth/logout", formValues);

    dispatch({ type: LOG_OUT });
    history.push("/");
  } catch (err) {
    console.log(err);
  }
};

export const isAlreadyLoggedIn = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/auth/isAlreadyLoggedIn");

    if (response.data) {
      dispatch({ type: LOG_IN, payload: response.data });
    }
  } catch (err) {
    console.log(err);
  }
};
