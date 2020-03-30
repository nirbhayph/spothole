// this component is the high level view of a particular
// report. it is used in the my approval screen and it uses
// a card variant from the mui treasury library.
import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import CustomizedSteppers from "./../stepper";
import DetailedDataModal from "./../detailed_data_modal";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 500,
    marginLeft: "auto",
    overflow: "initial",
    background: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2)
    }
  },
  media: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)"
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      //backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: spacing(2), // 16
      opacity: 0.5
    }
  },
  content: {
    padding: 24
  },
  cta: {
    marginTop: 24,
    textTransform: "initial"
  }
}));

const contentStylesX = makeStyles(({ spacing }) => {
  const family =
    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif";
  return {
    overline: {
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontSize: 12,
      marginBottom: "0.875em",
      display: "inline-block"
    },
    heading: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: "0.35em",
      fontFamily: family
    },
    body: {
      marginBottom: spacing(4),
      fontSize: "0.8rem",
      letterSpacing: "0.00938em",
      fontFamily: family,
      color: "#eeeeee"
    },
    button: {
      backgroundImage: "linear-gradient(147deg, #2997f7 0%, #2997f7 74%)",
      borderRadius: 5,
      paddingLeft: 24,
      paddingRight: 24,
      color: "#ffffff",
      marginTop: "25px",
      float: "right"
    }
  };
});

// for the step-based progress indicator
const switchStatus = status => {
  if (status === "submitted") {
    return 0;
  } else if (status === "approved") {
    return 1;
  } else if (status === "working") {
    return 2;
  } else if (status === "completed") {
    return 3;
  } else if (status === "cancelled") {
    return 4;
  }
};

const ReportItemCard = props => {
  const styles = useStyles();
  const contentStyles = contentStylesX();
  const shadowStyles = useOverShadowStyles();
  let dateFormat = require("dateformat");
  const dateTime = dateFormat(props.dateTime, "mmm d, yyyy");
  let stepNumber = switchStatus(props.status);

  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia className={styles.media} image={props.imageURL} />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={dateTime}
          heading={props.location}
          body={props.description}
        />
        <CustomizedSteppers stepNumber={stepNumber} />
        <DetailedDataModal
          imageURL={props.imageURL}
          dateTime={dateTime}
          location={props.location}
          fullDescription={props.fullDescription}
          fullLocation={props.fullLocation}
          stepNumber={stepNumber}
          severity={props.severity}
          caseNumber={props.caseNumber}
          latitude={props.latitude}
          longitude={props.longitude}
          buttonContentStyles={contentStyles.button}
        />
      </CardContent>
    </Card>
  );
};

export default ReportItemCard;
