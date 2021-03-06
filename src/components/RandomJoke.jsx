/* eslint-disable react/prop-types */
import React from 'react';
import '../App.scss';
import { connect } from 'react-redux';
import './Randomizer.scss';
import favorite from '../assets/icon/favorite.svg';
import activeFavorite from '../assets/icon/heart.svg';
import message from '../assets/icon/message.svg';
import { getPassedHours } from '../utilities';
import { setFavoriteJoke, deleteFavoriteJoke } from '../redux/reducer';

const RandomJoke = (props) => {
  const { randomJoke, setFavorite, deleteFavorite, favoriteJokes } = props;
  const handleAddToFavorite = () => {
    setFavorite(randomJoke);
  };

  const handleDeleteFavorite = () => {
    deleteFavorite(randomJoke.id);
  };

  const previousDate = new Date(randomJoke.updated_at);
  const nextDate = new Date();
  const passedHours = getPassedHours(previousDate, nextDate);

  return (
    <div className="randomizer__content content">
      <div className="content__addToFavorite-wrapper">
        {!favoriteJokes.includes(randomJoke) ? (
          <button
            type="button"
            className="content__addToFavorite"
            onClick={handleAddToFavorite}
          >
            <img src={favorite} alt="add to favorite" />
          </button>
        ) : (
          <button
            type="button"
            className="content__addToFavorite"
            onClick={handleDeleteFavorite}
          >
            <img src={activeFavorite} alt="remove from favorite" />
          </button>
        )}
      </div>
      <div className="content__item-container">
        <div className="content__textIcon-wrapper">
          <img
            src={message}
            alt="joke item icon"
            className="content__textIcon"
          />
        </div>
        <div className="content__joke joke">
          <div className="joke__id-wrapper">
            <span className="joke__id-title">ID: </span>
            <a
              href={randomJoke.url}
              className="joke__id-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {randomJoke.id}
            </a>
          </div>
          <div className="joke__value">{randomJoke.value}</div>
          <div className="joke__footer">
            <div className="joke__date">
              {`Last update: ${passedHours.toFixed()} hours ago`}
            </div>

            {randomJoke.categories.length
              ? <div className="joke__categories">{randomJoke.categories}</div>
              : null}

          </div>
        </div>
      </div>
    </div>

  );
};

const mapStateToProps = state => ({
  randomJoke: state.randomJoke,
  favoriteJokes: state.favoriteJokes,
});

const mapDispatchToProps = dispatch => ({
  deleteFavorite: id => dispatch(deleteFavoriteJoke(id)),
  setFavorite: payload => dispatch(setFavoriteJoke(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RandomJoke);
