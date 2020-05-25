/* eslint-disable react/prop-types */
import React from 'react';
import '../App.scss';
import { connect } from 'react-redux';
import './Randomizer.scss';
import favorite from '../assets/icon/favorite.svg';
import message from '../assets/icon/message.svg';
import { getPassedHours } from '../constants';

const RandomJoke = (props) => {
  const { randomJoke, setFavorite } = props;

  const handleAddToFavorite = () => {
    setFavorite(randomJoke);
  };

  const previousDate = new Date(randomJoke.updated_at);
  const nextDate = new Date();
  const passedHours = getPassedHours(previousDate, nextDate);

  return (
    <div className="randomizer__content content">
      <div className="content__addToFavorite-wrapper">
        <button
          type="button"
          className="content__addToFavorite"
          onClick={handleAddToFavorite}
        >
          <img src={favorite} alt="add to favorite" />
        </button>
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
            >
              {randomJoke.id}
            </a>
          </div>
          <div className="joke__value">{randomJoke.value}</div>
          <div className="joke__footer">
            <div className="joke__date">
              {`Last update: ${passedHours.toFixed()} hours ago`}
            </div>
            <div className="joke__categories">Categories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(RandomJoke);
