import React from 'react';
import './Favorite.scss';
import { connect } from 'react-redux';
import { setFavoriteJoke } from '../redux/reducer';

const Favorite = (props) => {

  return (
    <div className="favorite">
      <h2 className="favorite__title">Favorite</h2>
    </div>
  );
};

const mapStateToProps = state => ({
  favoriteJokes: state.favoriteJokes,
});

const mapDispatchToProps = dispatch => ({
  setFavoriteJoke: () => dispatch(setFavoriteJoke()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
