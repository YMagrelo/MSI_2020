/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../App.scss';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  getRandomJokeThunk,
  getJokeFromCategoriesThunk,
} from '../redux/reducer';
import RandomJoke from './RandomJoke';
import './Randomizer.scss';
import Radio from './Radio';
import SearchResult from './SearchResult';

const StyledBurger = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ open }) => (!open ? '#fff' : '#000')};

`;

const StyledRandomizer = styled.div`
  background: ${({ open }) => (!open ? '#fff' : '#000')};
  opacity: ${({ open }) => (!open ? '1' : '0.3')};
`;

const Randomizer = (props) => {
  const {
    getRandomJoke,
    randomJoke,
    setJokeFromCategories,
    searchJokes,
  } = props;

  const [open, setOpen] = useState(false);

  return (
    <StyledRandomizer
      className="randomizer"
      open={open}
    >
      <h1 className="randomizer__heading">Chuck Norris facts</h1>
      <StyledBurger
        className="randomizer__burger"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <Burger />
      </StyledBurger>
      <p className="randomizer__title">Hey!</p>
      <p className="randomizer__underTitle">
          Let’s try to find a joke for you:
      </p>
      <Radio
        getRandomJoke={getRandomJoke}
        setJokeFromCategories={setJokeFromCategories}
      />
      {randomJoke === null
        ? null
        : (
          <RandomJoke />
        )}
      {searchJokes.length
        ? (
          <SearchResult />
        )
        : null}
    </StyledRandomizer>
  );
};

const mapStateToProps = state => ({
  randomJoke: state.randomJoke,
  searchJokes: state.searchJokes,
});

const mapDispatchToProps = dispatch => ({
  getRandomJoke: () => dispatch(getRandomJokeThunk()),
  setJokeFromCategories: category => dispatch(
    getJokeFromCategoriesThunk(category),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Randomizer);

const Burger = () => (
  <div className="burger">
    <div
      className="burger__outter"
    >
      <div className="burger__inner" />
      <div className="burger__inner" />
    </div>
    <div className="burger__title">Favourite</div>
  </div>
);
