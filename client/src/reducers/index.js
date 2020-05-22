import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import tagsReducer from "./tagsReducer";
import votesReducer from "./votesReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  tags: tagsReducer,
  votes: votesReducer,
  form: formReducer,
  auth: authReducer,
  error: errorReducer,
});
