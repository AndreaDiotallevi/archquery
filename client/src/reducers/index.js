import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import questionsReducer from "./questionsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  questions: questionsReducer,
  users: usersReducer,
  form: formReducer,
  auth: authReducer,
  error: errorReducer,
});
