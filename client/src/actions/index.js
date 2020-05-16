import _ from "lodash";
import {
  POSTS_FETCHED,
  POST_FETCHED,
  POST_CREATED,
  POST_DELETED,
  USER_FETCHED,
  SIGN_UP,
  LOG_IN,
  LOG_OUT,
  GET_ERRORS,
  CLEAR_ERRORS,
} from "./types";
import axios from "axios";
import history from "../history";

export const fetchPosts = (postTypeId, parentId) => async (dispatch) => {
  const response = await axios.get(
    `/api/posts/?postTypeId=${postTypeId}${
      parentId ? `&parentId=${parentId}` : ""
    }`
  );

  console.log(response.data);

  dispatch({ type: POSTS_FETCHED, payload: response.data });
};

export const fetchPost = (id) => async (dispatch) => {
  const response = await axios.get(`/api/posts/${id}`);

  dispatch({ type: POST_FETCHED, payload: response.data });
};

export const createPost = (formValues) => async (dispatch) => {
  const response = await axios.post("/api/posts", formValues);

  dispatch({ type: POST_CREATED, payload: response.data });
  if (formValues.postTypeId === 1) {
    history.push("/");
  }
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await axios.get(`/api/users/${id}`);

  dispatch({ type: USER_FETCHED, payload: response.data });
};

export const fetchQuestionsAndUsers = (postTypeId, parentId) => async (
  dispatch,
  getState
) => {
  await dispatch(fetchPosts(postTypeId, parentId));
  _.chain(getState().posts)
    .map("owner_user_id")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
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
  await axios.post("/api/auth/logout", formValues);

  dispatch({ type: LOG_OUT });
  history.push("/");
};

export const isAlreadyLoggedIn = () => async (dispatch) => {
  const response = await axios.get("/api/auth/isAlreadyLoggedIn");

  if (response.data) {
    dispatch({ type: LOG_IN, payload: response.data });
  }
};

export const fetchAnswersAndUsers = (postTypeId, parentId) => async (
  dispatch,
  getState
) => {
  await dispatch(fetchPosts(postTypeId, parentId));
  _.chain(getState().posts)
    .map("owner_user_id")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const deletePost = (postId) => async (dispatch) => {
  await axios.delete(`/api/posts/${postId}`);

  dispatch({ type: POST_DELETED, payload: postId });
  history.push("/");
};
