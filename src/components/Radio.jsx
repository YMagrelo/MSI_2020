/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './Radio.scss';
import { connect } from 'react-redux';
import { getCategoriesThunk } from '../redux/reducer';

const Radio = (props) => {
  const {
    categories,
    setCategories,
    getRandomJoke,
    getJokeFromCategories,
  } = props;
  const [selected, setSelected] = useState('random');
  const [choosenCategories, setChoosenCategories] = useState('');

  useEffect(() => {
    setCategories();
  });

  const handleSelected = (event) => {
    const { value } = event.target;

    setSelected(value);
    setChoosenCategories('');
  };

  const handleCategories = (event) => {
    const value = event.target.innerHTML;

    setChoosenCategories(value);
  };

  const handleGetJoke = () => {
    if (choosenCategories === '') {
      return getRandomJoke();
    }

    return getJokeFromCategories(choosenCategories);
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
});

const mapDispatchToProps = dispatch => ({
  setCategories: () => dispatch(getCategoriesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Radio);
