import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../Header/Header";
import SignUp from "../Auth/SignUp/SignUp";
import LogIn from "../Auth/LogIn/LogIn";
import Profile from "../Profile/Profile";
import QuestionList from "../Posts/QuestionList/QuestionList";
import PostEdit from "../Posts/PostEdit/PostEdit";
import QuestionShow from "../Posts/QuestionShow/QuestionShow";
import QuestionCreate from "../Posts/QuestionCreate/QuestionCreate";
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
          <Route path="/" exact component={QuestionList} />
          <Route path="/users/signup" exact component={SignUp} />
          <Route path="/users/login" exact component={LogIn} />
          <Route path="/users/:id/:username" exact component={Profile} />
          <Route path="/questions/ask" exact component={QuestionCreate} />
          <Route path="/questions/:id/:title" component={QuestionShow} />
          <Route path="/posts/:id/edit" exact component={PostEdit} />
        </Router>
      </div>
    );
  }
}

export default connect(null, { isAlreadyLoggedIn })(App);
