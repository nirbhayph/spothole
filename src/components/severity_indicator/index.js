// used to specify the severity of a new/reported pothole
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const styles = {
  root: {
    width: "100%"
  },
  slider: {
    padding: "22px 0px"
  }
};

class SeverityIndicator extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Slider
          classes={{ container: classes.slider }}
          value={this.props.value}
          min={1}
          max={10}
          step={1}
          valueLabelDisplay="on"
          disabled
        />
      </div>
    );
  }
}

SeverityIndicator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SeverityIndicator);
