/* eslint-disable react/prop-types */
import React from 'react';
import '../App.scss';
import { connect } from 'react-redux';
import './Randomizer.scss';
import favorite from '../assets/icon/favorite.svg';
import message from '../assets/icon/message.svg';

const RandomJoke = (props) => {
  const { randomJoke } = props;

  return (
    <div className="randomizer__content content">
      <button
        type="button"
        className="content__addToFavorite"
      >
        <img src={favorite} alt="add to favorite" />
      </button>
      <div className="content__item-container">
        <div className="content__textIcon-container">
          <img
            src={message}
            alt="joke item icon"
            className="content__textIcon"
          />
        </div>
        <div className="content__joke-wrapper">
          {randomJoke.value}
        </div>
      </div>
    </div>
  );
};

export default connect()(RandomJoke);
