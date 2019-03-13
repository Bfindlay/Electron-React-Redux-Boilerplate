import React, { Component } from "react";
import { connect } from "react-redux";
import { setMainComponent } from "../actions";

import { MessageSnack, ErrorBoundry } from "./index.js";

class Root extends Component {
	constructor() {
		super();
		this.socket = null;
	}


	render() {

		return (
			<ErrorBoundry>
				<div className="app-wrapper">
					<div className="parent">
						{this.props.children}
						<MessageSnack />
					</div>
				</div>
			</ErrorBoundry>
		);
	}
}

const mapStateToProp = ({ App }) => ({ App });
export default connect(mapStateToProp,{ setMainComponent })(Root);
