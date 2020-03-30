// this component is used to display the progress status on a particular report.
// it has four options: submitted, approved, in progress and completed.
import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Create from "@material-ui/icons/Create";
import DoneAll from "@material-ui/icons/DoneAll";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import StepConnector from "@material-ui/core/StepConnector";
import CloseIcon from "@material-ui/icons/Close";

let currentSteps;

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1
  }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#f1f8e9",
    zIndex: 1,
    color: "#333",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    color: "#fafafa",
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  completed: {
    color: "#fafafa",
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
  }
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  let icons = {};
  if (currentSteps.length === 2) {
    icons = {
      1: <Create />,
      2: <CloseIcon />
    };
  } else {
    icons = {
      1: <Create />,
      2: <DoneAll />,
      3: <TransferWithinAStationIcon />,
      4: <EmojiEmotionsIcon />
    };
  }

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node
};

function getSteps(stepNumber) {
  if (stepNumber === 4) {
    return ["Submitted", "Cancelled"];
  }
  return ["Submitted", "Approved", "Working", "Completed"];
}

export default function CustomizedSteppers(props) {
  const steps = getSteps(props.stepNumber);
  currentSteps = steps;
  return (
    <div style={{ textAlign: "left", minWidth: "300px" }}>
      <Stepper
        alternativeLabel
        activeStep={props.stepNumber}
        connector={<ColorlibConnector />}
        style={{ float: "left" }}
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
