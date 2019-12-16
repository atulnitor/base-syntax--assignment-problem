import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>This is the UserOutput Div</p>
            <p>UserOutput component</p>
            <p> UserName: {props.username}</p>
        </div>
    )
};

export default userOutput