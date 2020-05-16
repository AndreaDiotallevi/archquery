import _ from "lodash";
import {
  POSTS_FETCHED,
  POST_FETCHED,
  POST_CREATED,
  POST_DELETED,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case POSTS_FETCHED:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case POST_FETCHED:
      return { ...state, [action.payload.id]: action.payload };
    case POST_CREATED:
      return { ...state, [action.payload.id]: action.payload };
    case POST_DELETED:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
