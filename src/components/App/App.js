import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import FeelingPage from "../Pages/Feeling/Feeling";
import UnderstandingPage from "../Pages/Understanding/Understanding";
import SupportedPage from "../Pages/Supported/Supported";
import CommentsPage from "../Pages/Comments/Comments";
import ReviewPage from "../Pages/Review/Review";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />
          <br />
          <Route exact path="/" component={TypePage} />
          <Route exact path="/feeling" component={FeelingPage} />
          <Route exact path="/understanding" component={UnderstandingPage} />
          <Route exact path="/supported" component={SupportedPage} />
          <Route exact path="/comments" component={CommentsPage} />
          <Route exact path="/review" component={ReviewPage} />
        </Router>
      </div>
    );
  }
}

export default App;
