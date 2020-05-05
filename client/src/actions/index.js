import { QUESTIONS_FETCHED } from "./types";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get("/api/posts");

  dispatch({ type: QUESTIONS_FETCHED, payload: response.data });
};
