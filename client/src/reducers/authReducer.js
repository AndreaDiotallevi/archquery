import { LOG_IN, LOG_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      return { isSignedIn: true, userId: action.payload };
    case LOG_OUT:
      return { isSignedIn: false, userId: null };
    default:
      return state;
  }
};
