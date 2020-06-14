import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AppMeatadata from "../Helmets/AppMetadata";
import Header from "../Header/Header";
import SignUp from "../Auth/SignUp/SignUp";
import LogIn from "../Auth/LogIn/LogIn";
import Profile from "../Profile/Profile";
import QuestionList from "../Posts/QuestionList/QuestionList";
import QuestionShow from "../Posts/QuestionShow/QuestionShow";
import QuestionCreate from "../Posts/QuestionCreate/QuestionCreate";
import PostEdit from "../Posts/PostEdit/PostEdit";
import history from "../../history";
import { isAlreadyLoggedIn } from "../../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.isAlreadyLoggedIn();
  }

  render() {
    return (
      <div className="app">
        <AppMeatadata />
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={QuestionList} />
            <Route path="/questions/tagged/:tag" component={QuestionList} />
            <Route path="/questions/ask" exact component={QuestionCreate} />
            <Route path="/questions/:id" component={QuestionShow} />
            <Route path="/posts/:id/edit" exact component={PostEdit} />
            <Route path="/users/signup" exact component={SignUp} />
            <Route path="/users/login" exact component={LogIn} />
            <Route path="/users/:id/:username" exact component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null, { isAlreadyLoggedIn })(App);
