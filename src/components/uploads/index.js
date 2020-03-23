// this is the filepond plugin for uploaded media files
// accepts png/jpg/jpeg filetypes.
import React from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { UPLOAD_MEDIA } from "./../../utility/constants.js";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize
);

const useStyles = theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    cursor: "pointer",
    height: "500px",
    marginRight: "10px",
    marginLeft: "10px",
    maxWidth: "60%",
    position: "relative",
    top: "50%",
    transform: "translate(32%, 20%)"
  },
  text: {
    fontSize: "24px",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)"
  }
});

class UploadFiles extends React.Component {
  handleInit() {
    this.props.updateFilePondRef(this.pond);
  }

  loaded(response) {
    let imageURL = JSON.parse(response)["filename"][0];
    this.props.validation(imageURL);
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        className="App"
        style={{
          marginTop: "100px",
          marginLeft: "20px",
          marginRight: "20px",
          display: this.props.display
        }}
      >
        <Paper variant="outlined" className={classes.paper}>
          <div className={classes.text}>
            <FilePond
              ref={ref => (this.pond = ref)}
              acceptedFileTypes={["image/png", "image/jpg", "image/jpeg"]}
              labelIdle={this.props.label}
              allowMultiple={false}
              oninit={() => this.handleInit()}
              maxFileSize={"10MB"}
              allowFileSizeValidation={true}
              server={{
                process: {
                  url: UPLOAD_MEDIA,
                  onload: response => this.loaded(response)
                }
              }}
            />
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles)(UploadFiles);
