import { POSTS_FETCHED } from "./types";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get("/api/posts");

  dispatch({ type: POSTS_FETCHED, payload: response.data });
};
