import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar'
import './Layout.css'
import SideDrawer from '../UI/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer : false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }

    toggleDrawerHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <div>
                <Toolbar toggle={this.toggleDrawerHandler}/>
                <SideDrawer backDropClick={this.sideDrawerClosedHandler}
                showDrop={this.state.showSideDrawer}/>
                <main className="content">
                    {this.props.children} 
                </main>
            </div>
        );
    }
}

export default Layout;