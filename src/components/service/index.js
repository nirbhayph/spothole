// utility request component for validating image captured/uploaded
import React from "react";
import axios from "axios";
import { DETECT_SINGLE_IMAGE } from "./../../utility/constants.js";

class Request extends React.Component {
  constructor(props) {
    super(props);

    axios
      .post(DETECT_SINGLE_IMAGE, {
        image_url: props.imageURL
      })
      .then(function(response) {
        props.validationCompleted(response);
      })
      .catch(function(error) {
        console.info("Unable to validate image!");
      });
  }

  render() {
    return <div />;
  }
}

export default Request;
