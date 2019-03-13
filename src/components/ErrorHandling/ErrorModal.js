import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Warning as WarningIcon } from "@material-ui/icons/"
class ErrorModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }


  handleClickOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.props.errorFunctionCancel();
    this.setState({ open: false });
  };

  handleCancel() {
    this.props.errorFunctionCancel();
    this.setState({ open: false });
  }

  handleContinue() {
    this.props.errorFunctionContinue();
    this.setState({ open: false });
  }


  render() {
    const { errorTitle, error, cancelButtonText, continueButtonText, continueAction, cancelAction } = this.props;
    return (
      <div>
        <Dialog
          open={this.state.open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogContent>
            <div className="error-modal">
              <WarningIcon style={{color:"#F65656"}}/>
              <span className="error-title">{errorTitle}!</span>
              <p>{error}</p>
              <div onClick={this.handleClose.bind(this)} className="error-button">{cancelButtonText}</div>
              <div onClick={this.handleContinue.bind(this)} className="accept-button">{continueButtonText}</div>
            </div>
          </DialogContent>
        </Dialog>

      </div>
    );
  }
}

export default ErrorModal;

