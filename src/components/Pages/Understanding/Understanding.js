import React, { Component } from "react";
import { connect } from "react-redux";

class UnderstandingPage extends Component {
  onTypeClick = (rating) => (event) => {
    this.props.dispatch({
      rating: "SET_UNDERSTANDING_RATING",
      payload: rating,
    });
    this.props.history.push("/understanding");
  };

  render() {
    return (
      <div>
        <h1>How well are you understanding the content?</h1>
        <input className="rating" type="number" min="1" max="5"></input>
        <button onClick={this.onClick("Next")}>Next</button>
      </div>
    );
  }
}

export default connect()(UnderstandingPage);
