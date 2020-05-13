import _ from "lodash";
import {
  QUESTIONS_FETCHED,
  QUESTION_FETCHED,
  QUESTION_CREATED,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case QUESTIONS_FETCHED:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case QUESTION_FETCHED:
      return { ...state, [action.payload.id]: action.payload };
    case QUESTION_CREATED:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};