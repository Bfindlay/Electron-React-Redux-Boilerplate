import React, { Component } from 'react';
import { connect } from 'react-redux';


class Footer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <footer className="toolbar toolbar-footer">
                <h1 style={{color:"#FFFFFF"}} className="footer-text">Version 1.2.0</h1>
           </footer>
        )
    }
}
                  
const mapStateToProp = ({}) => ({});
export default connect(mapStateToProp, {})(Footer);


