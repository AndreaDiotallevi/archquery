import _ from "lodash";
import { POSTS_FETCHED } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case POSTS_FETCHED:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    default:
      return state;
  }
};
