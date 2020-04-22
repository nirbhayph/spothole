// this is a conditional based component:
// 1]. when an image is validated successfully, it renders
// a new report form.
// 2]. when an invalid image is entered it takes the user to
// a corresponding screen.
// 3]. after pressing submit on the new report form, it takes
// the user to the feedback screen.
import React from "react";
import LocationSearchInput from "./../search_places";
import StepSlider from "./../step_slider";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DescriptionBox from "./../description";
import AlertDialog from "./../alert_dialog";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  SUBMIT_USER_REPORT,
  GOOGLE_MAPS_API_KEY,
} from "./../../utility/constants.js";

const useStyles = (theme) => ({
  root: {
    maxWidth: "100%",
    marginRight: "10%",
    marginLeft: "10%",
    marginTop: "120px",
    marginBottom: "30px",
  },
});

let self;

class CreateReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: props.reportData.split(" : ")[0],
      location: "",
      severity: "",
      description: "",
      dialogOpenState: false,
      cancelDialogOpenState: false,
      locationLatLng: "",
      makeBoxEmptyFunction: "",
      showSubmittedFeedback: false,
      permissionLocation: "",
      permissionLocationLatLng: "",
      userId: props.userId,
    };

    self = this;

    this.getLocation();
  }

  setLocation = (location, latLngLocation) => {
    if (this.state.location !== location) {
      self.setState({
        location: location,
        locationLatLng: latLngLocation,
      });
    }
  };

  setPermissionBasedLocation = (location, latLngLocation) => {
    if (this.state.location !== location) {
      self.setState({
        permissionLocation: location,
        permissionLocationLatLng: latLngLocation,
      });
    }
  };

  showPosition = (position) => {
    axios
      .get(
        "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          "&key=" +
          GOOGLE_MAPS_API_KEY
      )
      .then(
        (result) => {
          this.setPermissionBasedLocation(
            result["data"]["results"][0]["formatted_address"],
            result["data"]["results"][0]["geometry"]["location"]
          );
        },
        (error) => {
          console.info("Cannot update current location");
        }
      );
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.info("Geolocation is not supported by this browser.");
    }
  };

  setSeverity = (severity) => {
    self.setState({
      severity: severity,
    });
  };

  setDescription = (description) => {
    self.setState({
      description: description,
    });
  };

  updateCloseDialogState = () => {
    self.setState({
      dialogOpenState: false,
    });
  };

  updateCancelDialogState = () => {
    self.setState({
      cancelDialogOpenState: false,
    });
  };

  submitForm = () => {
    let postLocation, postLocationLatLng;
    if (this.state.location === "" && this.state.permissionLocation === "") {
      postLocation = "";
    } else {
      if (this.state.location !== "") {
        postLocation = this.state.location;
        postLocationLatLng = this.state.locationLatLng;
      } else {
        postLocation = this.state.permissionLocation;
        postLocationLatLng = this.state.permissionLocationLatLng;
      }
    }
    if (
      this.state.description === "" ||
      postLocation === "" ||
      this.state.severity === ""
    ) {
      this.setState({
        dialogOpenState: true,
      });
    } else {
      this.setState({
        dialogOpenState: false,
      });
      axios
        .post(SUBMIT_USER_REPORT, {
          data: {
            description: this.state.description,
            location: postLocation,
            locationLatLng: postLocationLatLng,
            imageURL: this.state.imageURL,
            userId: this.state.userId,
            severity: this.state.severity,
          },
        })
        .then(
          (res) => {
            this.setState({
              showSubmittedFeedback: true,
            });
          },
          (err) => {
            console.info("Problem with submitting your report");
          }
        );
    }
  };

  makeEmpty = (makeBoxEmpty) => {
    self.setState({
      makeBoxEmptyFunction: makeBoxEmpty,
    });
  };

  showCancelAlert = () => {
    self.setState({
      cancelDialogOpenState: true,
    });
  };

  navigateToNewReport = () => {
    window.location.reload();
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        {/* refer top level comments (section 1)*/}
        {!this.state.showSubmittedFeedback &&
          this.props.reportData.split(" : ")[1] === "Your image is valid!" && (
            <div>
              <Card className={classes.root}>
                <CardMedia
                  component="img"
                  alt="Detected Pothole Image"
                  height="400"
                  image={this.props.reportData.split(" : ")[0]}
                  title="Validated Pothole Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Create Report
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    We were able to identify one or more potholes in the image
                    you provided. Please fill the rest of the details to file an
                    official complaint. Once you create a report and it gets
                    approved you cannot cancel the request made until resolved
                    by the the concerned authority. Don't forget to add
                    supporting comments to your report.
                  </Typography>
                  <LocationSearchInput
                    updateLocation={this.setLocation}
                    permissionLocationValue={this.state.permissionLocation}
                  />
                  <StepSlider updateSeverity={this.setSeverity} />
                  <DescriptionBox
                    passMakeEmpty={this.makeEmpty}
                    updateDescription={this.setDescription}
                  />
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => this.submitForm()}
                  >
                    Submit
                  </Button>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => this.showCancelAlert()}
                  >
                    Cancel
                  </Button>
                </CardActions>
              </Card>
              <AlertDialog
                dialogOpenState={this.state.cancelDialogOpenState}
                updateCloseDialogState={this.updateCancelDialogState}
                title={"Cancel Reporting!"}
                content={"Are you sure you want to cancel?"}
                buttonText={"Yes, Cancel Report"}
                linkTo={"/report"}
                color={"secondary"}
              />
              <AlertDialog
                dialogOpenState={this.state.dialogOpenState}
                updateCloseDialogState={this.updateCloseDialogState}
                title={"Required Fields Validation"}
                content={"One or more required fields are empty!"}
                buttonText={"OK"}
                color={"primary"}
              />
            </div>
          )}
        {/* refer top level comments (section 2)*/}
        {!(
          this.props.reportData.split(" : ")[1] === "Your image is valid!"
        ) && (
          <div>
            <Card className={classes.root}>
              <CardMedia
                component="img"
                alt="Not Detected Pothole Image"
                height="400"
                image={this.props.reportData.split(" : ")[0]}
                title="Not Validated Pothole Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Seems Like an Invalid Image
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  There does not seem to be a pothole in this image. Please
                  retry with a different image. If you feel you have uploaded a
                  correct image feel free to email us at{" "}
                  <a href="mailto:contact.spothole@gmail.com">
                    contact.spothole@gmail.com
                  </a>
                </Typography>
              </CardContent>
              <CardActions style={{ marginTop: "10px" }}>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => this.navigateToNewReport()}
                >
                  Retry
                </Button>
                <Link to="/dashboard">
                  <Button size="small" color="primary">
                    Go to My Complaints
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        )}
        {/* refer top level comments (section 3)*/}
        {this.state.showSubmittedFeedback &&
          this.props.reportData.split(" : ")[1] === "Your image is valid!" && (
            <div>
              <Card className={classes.root}>
                <CardMedia
                  component="img"
                  alt="Detected Pothole Image"
                  height="400"
                  image={this.props.reportData.split(" : ")[0]}
                  title="Validated Pothole Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Complaint Registered!
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Thank you for submitting the report. A concerned authority
                    will get back to you. You can find the new report and
                    monitor it's status in the{" "}
                    <Link to="/dashboard">My Complaints</Link> section.
                  </Typography>
                  <br />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Keep a track of your report through the comments section and
                    feel free to exchange more thoughts with the concerned
                    authority too. You can even email us at{" "}
                    <a href="mailto:contact.spothole@gmail.com">
                      contact.spothole@gmail.com
                    </a>{" "}
                    for more questions.
                  </Typography>
                </CardContent>
                <CardActions style={{ marginTop: "10px" }}>
                  <Link to="/dashboard">
                    <Button size="small" color="primary">
                      Go to My Complaints
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </div>
          )}
      </div>
    );
  }
}

export default withStyles(useStyles)(CreateReport);
