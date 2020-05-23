import React from 'react';
import '../App.scss';
import { getJoke } from '../api';

export const Randomizer = () => (
  <div className="randomizer">
    <h1 className="randomizer__heading">MSI 2020</h1>
    <p className="randomizer__title">Hey!</p>
    <p className="randomizer__underTitle">
        Let’s try to find a joke for you:
    </p>
    <button
      type="button"
      className="randomizer__button"
      onClick={getJoke}
    >
Get a joke
    </button>
  </div>
);
