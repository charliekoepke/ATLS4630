import React from 'react';

const Info = props => {
    return(<div className="info-box">
        <div className ="box">
            <button className="close-button" onClick={props.handleClose}>x</button>
            {props.content}
        </div>
    </div>)
}

export default Info;
