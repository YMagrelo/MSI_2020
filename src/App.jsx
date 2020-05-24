import React from 'react';
import './App.scss';
import Randomizer from './components/Randomizer';
import Favorite from './components/Favorite';

const App = () => (
  <div className="app-wrapper">
    <div className="app-wrapper__content"><Randomizer /></div>
    <div className="app-wrapper__favorite"><Favorite /></div>
  </div>
);

export default App;
