import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <img
                data-id={props.id}
                alt="Game Card" 
                src={`/imgs/${props.id}.png`}
                onClick={() => props.handleClick(props.id)}
            />
        </div>
    )
}

export default Card;