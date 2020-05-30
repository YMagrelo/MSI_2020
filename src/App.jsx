/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './App.scss';
import classNames from 'classnames';
import Randomizer from './components/Randomizer';
import Favorite from './components/Favorite';

const App = () => {
  const [open, setOpen] = useState(false);

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
            <div className={classNames('burger__inner', 'top', { show: open })} />
            <div className={classNames('burger__inner', 'bottom', { show: open })} />
          </div>
          <div className="burger__title">Favourite</div>
        </div>
      </div>
      <div
        className={classNames('app-wrapper__favorite', { show: open })}
      >
        <Favorite />
      </div>
    </div>
  );
};

export default App;
