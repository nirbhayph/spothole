// this component contains the counter indicators
// for the distance of the route, number of Potholes
// identified and the legend for the potholes based
// on severity.
import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumberedOutlined";
import TimeToLeaveIcon from "@material-ui/icons/TimeToLeaveOutlined";
import WarningIcon from "@material-ui/icons/Warning";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    borderRadius: "3px",
    border: "1px SOLID #212121",
    marginBottom: "10px"
  }
});

export default function CounterIndicator(props) {
  const classes = useStyles();

  return (
    <center>
      <Paper square className={classes.root}>
        <Tabs value={0} indicatorColor="#333" textColor="#fff" centered>
          <Tab
            icon={<FormatListNumberedIcon color="primary" />}
            label={props.totalCount + " Pothole(s)"}
            disabled
          />
          <Tab
            icon={<TimeToLeaveIcon color="primary" />}
            label={props.eta}
            disabled
          />
        </Tabs>
      </Paper>
      <Paper square className={classes.root}>
        <Tabs value={0} indicatorColor="#333" textColor="#fff" centered>
          <Tab
            icon={<WarningIcon style={{ color: "#4747f4" }} />}
            label={"Low Severity"}
            disabled
          />
          <Tab
            icon={<WarningIcon style={{ color: "orange" }} />}
            label={"Medium Severity"}
            disabled
          />
          <Tab
            icon={<WarningIcon style={{ color: "red" }} />}
            label={"High Severity"}
            disabled
          />
        </Tabs>
      </Paper>
    </center>
  );
}
