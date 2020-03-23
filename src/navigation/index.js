// this component presents the user with an option to upload images via camera or
// a file system. uses the camera upload separator for the same. it also acts as
// a middleware between the upload files component and the camera component.
// it uses the state variables to handle the operation of exchange when uploading
// images through camera or just through filepond too.
import React from "react";
import CameraComponent from "./../components/camera";
import UploadFiles from "./../components/uploads";
import Request from "./../components/service";
import CreateReport from "./../components/new_report";
import CameraUploadSeparator from "./../components/camera_upload_separator";
import LinearIndeterminate from "./../components/linear_progress";

let self;

class KickStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePondRef: null,
      validationMessage: null,
      validateComponent: null,
      enableCameraComponent: null,
      enableUploadFilesComponent: null,
      cameraEnabled: false,
      uploadEnabled: false,
      buttons: this.getButtons(),
      fileDataCopy: null,
      userId: props.userId
    };
    self = this;
  }

  uploadClickedFile = fileData => {
    self.removeCameraFromView();
    self.setState({
      enableUploadFilesComponent: (
        <UploadFiles
          label={"Preview uploading of your clicked image!"}
          display="block"
          updateFilePondRef={this.updateFilePondRef}
          validation={this.validation}
        />
      ),
      fileDataCopy: fileData
    });
  };

  updateFilePondRef = ref => {
    self.setState({
      filePondRef: ref
    });
    if (self.state.fileDataCopy !== null) {
      self.state.filePondRef.addFile(self.state.fileDataCopy);
    }
  };

  validation = imageURL => {
    self.setState({
      buttons: null,
      validationMessage: <LinearIndeterminate />,
      validateComponent: (
        <Request
          imageURL={imageURL}
          validationCompleted={this.validationCompleted}
        />
      )
    });
  };

  validationCompleted = response => {
    self.setState({
      validationMessage: (
        <CreateReport userId={this.state.userId} reportData={response.data} />
      ),
      validateComponent: "",
      enableUploadFilesComponent: null
    });
  };

  toggleCameraComponent = () => {
    if (!self.state.cameraEnabled) {
      self.setState({
        enableCameraComponent: (
          <CameraComponent
            cameraClosed={this.onCloseCamera}
            onCapture={this.uploadClickedFile}
          />
        ),
        cameraEnabled: true,
        uploadEnabled: true,
        buttons: null
      });
    } else {
      self.setState({
        enableCameraComponent: null,
        enableUploadFilesComponent: null,
        cameraEnabled: false,
        uploadEnabled: false,
        buttons: this.getButtons()
      });
    }
  };

  toggleUploadComponent = () => {
    if (!this.state.uploadEnabled) {
      self.setState({
        enableUploadFilesComponent: (
          <UploadFiles
            label={"Drag and Drop or Click to Upload a Single Image File!"}
            display={"block"}
            withCamera={false}
            updateFilePondRef={this.updateFilePondRef}
            validation={this.validation}
          />
        ),
        uploadEnabled: true,
        buttons: null
      });
    }
  };

  onCloseCamera = () => {
    self.toggleCameraComponent();
  };

  removeCameraFromView = () => {
    self.setState({
      enableCameraComponent: null,
      cameraEnabled: false
    });
  };

  getButtons() {
    return (
      <CameraUploadSeparator
        toggleCameraComponent={this.toggleCameraComponent}
        toggleUploadComponent={this.toggleUploadComponent}
      />
    );
  }

  render() {
    return (
      <div>
        {this.state.buttons}
        {this.state.enableCameraComponent}
        {this.state.enableUploadFilesComponent}
        {this.state.validateComponent}
        {this.state.validationMessage}
      </div>
    );
  }
}

export default KickStart;
