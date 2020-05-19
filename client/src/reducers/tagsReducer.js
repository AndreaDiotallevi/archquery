import _ from "lodash";
import {
  TAGS_FETCHED,
  TAG_FETCHED,
  TAG_CREATED,
  TAGS_CREATED,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case TAGS_FETCHED:
      return { ...state, ..._.mapKeys(action.payload, "name") };
    case TAG_FETCHED:
      return { ...state, [action.payload.name]: action.payload };
    case TAG_CREATED:
      return { ...state, [action.payload.name]: action.payload };
    case TAGS_CREATED:
      return { ...state, ..._.mapKeys(action.payload, "name") };
    default:
      return state;
  }
};
