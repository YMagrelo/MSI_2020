/* eslint-disable react/prop-types */
import React from 'react';
import '../App.scss';
import { connect } from 'react-redux';
import { getRandomJokeThunk } from '../redux/reducer';
import RandomJoke from './RandomJoke';
import './Randomizer.scss';

const Randomizer = (props) => {
  const { getRandomJoke, randomJoke } = props;

  return (
    <div className="randomizer">
      <h1 className="randomizer__heading">MSI 2020</h1>
      <p className="randomizer__title">Hey!</p>
      <p className="randomizer__underTitle">
          Let’s try to find a joke for you:
      </p>
      <button
        type="button"
        className="randomizer__button"
        onClick={getRandomJoke}
      >
  Get a joke
      </button>
      {randomJoke === null
        ? null
        : <RandomJoke randomJoke={randomJoke} />}

    </div>
  );
};

const mapStateToProps = state => ({
  randomJoke: state.randomJoke,
});

const mapDispatchToProps = dispatch => ({
  getRandomJoke: () => dispatch(getRandomJokeThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Randomizer);
