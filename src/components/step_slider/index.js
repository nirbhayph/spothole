// used to specify the severity of a new/reported pothole by the user
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    width: "100%"
  },
  slider: {
    padding: "22px 0px"
  }
};

class StepSlider extends React.Component {
  state = {
    value: 5
  };

  constructor(props) {
    super(props);
    props.updateSeverity(this.state.value);
  }

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.updateSeverity(value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Typography gutterBottom>
          Severity Rate <i>(Choose a value between 0-10)</i>
        </Typography>
        <br />
        <br />
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          min={1}
          max={10}
          step={1}
          onChange={this.handleChange}
          valueLabelDisplay="on"
        />
      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StepSlider);
