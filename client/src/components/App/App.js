import React from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";
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
        <Link to="/users/login">Log In</Link>
        <Switch>
          <Route path="/" exact component={QuestionList} />
          <Route path="/users/signup" exact component={SignUp} />
          <Route path="/users/login" exact component={LogIn} />
          <Route path="/questions/ask" exact component={QuestionCreate} />
          <Route path="/questions/:id/:title" component={QuestionShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
