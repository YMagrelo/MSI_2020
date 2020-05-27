/* eslint-disable react/prop-types */
import React from 'react';
import '../App.scss';
import './Randomizer.scss';
import './SearchResult.scss';
import { connect } from 'react-redux';
import { getPassedHours } from '../utilities';
import favorite from '../assets/icon/favorite.svg';
import activeFavorite from '../assets/icon/heart.svg';
import message from '../assets/icon/message.svg';
import {
  deleteFavoriteJoke,
  setFavoriteJoke,
} from '../redux/reducer';

const SearchResult = (props) => {
  const { searchJokes, setFavorite, favoriteJokes, deleteFavorite } = props;
  const handleAddToFavorite = (id) => {
    const searchItem = searchJokes.find(item => item.id === id);

    setFavorite(searchItem);
  };

  const handleDeleteFavorite = (id) => {
    deleteFavorite(id);
  };

  return (
    <div>
      {searchJokes.map((joke) => {
        const previousDate = new Date(joke.updated_at);
        const nextDate = new Date();
        const passedHours = getPassedHours(previousDate, nextDate);
        const { id } = joke;

        return (
          <div className="randomizer__content search" key={joke.id}>
            <div className="search__addToFavorite-wrapper">
              {!favoriteJokes.includes(joke) ? (
                <button
                  type="button"
                  className="content__addToFavorite"
                  onClick={() => handleAddToFavorite(id)}
                >
                  <img src={favorite} alt="add to favorite" />
                </button>
              ) : (
                <button
                  type="button"
                  className="content__addToFavorite"
                  onClick={() => handleDeleteFavorite(id)}
                >
                  <img src={activeFavorite} alt="remove from favorite" />
                </button>
              )}
            </div>
            <div className="search__item-container">
              <div className="search__textIcon-wrapper">
                <img
                  src={message}
                  alt="joke item icon"
                  className="search__textIcon"
                />
              </div>
              <div className="search__joke joke">
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

const mapStateToProps = state => ({
  searchJokes: state.searchJokes,
  favoriteJokes: state.favoriteJokes,
});

const mapDispatchToProps = dispatch => ({
  deleteFavorite: id => dispatch(deleteFavoriteJoke(id)),
  setFavorite: payload => dispatch(setFavoriteJoke(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
