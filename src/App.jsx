/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './App.scss';
import className from 'classnames';
import Randomizer from './components/Randomizer';
import Favorite from './components/Favorite';

const App = () => {
  const [open, setOpen] = useState(false);
  const favoriteIsClosed = 

  return (
    <div className="app-wrapper">
      <div className="app-wrapper__content"><Randomizer /></div>
      <div
        className="app-wrapper__burger"
      >
        <div
          className="burger"
        >
          <div
            className="burger__outter"
            onClick={() => setOpen(!open)}
            open={open}
          >
            <div className="burger__inner" />
            <div className="burger__inner" />
          </div>
          <div className="burger__title">Favourite</div>
        </div>
      </div>
      <div className="app-wrapper__favorite close"><Favorite /></div>
    </div>
  );
};

export default App;
