import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendSnackMessage, resetDefaults,setMainComponent } from '../../actions';
class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      console.log("ERROR BOUNDRY", error, info)
      this.setState({ hasError: true });
      this.props.sendSnackMessage("An error Occurred");
      this.props.setMainComponent("dashboard");
      // You can also log the error to an error reporting service
      //logErrorToMyService(error, info);
    }
  
    render() {
      return this.props.children;
    }
  }

  const mapStateToProps = ({ User }) => {
    return { User }
}
  export default connect(mapStateToProps, {sendSnackMessage, resetDefaults, setMainComponent})(ErrorBoundary);