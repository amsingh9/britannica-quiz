import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import './NavigationItems.css'

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" title="Home" exact></NavigationItem>
        <NavigationItem link="/take-quiz" title="Take Quiz" exact></NavigationItem>
        <NavigationItem link="/about-us" title="About Us"></NavigationItem>
    </ul>
);

export default navigationItems;