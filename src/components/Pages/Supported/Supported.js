import React, { Component } from "react";
import { connect } from "react-redux";

class SupportedPage extends Component {
  onTypeClick = (type) => (event) => {
    this.props.dispatch({ type: "SET_SUPPORTED_RATING", payload: type });
    this.props.history.push("/supported");
  };

  render() {
    return (
      <div>
        <h1>How well are you being supported?</h1>
        <input className="rating" type="number" min="1" max="5"></input>
        <button onClick={this.onClick("Next")}>Next</button>
      </div>
    );
  }
}
export default connect()(SupportedPage);
