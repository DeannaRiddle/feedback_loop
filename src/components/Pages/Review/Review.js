import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { render } from "react-dom"; 

class ReviewPage extends Component {
    submitFeedback = (event) => {
        const feedback = {
       feedback: this.props.store.feedbackReducer.feedback,
       understanding: this.props.store.understandingReducer.understanding,    
       supported: this.props.store.supportedReducer.supported,    
       comments: this.props.store.commentsReducer.comments,         
    };
      

axios
 .post("/feedback", feedback )
 .then((response) => {
     console.log(response.data);
     this.props.history.push("/");
 })
 .catch((err)  => {
     console.warn(err);
 });

};

render() {
   let feedbackElement  = (
       <div>
           <h2>Review Your Feedback for Today:</h2>
       </div>
   );
}


const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(ReviewPage);