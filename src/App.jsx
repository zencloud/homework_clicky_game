import React from 'react';
import './assets/reset.css';
import './assets/app_styles.css';
import CardContainer from './component/CardContainer';
import Card from './component/Card';
import Notification from './component/Notification'

class App extends React.Component {

	// Set game config via state
	state = {
		scoreCurrent: 0,
		scoreBest: 0,
		cardArray: [...Array(9).keys()],
		clickedArray: [],
		noticeShow: false,
		noticeMessage: ''
	}



	// Card Click Input
	handleClick = (id) => {

		// If already clicked: Game Over
		if (this.state.clickedArray.includes(id)) {
			// Shuffle Card Array
			this.shuffleCards(this.state.cardArray);

			// Enable Message
			this.setState({
				scoreCurrent: 0,
				noticeShow: true,
				noticeMessage: "Sorry, you lost!",
				clickedArray: []
			});
		}

		// If not found: Score Success
		if (!this.state.clickedArray.includes(id)) {

			// Create new state for later
			let newState = {}

			// New Score:
			newState.scoreCurrent = (this.state.scoreCurrent + 1);

			// Player Wins
			if (newState.scoreCurrent === 9) {
				
				// Enable Win Notice
				newState.noticeShow = true;
				newState.noticeMessage = "Congrats, you won!";
			}


			// Disable Notification Check
			if (this.state.noticeShow) { newState.noticeShow = false; }

			// Add last clicked to array
			this.state.clickedArray.push(id);

			if (newState.scoreCurrent > this.state.scoreBest) {
				newState.scoreBest = newState.scoreCurrent;
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

		// Render Notification
		let showNotice;
		if (this.state.noticeShow) {
			showNotice = <Notification messageNotice={this.state.noticeMessage} />;
		}
		return (
			<div className="app-wrapper">

				{/* Header */}
				<div className="app-header-container">
					<div>
						<h2>Tap-o-Lantern!</h2>
					</div>
					<div className="app-score-container">
						<p>Current Score: {this.state.scoreCurrent}</p>
						<p>Best Score: {this.state.scoreBest}</p>
					</div>
				</div>

				{showNotice}

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
