import React, { Component } from 'react';
import { connect } from 'react-redux';


class Dashboard extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ width: "100%" }}>
                <h1> HELLO WORLD </h1>
            </div>
        )
    }
}

const mapStateToProp = ({ App }) => ({ App });
export default connect(mapStateToProp, { })(Dashboard);