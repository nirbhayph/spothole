// alert dialog accepts both single button (ok type) and
// dual button (ok and cancel) type options.
// is used in create new report for submission and cancelling.
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class AlertDialog extends React.Component {
  // pass linkTo if you wish to have a
  // feedback route as well after submission
  handleClose = () => {
    if (this.props.linkTo !== undefined) {
      window.location.href = "/spothole/#" + this.props.linkTo;
      window.location.reload();
    }
    this.props.updateCloseDialogState();
  };

  justClose = () => {
    this.props.updateCloseDialogState();
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.dialogOpenState}
          onClose={() => this.justClose()}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.props.content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.handleClose()}
              color={this.props.color}
              autoFocus
            >
              {this.props.buttonText}
            </Button>
            {this.props.linkTo !== undefined && (
              <Button
                onClick={() => this.justClose()}
                color={"primary"}
                autoFocus
              >
                No
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
