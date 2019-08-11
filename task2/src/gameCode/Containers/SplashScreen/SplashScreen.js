import React from 'react'
import { Link } from 'react-router-dom'
import './SplashScreen.css';
import logo from '../../Assets/logo.png';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    localStorage.setItem('gridSize', 4);
  }

  render() {
    return (
      <div className="Container">
        <img src={logo} alt="logo" className="App-Logo"/>
        <div className="Main-Menu">
          <p className="App-Name">Memory Game</p>
          <Link to="/playground" className="App-Text">Click Here To Start Game</Link>
        </div>
      </div>
    );
  }
}

export default SplashScreen; 