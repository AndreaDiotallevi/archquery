import React from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import QuestionList from "../QuestionList/QuestionList";
import QuestionShow from "../QuestionShow/QuestionShow";
import QuestionCreate from "../QuestionCreate/QuestionCreate";
import history from "../../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Link to="/questions/ask">Ask Question</Link>
        <Switch>
          <Route path="/" exact component={QuestionList} />
          <Route path="/questions/ask" exact component={QuestionCreate} />
          <Route path="/questions/:id/:title" component={QuestionShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
