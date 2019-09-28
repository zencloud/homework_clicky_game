import React from 'react';

class CardContainer extends React.Component {

    render() {
        return (
            <div className="card-container">
            {this.props.children}
            </div>
        );
    }
}


export default CardContainer;