import _ from "lodash";
import {
  QUESTIONS_FETCHED,
  POST_FETCHED,
  POST_CREATED,
  ANSWERS_FETCHED,
  POST_DELETED,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case QUESTIONS_FETCHED:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case POST_FETCHED:
      return { ...state, [action.payload.id]: action.payload };
    case POST_CREATED:
      return { ...state, [action.payload.id]: action.payload };
    case ANSWERS_FETCHED:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case POST_DELETED:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
