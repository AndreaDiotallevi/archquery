import { USER_FETCHED } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case USER_FETCHED:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
