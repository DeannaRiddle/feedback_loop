import React, { Component } from "react";
import { connect } from "react-redux";

class TypePage extends Component {
  onTypeClick = (type) => (event) => {
    this.props.dispatch({ type: "SET_FEELING_RATING", payload: type });
    this.props.history.push("/feeling");
  };

  render() {
    return (
      <div>
        <h1>How are you feeling?</h1>
        <button onClick={this.onClick("Next")}>Next</button>
      </div>
    );
  }
}
