import React from 'react'

const button = (props) => (
    <button onClick={props.click}>{props.title}</button>
);

export default button