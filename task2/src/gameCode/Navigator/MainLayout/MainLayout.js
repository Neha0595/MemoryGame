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


// import React from 'react'
// import {
//   BrowserRouter,
//   Redirect,
//   Route
// } from 'react-router-dom'

// import {
//   Cards,
//   EndGame,
//   MainMenu,
//   NewGame
// } from '../../components'

// const MainLayout = ({ className }) => (
//   <BrowserRouter>
//     <div className={className}>
//       <Route exact path="/" render={() => <Redirect to="/menu" />} />
//       <Route path="/new-game" component={NewGame} />
//       <Route path="/game" component={Cards} />
//       <Route path="/menu" component={MainMenu} />
//       <Route path="/end-game" component={EndGame} />
//     </div>
//   </BrowserRouter>
// )

// export default MainLayout
