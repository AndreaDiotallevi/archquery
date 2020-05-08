import _ from "lodash";
import {
  QUESTIONS_FETCHED,
  QUESTION_FETCHED,
  QUESTION_CREATED,
  USER_FETCHED,
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
