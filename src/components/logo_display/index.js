import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: "20px",
    borderRadius: "10px",
    background: "url(https://i.ibb.co/7tx4DWf/back.jpg)"
  }
});

export default function LogoDisplay() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <img
        src="https://i.ibb.co/JdW6nVX/Spothole-1.png"
        style={{ widht: "250px", height: "250px" }}
        alt="logo"
      />
    </Card>
  );
}
