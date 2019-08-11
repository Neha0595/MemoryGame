import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route
} from 'react-router-dom'

import {
  SplashScreen,
  Playground,
  EndGame,
} from '../../Containers';

class MainLayout extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Route exact path="/" component={SplashScreen} />
        <Route path="/playground" component={Playground} />
        <Route path="/endGame" component={EndGame} />
      </div>
    </BrowserRouter>
    );
  }
}

export default MainLayout;
