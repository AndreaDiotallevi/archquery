import _ from "lodash";
import { QUESTIONS_FETCHED } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case QUESTIONS_FETCHED:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    default:
      return state;
  }
};
