import React from 'react';
import './assets/app_styles.css';
import CardContainer from './component/CardContainer';
import Card from './component/Card';

class App extends React.Component {

  state = {
    scoreCurrent: 0,
    scoreBest:    0,
    cardArray:    [...Array(9).keys()]
  }

  // Handle Input
  handleClick = (event) => {
    console.log(event);
  }

  render() {
    return (
      <div className="app-wrapper">

        {/* Header */}
        <div className="app-header-container">
          <h2>Welcome!</h2>
          <h2>Current Score: {this.state.scoreCurrent}</h2>
        </div>

        {/* Game Cards */}
        <CardContainer>
          { // Create Cards
            this.state.cardArray.map((id) => (
              <Card
                key={id}
                id={id}
                handleClick={this.handleClick}
              />
            ))
          }
        </CardContainer>
      </div>
    );
  }

}

export default App;
