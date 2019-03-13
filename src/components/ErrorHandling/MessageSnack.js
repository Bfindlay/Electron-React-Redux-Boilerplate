import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  clearSnackMessage } from '../../actions';
import {
  Snackbar,
} from '@material-ui/core/';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';


const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});


class MessageSnack extends Component {

  constructor() {
    super();
    this.state = {
    
    }
  }

  handleClose = (event, reason) => {
    this.props.clearSnackMessage();
  };


  render() {
    const { message, messageOpen } = this.props.App;
    return (
        <Snackbar
          bodystyle={{maxWidth: '100%', height: 'auto'  }}
          open={messageOpen}
          message={message}
          autoHideDuration={4000}
          onClose={this.handleClose}
        />
    );
  }
}

const mapStateToProps = ({ App }) => {
  return { App }
}

export default connect(mapStateToProps, { clearSnackMessage })(MessageSnack);