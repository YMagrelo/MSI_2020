/* eslint-disable react/prop-types */
import React from 'react';
import './Favorite.scss';
import { connect } from 'react-redux';
import { deleteFavoriteJoke } from '../redux/reducer';
import favorite from '../assets/icon/heart.svg';
import message from '../assets/icon/message.svg';
import { getPassedHours } from '../constants';

const Favorite = (props) => {
  const { favoriteJokes, deleteFavorite } = props;

  return (
    <div className="favorite">
      <h2 className="favorite__title">Favourite</h2>
      {favoriteJokes.map((joke) => {
        const previousDate = new Date(joke.updated_at);
        const nextDate = new Date();
        const passedHours = getPassedHours(previousDate, nextDate);
        const handleDeleteFavorite = () => {
          deleteFavorite(joke.id);
        };

        return (
          <div className="favorite__content content-favourite" key={joke.id}>
            <div className="content-favourite__addToFavorite-wrapper">
              <button
                type="button"
                className="content-favourite__addToFavorite"
                onClick={handleDeleteFavorite}
              >
                <img src={favorite} alt="remove from favorites" />
              </button>
            </div>
            <div className="content-favourite__item-container">
              <div className="content-favourite__textIcon-container">
                <img
                  src={message}
                  alt="joke item icon"
                  className="content-favourite__textIcon"
                />
              </div>
              <div className="content-favourite__joke joke">
                <div className="joke__id-wrapper">
                  <span className="joke__id-title">ID:</span>
                  <a
                    href={joke.url}
                    className="joke__id-link"
                  >
                    {joke.id}
                  </a>
                </div>
                <div className="joke__value">{joke.value}</div>
                <div className="joke__footer">
                  <div className="joke__date">
                    {`Last update: ${passedHours.toFixed()} hours ago`}
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
  favoriteJokes: state.favoriteJokes,
});

const mapDispatchToProps = dispatch => ({
  deleteFavorite: id => dispatch(deleteFavoriteJoke(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
