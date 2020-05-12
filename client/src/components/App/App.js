import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../Header/Header";
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";
import QuestionList from "../Questions/QuestionList/QuestionList";
import QuestionShow from "../Questions/QuestionShow/QuestionShow";
import QuestionCreate from "../Questions/QuestionCreate/QuestionCreate";
import history from "../../history";
import { isAlreadyLoggedIn } from "../../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.isAlreadyLoggedIn();
  }

  render() {
    return (
      <div className="app">
        <Router history={history}>
          <Header />
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
  }
}

export default connect(null, { isAlreadyLoggedIn })(App);
