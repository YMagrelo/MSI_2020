import { getJoke } from '../api';

const SET_RANDOM_JOKE = 'SET_RANDOM_JOKE';
const SET_FAVORITE_JOKE = 'SET_FAVORITE_JOKE';

const initialState = {
  randomJoke: null,
  favoriteJokes: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANDOM_JOKE:
      return {
        ...state,
        randomJoke: action.payload,
      };

    case SET_FAVORITE_JOKE:
      return {
        ...state,
        favoriteJokes: [...state.favoriteJokes, action.payload],
      };

    default:
      return state;
  }
};

const setRandomJoke = payload => ({
  type: SET_RANDOM_JOKE,
  payload,
});

export const setFavoriteJoke = payload => ({
  type: SET_FAVORITE_JOKE,
  payload,
});

export const getRandomJokeThunk = () => (dispatch) => {
  getJoke()
    .then((data) => {
      dispatch(setRandomJoke(data));
    });
};
