import { QUESTIONS_FETCHED, QUESTION_FETCHED } from "./types";
import axios from "axios";

export const fetchQuestions = () => async (dispatch) => {
  const response = await axios.get("/api/posts");

  dispatch({ type: QUESTIONS_FETCHED, payload: response.data });
};

export const fetchQuestion = (id) => async (dispatch) => {
  const response = await axios.get(`/api/posts/${id}`);

  dispatch({ type: QUESTION_FETCHED, payload: response.data });
};
