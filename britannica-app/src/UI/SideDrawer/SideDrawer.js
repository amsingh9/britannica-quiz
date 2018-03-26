import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"]
    if(props.showDrop) {
        attachedClasses = ["SideDrawer", "Open"]
    }
    return (
        <div>
            <Backdrop clicked={props.backDropClick} show={props.showDrop}/>
            <div className={attachedClasses.join(' ')}>
                <div className="Logo">
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </div>
    );
}

export default sideDrawer;