import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { render } from "react-dom"; 

class SummaryPage extends Component {
    submitFeedback = (event) => {
        const feedback = {


        }
      



    };


axios
 .post("/feedback", feedback )
 .then((repsonse) => {
     console.log(response.data);
     this.props.history.push("/");
 })
 .catch((err)  => {
     console.warn(err);
 });

};

render() {
    
}