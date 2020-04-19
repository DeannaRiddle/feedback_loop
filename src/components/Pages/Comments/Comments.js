import React, { Component } from "react";
import { connect } from "react-redux";

class CommentsPage extends Component {
  onTypeClick = (type) => (event) => {
    this.props.dispatch({ type: "SET_COMMENTS_INFO", payload: type });
    this.props.history.push("/comments");
  };

  render() {
    return (
      <div>
        <h1>Any comments you want to leave?</h1>
        <button onClick={this.onClick("SET_COMMENTS_INFO")}>Next</button>
      </div>
    );
  }
}
export default connect()(CommentsPage);
