import React from 'react'
import './Button.css'

const button = (props) => (
    <button disabled={props.disabled} className={"Button" + (props.disabled ? " disabled" : "")} onClick={props.click}>{props.title}</button>
);

export default button