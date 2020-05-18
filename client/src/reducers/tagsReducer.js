import { TAG_FETCHED } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case TAG_FETCHED:
      return [...state, action.payload];
    default:
      return state;
  }
};
