import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class ReviewPage extends Component {
  submitFeedback = (event) => {
    const review = {
      feedback: this.props.store.feedbackReducer.feedback,
      understanding: this.props.store.understandingReducer.understanding,
      supported: this.props.store.supportedReducer.supported,
      comments: this.props.store.commentsReducer.comments,
    };

    axios
      .post("/review", review)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  render() {
    const reviewArray = this.props.store.summaryReducer.map((review, index) => {
      return (
        <div>
          <h4>
            {" "}
            How are you feeling?:
            {this.props.feelingReducer.feeling}
          </h4>
          <h4>
            {" "}
            How well are you understanding the content?:
            {this.props.understandingReducer.understanding}
          </h4>
          <h4>
            {" "}
            Do you feel supported?:
            {this.props.supportedReducer.supported}
          </h4>
          <h4>
            {" "}
            Comments:
            {this.props.commentsReducer.comments}
          </h4>
        </div>
      );
    });
    return <div> {reviewArray} </div>;
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(ReviewPage);
