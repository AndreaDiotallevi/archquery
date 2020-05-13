import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import questionsReducer from "./questionsReducer";
import answersReducers from "./answersReducers";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  questions: questionsReducer,
  answers: answersReducers,
  users: usersReducer,
  form: formReducer,
  auth: authReducer,
  error: errorReducer,
});
