// this component is used inside view report
// section in the my complaints route. uses the mui treasury
// chat message component to render the message array.
// manipulates the comments data received from the backend
// and creates the user/authority message array.
// also contains the component to post a new message
import React from "react";
import DescriptionBox from "./../description";
import axios from "axios";
import Button from "@material-ui/core/Button";
import ChatMessage from "./../chat_message_box";
import {
  GET_REPORT_COMMENTS,
  SUBMIT_REPORT_COMMENT
} from "./../../utility/constants.js";

let self;
class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: "",
      caseId: props.caseNumber,
      userType: "U",
      buttonDisabled: true,
      commentComponentArray: [],
      emptyDescriptionBox: false,
      makeBoxEmptyFunction: ""
    };
    self = this;
    this.getAllComments();
  }

  // for a new message, updates the state
  // of the submit button (validation)
  setDescription = description => {
    this.setState({
      commentText: description
    });
    if (description === "") {
      this.setState({
        buttonDisabled: true
      });
    } else {
      this.setState({
        buttonDisabled: false
      });
    }
  };

  // gets all the user comments for the
  // particular report from the backend
  getAllComments = () => {
    axios
      .post(GET_REPORT_COMMENTS, { data: { caseId: this.state.caseId } })
      .then(function(response) {
        self.manageCommentData(response.data);
      })
      .catch(function(error) {
        console.info("Problem with getting your comments!");
      });
  };

  // formats the date to be seen on the chat message
  formatDateTime = dateTimeToFormat => {
    let dateTime = new Date(dateTimeToFormat);
    let formattedMonth = dateTime.toLocaleString("en", { month: "long" });
    let formattedTime = dateTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    return (
      dateTime.getDate() +
      " " +
      formattedMonth +
      ", " +
      dateTime.getFullYear() +
      " @ " +
      formattedTime +
      " → \n"
    );
  };

  // manipulates the comments data received from the backend and
  // creates the message array to be passed to the mui treasury component
  manageCommentData = commentsData => {
    if (commentsData.length > 0) {
      let prevUserType = commentsData[0].userType;
      let currentSequence = [];
      let commentComponentArray = [];
      let counter = 1;
      commentsData.map(comment => {
        if (comment.userType === prevUserType) {
          currentSequence.push(
            this.formatDateTime(comment.commentDateTime) + comment.commentText
          );
          prevUserType = comment.userType;
        } else {
          commentComponentArray.push(
            <ChatMessage
              messageArray={currentSequence}
              side={self.getChatMessageSide(prevUserType)}
            />
          );
          prevUserType = comment.userType;
          currentSequence = [];
          currentSequence.push(
            this.formatDateTime(comment.commentDateTime) + comment.commentText
          );
        }

        // push for last sequence
        if (counter === commentsData.length) {
          commentComponentArray.push(
            <ChatMessage
              messageArray={currentSequence}
              side={self.getChatMessageSide(prevUserType)}
            />
          );
        }
        ++counter;

        return comment;
      });
      self.setState({
        commentComponentArray: commentComponentArray
      });
    }
    return true;
  };

  // based on the user type in the chat message
  // associates a message side to it
  getChatMessageSide = userType => {
    return userType === "U" ? "right" : "left";
  };

  // submits a new comment entered in the description box
  // handles the submission to the backend and clears the description box too
  handleSubmit = () => {
    axios
      .post(SUBMIT_REPORT_COMMENT, { data: this.state })
      .then(res => {
        self.setState({
          emptyDescriptionBox: true
        });
        self.state.makeBoxEmptyFunction();
        this.getAllComments();
      })
      .catch(function(error) {
        console.info("Problem with submitting your comment!");
      });
  };

  // empties the description box by resetting the state variable
  makeEmpty = makeBoxEmpty => {
    self.setState({
      makeBoxEmptyFunction: makeBoxEmpty
    });
  };

  render() {
    return (
      <div>
        <br />
        {this.state.commentComponentArray.map(function(item, i) {
          return <div key={i}>{item}</div>;
        })}
        <br />
        <DescriptionBox
          passMakeEmpty={this.makeEmpty}
          emptyBox={this.state.emptyDescriptionBox}
          updateDescription={self.setDescription}
        />
        <Button
          onClick={() => this.handleSubmit()}
          color="primary"
          disabled={this.state.buttonDisabled}
          style={{ fontSize: "15px", fontWeight: "bold" }}
        >
          Submit
        </Button>
      </div>
    );
  }
}

export default Comments;
