import React from 'react';

const Notification = (props) => {
    
    console.log(props);
    return(
        <div className="app-notification">
            <p>{props.messageNotice}</p>
        </div>
    );
}

export default Notification;