import React from 'react'
import { Link } from 'react-router-dom'
import './EndGame.css';
import wonImage from '../../Assets/you-won.png';

class EndGame extends React.Component {
  render() {
    return (
      <div className="EndGame-Container">
        <img
          src={wonImage}
          alt="You won"
          className="youWonImage"
        />

        <p className="youWonText">
          Congratulations! You won!
          <br/>
          <span className="movesText">Moves {this.props.location.state.moves}</span>
        </p>

        <br />
        <Link to="/" className="newGameLink">Play Again</Link>
      </div>
    );
  }
}

export default EndGame;
