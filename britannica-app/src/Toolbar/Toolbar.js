import React from 'react';
import './Toolbar.css'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import Logo from '../Logo/Logo'

const toolbar = (props) => (
    <header className="Toolbar">
        <div className="Logo">
            <Logo/>
        </div>
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;