/* eslint-disable react/prop-types */
import React from 'react';
import '../App.scss';
import { connect } from 'react-redux';
import {
  getRandomJokeThunk,
  setFavoriteJoke,
  getJokeFromCategoriesThunk,
} from '../redux/reducer';
import RandomJoke from './RandomJoke';
import './Randomizer.scss';
import Radio from './Radio';

const Randomizer = (props) => {
  const {
    getRandomJoke,
    randomJoke,
    setFavorite,
    getJokeFromCategories,
  } = props;

  return (
    <div className="randomizer">
      <h1 className="randomizer__heading">Chuck Norris facts</h1>
      <p className="randomizer__title">Hey!</p>
      <p className="randomizer__underTitle">
          Let’s try to find a joke for you:
      </p>
      <Radio
        getRandomJoke={getRandomJoke}
        getJokeFromCategories={getJokeFromCategories}
      />
      {randomJoke === null
        ? null
        : (
          <RandomJoke
            randomJoke={randomJoke}
            setFavorite={setFavorite}
          />
        )}

    </div>
  );
};

const mapStateToProps = state => ({
  randomJoke: state.randomJoke,
});

const mapDispatchToProps = dispatch => ({
  getRandomJoke: () => dispatch(getRandomJokeThunk()),
  setFavorite: payload => dispatch(setFavoriteJoke(payload)),
  getJokeFromCategories: category => dispatch(
    getJokeFromCategoriesThunk(category),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Randomizer);
