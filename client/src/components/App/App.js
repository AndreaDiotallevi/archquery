import React from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import QuestionList from "../Questions/QuestionList/QuestionList";
import QuestionShow from "../Questions/QuestionShow/QuestionShow";
import QuestionCreate from "../Questions/QuestionCreate/QuestionCreate";
import history from "../../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Link to="/questions/ask">Ask Question</Link>
        <Link to="/users/signup">Sign Up</Link>
        <Switch>
          <Route path="/" exact component={QuestionList} />
          <Route path="/users/signup" exact component={SignUp} />
          <Route path="/questions/ask" exact component={QuestionCreate} />
          <Route path="/questions/:id/:title" component={QuestionShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
