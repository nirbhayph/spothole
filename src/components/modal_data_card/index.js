// this component is used to display the detailed results of
// a report. it appears after clicking view report in the
// my approval section.
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CustomizedSteppers from "./../stepper";
import EventIcon from "@material-ui/icons/Event";
import PinDropIcon from "@material-ui/icons/PinDrop";
import SeverityIndicator from "./../severity_indicator";
import HeaderTextCard from "./../header_text_card";
import Comments from "./../comments";
import { GOOGLE_MAPS_API_KEY } from "./../../utility/constants.js";
import "./css/modal_data_card.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
  },
  media: {
    height: 140,
  },
  mediaMap: {
    height: 200,
  },
  headerTextColor: {
    color: "white",
  },
});

export default function DetailedDataCard(props) {
  const classes = useStyles();
  const mapImageURL =
    "https://maps.googleapis.com/maps/api/staticmap?size=512x512&format=png&style=feature:road.highway%7Celement:geometry%7Cvisibility:simplified%7Ccolor:0xc280e9&style=feature:transit.line%7Cvisibility:simplified%7Ccolor:0xbababa&style=feature:road.highway%7Celement:labels.text.stroke%7Cvisibility:on%7Ccolor:0xb06eba&style=feature:road.highway%7Celement:labels.text.fill%7Cvisibility:on%7Ccolor:0xffffff&visible=" +
    props.data.latitude +
    "," +
    props.data.longitude +
    "&markers=color:red%7Clabel:A%7C" +
    props.data.latitude +
    "," +
    props.data.longitude +
    "&key=" +
    GOOGLE_MAPS_API_KEY +
    "&zoom=15";
  return (
    <Card
      style={{ border: "2px solid rgba(255,255,255,0.1)" }}
      className={classes.root}
    >
      <CardMedia className={classes.media} image={props.data.imageURL} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2"></Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {/* for the date time component*/}
          <Typography gutterBottom>
            <EventIcon />
            &nbsp; &nbsp; {props.data.dateTime}
          </Typography>

          <br />
          {/* for the address component*/}
          <Typography gutterBottom>
            <PinDropIcon />
            &nbsp; &nbsp; {props.data.fullLocation}
          </Typography>

          <br />
          {/* for the severity component*/}
          <HeaderTextCard
            text="Severity Rate"
            marginBottom="40px"
            color={classes.headerTextColor.color}
          />
          <SeverityIndicator value={props.data.severity} />

          <br />
          {/* for the stepper indicator component*/}
          <HeaderTextCard
            text="Status"
            marginBottom="15px"
            color={classes.headerTextColor.color}
          />
          <CustomizedSteppers stepNumber={props.data.stepNumber} />

          {/* for the complaint description component*/}
          <p style={{ marginTop: "120px", textAlign: "justify" }}>
            <hr style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} />
            <HeaderTextCard
              text="Complaint Description"
              marginBottom="15px"
              color={classes.headerTextColor.color}
            />
            {props.data.fullDescription}
          </p>
          <br />
          <CardMedia className={classes.mediaMap} image={mapImageURL} />
          <br />
          <hr style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} />

          {/* for the comments section */}
          <HeaderTextCard
            text="Comments"
            marginBottom="15px"
            color={classes.headerTextColor.color}
          />
          <Comments caseNumber={props.data.caseNumber} />
        </Typography>
      </CardContent>
    </Card>
  );
}
