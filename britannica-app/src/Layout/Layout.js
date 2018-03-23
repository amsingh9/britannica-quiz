import React from 'react';
import Toolbar from '../Toolbar/Toolbar'
import './Layout.css'

const Layout = (props) => {
    console.log(props);
    return (
        <div>
            <Toolbar/>
            <main className="content">
               {props.children} 
            </main>
        </div>
    )
}

export default Layout;