import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavOptions, Dashboard} from './index.js';

class Root extends Component {
    constructor(){
        super();
    }


    renderComponent(){
        const { component } = this.props;
       

        switch(component){
            case 'dashboard' : {
                return <Dashboard/>
            }
            default:
                return <Dashboard/>
        }
    }   

    render(){
        return(
            <div className="window">
                <div className="window-content">
                    <div className="pane-group">
                        <NavOptions />
                        <div className="pane">
                            { this.renderComponent() }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProp = ({App}) => ({component : App.component });
export default connect(mapStateToProp, {})(Root);