import { VOTES_FETCHED, VOTE_CREATED } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case VOTES_FETCHED:
      return action.payload;
    case VOTE_CREATED:
      return [...state, action.payload];
    default:
      return state;
  }
};
