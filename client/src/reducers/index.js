import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import questionsReducers from "./questionsReducers";
import usersReducers from "./usersReducers";

export default combineReducers({
  questions: questionsReducers,
  users: usersReducers,
  form: formReducer,
});
