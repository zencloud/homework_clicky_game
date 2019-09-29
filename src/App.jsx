import React from 'react';
import './assets/reset.css';
import './assets/app_styles.css';
import CardContainer from './component/CardContainer';
import Card from './component/Card';

class App extends React.Component {

  // Set game config via state
  state = {
    scoreCurrent: 0,
    scoreBest: 0,
    cardArray: [...Array(9).keys()],
    clickedArray: []
  }

  // Card Click Input
  handleClick = (id) => {

    if (this.state.clickedArray.includes(id)) {
      console.log('game over')
    }

    if (!this.state.clickedArray.includes(id)) {

      this.state.clickedArray.push(id);
      const newState = {
        scoreCurrent: this.state.scoreCurrent + 1,
      }

      this.shuffleCards(this.state.cardArray);
      this.setState(newState);
    }

  }

  // Shuffle the card array
  shuffleCards = (array) => {
    array.sort(() => Math.random() - 0.5);
  }

  // Initialize first random shuffle
  componentDidMount() {
    this.shuffleCards(this.state.cardArray);
    this.setState(this.state);
  }

  render() {
    return (
      <div className="app-wrapper">

        {/* Header */}
        <div className="app-header-container">
          <div>
            <h2>Welcome!</h2>
          </div>
          <div className="app-score-container">
            <p>Current Score: {this.state.scoreCurrent}</p>
            <p>Best Score: {this.state.scoreCurrent}</p>
          </div>
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
