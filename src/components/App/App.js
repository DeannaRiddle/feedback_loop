import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FeelingPage from "../Pages/Feeling/Feeling";
import UnderstandingPage from "../Pages/Understanding/Understanding";
import SupportedPage from "../Pages/Supported/Supported";
import CommentsPage from "../Pages/Comments/Comments";
import ReviewPage from "../Pages/Review/Review";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
        </div>
        <br />
        <br />
        <div>
          <Route exact path="/" component={TypePage} />
          <Route exact path="/feeling" component={FeelingPage} />
          <Route exact path="/understanding" component={UnderstandingPage} />
          <Route exact path="/supported" component={SupportedPage} />
          <Route exact path="/comments" component={CommentsPage} />
          <Route exact path="/review" component={ReviewPage} />
        </Router>

        <br />
      </div>
    );
  }
}

export default App;
