import React, { Component } from "react";
import { connect } from "react-redux";

class FeelingPage extends Component {
  state = {
    feeling: "",
    understanding: "",
    supported: "",
    comments: "",
  };
  onTypeClick = (type) => (event) => {
    this.props.dispatch({ type: "SET_FEELING_RATING", payload: type });
    this.props.history.push("/feeling");
  };

  render() {
    return (
      <div>
        <h1>How are you feeling?</h1>
        <input className="rating" type="number" min="1" max="5"></input>
        <button onClick={this.onClick("Next")}>Next</button>
      </div>
    );
  }
}
export default connect()(FeelingPage);
