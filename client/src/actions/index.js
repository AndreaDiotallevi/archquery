import _ from "lodash";
import {
  QUESTIONS_FETCHED,
  QUESTION_FETCHED,
  QUESTION_CREATED,
  USER_FETCHED,
  SIGN_UP,
  LOG_IN,
  LOG_OUT,
} from "./types";
import axios from "axios";
import history from "../history";

export const fetchQuestions = () => async (dispatch) => {
  const response = await axios.get("/api/posts");

  dispatch({ type: QUESTIONS_FETCHED, payload: response.data });
};

export const fetchQuestion = (id) => async (dispatch) => {
  const response = await axios.get(`/api/posts/${id}`);

  dispatch({ type: QUESTION_FETCHED, payload: response.data });
};

export const createQuestion = (formValues) => async (dispatch) => {
  const response = await axios.post("/api/posts", formValues);

  dispatch({ type: QUESTION_CREATED, payload: response.data });
  history.push("/");
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await axios.get(`/api/users/${id}`);

  dispatch({ type: USER_FETCHED, payload: response.data });
};

export const fetchQuestionsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchQuestions());
  _.chain(getState().questions)
    .map("owner_user_id")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const signUp = (formValues) => async (dispatch) => {
  await axios.post("/api/auth/signup", formValues);

  dispatch({ type: SIGN_UP });
  history.push("/users/login");
};

export const logIn = (formValues) => async (dispatch) => {
  const response = await axios.post("/api/auth/login", formValues);

  dispatch({ type: LOG_IN, payload: response.data });
  history.push("/");
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
