import { QUESTIONS_FETCHED, QUESTION_FETCHED, QUESTION_CREATED } from "./types";
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
