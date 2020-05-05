import React from "react";
import { Router, Route, Link } from "react-router-dom";
import QuestionList from "../QuestionList/QuestionList";
import QuestionCreate from "../QuestionCreate/QuestionCreate";
import history from "../../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Link to="/questions/ask">Ask Question</Link>
        <Route path="/" exact component={QuestionList} />
        <Route path="/questions/ask" exact component={QuestionCreate} />
      </Router>
    </div>
  );
};

export default App;
