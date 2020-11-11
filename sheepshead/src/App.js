import React from 'react';
import './App.css';
import Game from './pages/Game';
import Intro from './pages/Intro';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import ".App.css";

function App() {
  return (
    <Router>
      <Route path='/intro' component={Intro}/>
      <Route path = '/game' component={Game}/>
    </Router>
  );
}

export default App;
