import React, { Component } from "react";
import { connect } from "react-redux";
import { Feedback } from "./Feedback";

class _FeedbackContainer extends Component {
  render() {
    return <Feedback />;
  }
}

let mapStateToProps = () => {
  return {};
};

export const FeedbackContainer = connect(null, {})(_FeedbackContainer);
