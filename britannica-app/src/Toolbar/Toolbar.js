import React from 'react';
import './Toolbar.css'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import Logo from '../Logo/Logo'
import DrawerToggle from '../UI/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.toggle}/>
        <div className="LogoTool">
            <Logo/>
        </div>
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;