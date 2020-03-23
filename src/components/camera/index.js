// contains the camera component
// uses the web rtc protocol for the same
// uses the react-html5-camera-photo library
// contains a customised styling layout for the camera component
import React from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "60px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    cursor: "pointer",
    height: "480px",
    marginRight: "10px",
    marginLeft: "10px"
  },
  text: {
    fontSize: "24px",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)"
  }
});

class CameraComponent extends React.Component {
  // camera helper methods
  handleTakePhoto(dataUri) {
    console.log("takePhoto");
  }

  handleTakePhotoAnimationDone(dataUri) {
    console.log("takePhoto", dataUri);
  }

  handleCameraError(error) {
    console.log("handleCameraError", error);
  }

  handleCameraStart(stream) {
    console.log("handleCameraStart");
  }

  handleCameraStop() {
    console.log("handleCameraStop");
  }

  render() {
    return (
      <Paper
        variant="outlined"
        style={{ width: "80%", marginLeft: "10%", marginTop: "150px" }}
      >
        <Button
          color="secondary"
          variant="contained"
          style={{
            zIndex: 1,
            float: "right",
            marginBottom: "10px",
            marginRight: "10px",
            marginTop: "10px"
          }}
          onClick={() => this.props.cameraClosed()}
        >
          Close Camera &nbsp;
          <HighlightOffIcon />
        </Button>
        <Camera
          onTakePhoto={dataUri => {
            this.props.onCapture(dataUri);
          }}
          onTakePhotoAnimationDone={dataUri => {
            this.handleTakePhotoAnimationDone(dataUri);
          }}
          onCameraError={error => {
            this.handleCameraError(error);
          }}
          idealFacingMode={FACING_MODES.ENVIRONMENT}
          idealResolution={{ width: 600, height: 480 }}
          imageType={IMAGE_TYPES.JPG}
          imageCompression={0.97}
          isMaxResolution={true}
          isImageMirror={false}
          isSilentMode={false}
          isDisplayStartCameraError={true}
          isFullscreen={false}
          sizeFactor={1}
          onCameraStart={stream => {
            this.handleCameraStart(stream);
          }}
          onCameraStop={() => {
            this.handleCameraStop();
          }}
        />
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{
            marginTop: "-5px",
            textAlign: "center",
            fontSize: "18px",
            backgroundColor: "#2997f7",
            color: "white"
          }}
        >
          <b>Click a Picture with a Pothole to get started!</b>
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(useStyles)(CameraComponent);
