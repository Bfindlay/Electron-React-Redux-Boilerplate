import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMainComponent, sendSnackMessage } from '../../actions';



class NavOptions extends Component {
    constructor(){
        super();
        this.state = {
            active : 'dashboard',
            status: ['#fc605b', '#34c84a','#fdbc40']
        }
    }

    getStatus(component){
        //get the status of each component and return its colour
        return this.state.status[component]
    }

    render(){
        const { active } = this.state;
        return(
            <div className="pane-sm sidebar">
                <nav className="nav-group">
                    <h5 className="nav-group-title">Options</h5>
                     <a id='dashboard'>
                        <span className={`nav-group-item ${active === 'dashboard' ? 'active' : ''}`}>
                            <span className="icon icon-gauge"></span>
                            Dashboard
                        </span>
                    </a>
                    <a id='dashboard'>
                    <span className={`nav-group-item ${active === 'database' ? 'active' : ''}`}>
                        <span className="icon icon-database"></span>
                        Tab 2
                    </span>
                </a>
                     <a id='dashboard'>
                        <span className={`nav-group-item ${active === 'settings' ? 'active' : ''}`}>
                            <span className="icon icon-cog"></span>
                            Tab 3
                        </span>
                    </a>
                    <h5 className="nav-group-title">System Configuration</h5>
                     <span className="nav-group-item">
                        <span className="icon icon-record" style={{'color': this.getStatus(0)}}></span> Status
                    </span>
                     <span className="nav-group-item">
                        <span className="icon icon-record" style={{'color': this.getStatus(0)}}></span> Status
                    </span>
                     <span className="nav-group-item">
                        <span className="icon icon-record" style={{'color': this.getStatus(0)}}></span> Status
                    </span>  
                    <span className="nav-group-item">
                        <span className="icon icon-record" style={{'color': this.getStatus(0)}}></span> Status
                    </span>  
                </nav>
                <p className="version">Version: 1.2.3</p>
            </div>
        )
    }
}
                  
const mapStateToProp = ({App}) => ({ App });
export default connect(mapStateToProp, {setMainComponent, sendSnackMessage})(NavOptions);

