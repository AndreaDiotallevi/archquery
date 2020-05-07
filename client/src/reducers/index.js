import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import questions from "./questionsReducers";

export default combineReducers({
  questions,
  form: formReducer,
});
