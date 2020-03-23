// this component is the text area field used in the
// comments sections and the new report section.
// it requires a function as prop to get the
// updated value of the description box.
// also has built-in error validation
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

class DescriptionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorRequired: false,
      content: ""
    };
    this.textFieldRef = React.createRef();
    props.passMakeEmpty(this.makeEmpty);
  }

  makeEmpty = () => {
    this.setState({
      content: ""
    });
    this.checkRequired(this.textFieldRef.current, "required");
  };

  checkRequired = (target, errorRequired) => {
    let descriptionValue = target.value.trim();
    if (descriptionValue !== "") {
      this.setState({
        errorRequired: false,
        content: target.value
      });
    } else {
      this.setState({
        errorRequired: errorRequired === undefined ? true : false,
        content: target.value
      });
    }
    this.props.updateDescription(descriptionValue);
  };

  render() {
    return (
      <div>
        <Typography
          style={{ marginBottom: "10px", marginTop: "5px" }}
          gutterBottom
        >
          Add Comment
        </Typography>
        <TextField
          inputRef={this.textFieldRef}
          error={this.state.errorRequired}
          onChange={event => this.checkRequired(event.target)}
          required
          fullWidth
          variant="outlined"
          placeholder="Supporting comments on the report"
          multiline
          rows={4}
          rowsMax={50}
          label={"Additional Comments (Required)"}
          value={this.state.content}
        />
      </div>
    );
  }
}

export default DescriptionBox;
