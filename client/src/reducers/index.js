import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import questionsReducers from "./questionsReducers";
import usersReducers from "./usersReducers";
import authReducers from "./authReducers";

export default combineReducers({
  questions: questionsReducers,
  users: usersReducers,
  form: formReducer,
  auth: authReducers,
});
