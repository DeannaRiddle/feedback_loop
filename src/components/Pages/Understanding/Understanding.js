import React, { Component } from "react";
import { connect } from "react-redux";

class TypePage extends Component {
  onTypeClick = (type) => (event) => {
    this.props.dispatch({ type: "SET_UNDERSTANDING_RATING", payload: type });
    this.props.history.push("/understanding");
  };

  render() {
    return (
      <div>
        <h1>How well are you understanding the content?</h1>
        <button onClick={this.onClick("Next")}>Next</button>
      </div>
    );
  }
}

export default connect()(UnderstandingPage);
