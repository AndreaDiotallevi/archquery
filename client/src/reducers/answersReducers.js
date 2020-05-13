import _ from "lodash";
import { ANSWER_CREATED, ANSWERS_FETCHED } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ANSWER_CREATED:
      return { ...state, [action.payload.id]: action.payload };
    case ANSWERS_FETCHED:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
