import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  form: formReducer,
  auth: authReducer,
  error: errorReducer,
});
