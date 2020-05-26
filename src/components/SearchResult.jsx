/* eslint-disable react/prop-types */
import React from 'react';
import '../App.scss';
import './Randomizer.scss';
import { getPassedHours } from '../utilities';
import favorite from '../assets/icon/favorite.svg';
import message from '../assets/icon/message.svg';

export const SearchResult = (props) => {
  const { searchJokes, setFavorite } = props;
  const handleAddToFavorite = (id) => {
    const searchItem = searchJokes.find(item => item.id === id);

    setFavorite(searchItem);
  };

  return (
    <div>
      {searchJokes.map((joke) => {
        const previousDate = new Date(joke.updated_at);
        const nextDate = new Date();
        const passedHours = getPassedHours(previousDate, nextDate);
        const { id } = joke;

        return (
          <div className="randomizer__content content" key={joke.id}>
            <div className="content__addToFavorite-wrapper">
              <button
                type="button"
                className="content__addToFavorite"
                onClick={() => handleAddToFavorite(id)}
              >
                <img src={favorite} alt="add to favorites" />
              </button>
            </div>
            <div className="content__item-container">
              <div className="content__textIcon-container">
                <img
                  src={message}
                  alt="joke item icon"
                  className="content__textIcon"
                />
              </div>
              <div className="content__joke joke">
                <div className="joke__id-wrapper">
                  <span className="joke__id-title">ID:</span>
                  <a
                    href={joke.url}
                    className="joke__id-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {joke.id}
                  </a>
                </div>
                <div className="joke__value">{joke.value}</div>
                <div className="joke__footer">
                  <div className="joke__date">
                    {`Last update: ${passedHours.toFixed()} hours ago`}
                  </div>
                  <div className="joke__categories">
                    {joke.categories.length ? joke.categories : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
