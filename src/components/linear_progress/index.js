// acts as a loading indicator while validating an image uploaded
// or captured from the new report section.
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    width: "60%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    },
    marginTop: "180px"
  }
}));

export default function LinearIndeterminate() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} justify="center">
      <div className={classes.root}>
        <LinearProgress />
      </div>
    </Grid>
  );
}
