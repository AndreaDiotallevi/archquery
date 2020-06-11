import { VOTE_FETCHED, VOTE_CREATED, VOTE_DELETED } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case VOTE_FETCHED:
      return [...state, action.payload];
    case VOTE_CREATED:
      return [...state, action.payload];
    case VOTE_DELETED:
      return state.filter((vote) => vote.id !== action.payload);
    default:
      return state;
  }
};
