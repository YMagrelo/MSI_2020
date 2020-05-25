import { getJoke, getCategories } from '../api';

const SET_RANDOM_JOKE = 'SET_RANDOM_JOKE';
const SET_FAVORITE_JOKE = 'SET_FAVORITE_JOKE';
const DELETE_FROM_FAVORITE = 'DELETE_FROM_FAVORITE';
const SET_CATEGORIES = 'SET_CATEGORIES';

const initialState = {
  randomJoke: null,
  favoriteJokes: [],
  categories: [],
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

    case DELETE_FROM_FAVORITE:
      return {
        ...state,
        favoriteJokes: state.favoriteJokes
          .filter(joke => joke.id !== action.payload),
      };

    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};

const setRandomJoke = payload => ({
  type: SET_RANDOM_JOKE,
  payload,
});

const setCategories = payload => ({
  type: SET_CATEGORIES,
  payload,
});

export const setFavoriteJoke = payload => ({
  type: SET_FAVORITE_JOKE,
  payload,
});

export const deleteFavoriteJoke = payload => ({
  type: DELETE_FROM_FAVORITE,
  payload,
});

export const getRandomJokeThunk = () => (dispatch) => {
  getJoke()
    .then((data) => {
      dispatch(setRandomJoke(data));
    });
};

export const getCategoriesThunk = () => (dispatch) => {
  getCategories()
    .then((data) => {
      dispatch(setCategories(data));
    });
};
