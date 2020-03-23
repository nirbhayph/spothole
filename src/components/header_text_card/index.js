// this component is used in the detailed report
// section. acts as a label to each major component
// in the same.
import React from "react";
import Typography from "@material-ui/core/Typography";

const HeaderTextCard = props => {
  return (
    <Typography
      gutterBottom
      style={{ marginBottom: props.marginBottom, color: props.color }}
    >
      <b>{props.text}</b>
    </Typography>
  );
};

export default HeaderTextCard;
