import React from 'react'
import logo from '../../Assets/logo.png';
import './Header.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class Header extends React.Component {
  render() {
    const { gridSize, updateGridSize, stage, hitCount, resetGame } = this.props;
    const options = [
      4, 8, 12
    ];
    return (
      <header className="Header">
        <div className="Header_logo">
          <img
            alt="logo"
            className="Header__logoImage"
            src={logo}
          />
          Memory game
        </div>
        <div className="Menu-Container">
          <div className="Menu">
            Stage <span className="Box">{stage}</span>
          </div>
          <div className="Menu">
            Moves <span className="Box">{hitCount}</span>
          </div>
          <div className="Menu">
            Grid
            <Dropdown className="Selector" options={options} onChange={updateGridSize} placeholder={gridSize} />
          </div>
        </div>
        <div className="Reload-Button">
          <a className="Box" onClick={resetGame}>&#x21bb;</a>
        </div>
      </header>
    );
  }
}

export default Header;
