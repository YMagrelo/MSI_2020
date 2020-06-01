/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './Radio.scss';
import './Randomizer.scss';
import { connect } from 'react-redux';
import {
  getCategoriesThunk,
  getJokeSearchThunk,
  clearSearchJoke,
} from '../redux/reducer';

const Radio = (props) => {
  const {
    categories,
    setCategories,
    getRandomJoke,
    setJokeFromCategories,
    setSearchJoke,
    clearSearch,
  } = props;
  const [selected, setSelected] = useState('random');
  const [query, setQuery] = useState('');
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    setCategories();
  });

  const handleInput = (event) => {
    const { value } = event.target;

    setInputError(true);
    setQuery(value);
    setSearchJoke(query);

    if (query.length <= 3) {
      clearSearch();
    }

    if (query.length >= 3) {
      setInputError(false);
    }
  };

  const handleSelected = (event) => {
    const { value } = event.target;

    setSelected(value);
  };

  const handleCategories = (event) => {
    const value = event.target.innerHTML;

    setJokeFromCategories(value);
  };

  const handleGetJoke = () => {
    return getRandomJoke();
  };

  return (
    <>
      <form className="radio__list">
        <div className="radio__item">
          <label>
            <input
              type="radio"
              value="random"
              checked={selected === 'random'}
              onChange={handleSelected}
            />
            <span className="radio__text">Random</span>
          </label>
        </div>
        <div className="radio__item">
          <label>
            <input
              type="radio"
              value="categories"
              checked={selected === 'categories'}
              onChange={handleSelected}
            />
            <span className="radio__text">From categories</span>
          </label>
          {selected === 'categories' ? (
            <div className="categories__list">
              {categories.map(cat => (
                <button
                  type="button"
                  className="categories__item"
                  onClick={handleCategories}
                  key={cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div className="radio__item">
          <label>
            <input
              type="radio"
              value="search"
              checked={selected === 'search'}
              onChange={handleSelected}
            />
            <span className="radio__text">Search</span>
          </label>
          {selected === 'search'
            ? (
              <div className="radio__form">
                <input
                  className="radio__input"
                  placeholder="Free text search..."
                  value={query}
                  onChange={handleInput}
                />
                {inputError
                  ? (
                    <span className="radio__input-error">
                      input must be more than 3 characters
                    </span>
                  )
                  : null}
              </div>
            )
            : null}
        </div>
      </form>
      <button
        type="button"
        className="radio__button"
        onClick={handleGetJoke}
      >
  Get a joke
      </button>
    </>
  );
};

const mapStateToProps = state => ({
  categories: state.categories,
  searchJokes: state.searchJokes,
});

const mapDispatchToProps = dispatch => ({
  setCategories: () => dispatch(getCategoriesThunk()),
  setSearchJoke: query => dispatch(getJokeSearchThunk(query)),
  clearSearch: () => dispatch(clearSearchJoke()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Radio);
