import React from 'react';
import './TextStyle.css';

function TypeWriter(props) {
    const text = props.text;
    return (
        <div className="typewriter" style={{position:"relative", bottom:props.bottom}}>
            <h1 id={props.id}>{text}</h1>
        </div>
    );

}

export default TypeWriter;