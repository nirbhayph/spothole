// displays an option to choose between upload from files or use the camera component
// uses a customised styling layout for the same
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import Typography from "@material-ui/core/Typography";
import GavelIcon from "@material-ui/icons/GavelOutlined";

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
    height: "300px",
    marginRight: "10px",
    marginLeft: "10px",
    borderRadius: "10px",
    border: "1px solid #212121"
  },
  text: {
    fontSize: "24px",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)"
  }
});

class CameraUploadSeparator extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={2} justify="center">
          <Grid item xs={10} sm={10}>
            <br />
            <br />
            <br />
            <Typography
              gutterBottom
              style={{ textAlign: "center", fontSize: "2.7em" }}
            >
              Spot and Report{" "}
              <GavelIcon style={{ fontSize: 50 }} color="secondary" /> Potholes
              Now
            </Typography>
            <div>
              <center>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{
                    textAlign: "center",
                    fontSize: "1.5em",
                    maxWidth: "400px"
                  }}
                >
                  Choose between either uploading a photo from the file system
                  or using the camera to click a photo.
                </Typography>
              </center>
            </div>
            <br />
            <br />
            <br />
          </Grid>
          <Grid item xs={6} sm={5}>
            <Paper
              variant="outlined"
              onClick={() => this.props.toggleCameraComponent()}
              className={classes.paper}
            >
              <div className={classes.text}>
                <AddAPhotoIcon style={{ fontSize: 120 }} /> <br /> Upload From
                Camera
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={5}>
            <Paper
              variant="outlined"
              onClick={() => this.props.toggleUploadComponent()}
              className={classes.paper}
            >
              <div className={classes.text}>
                <AddToPhotosIcon style={{ fontSize: 120 }} /> <br /> Upload From
                File Manager
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(CameraUploadSeparator);
