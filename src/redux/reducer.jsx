import {
  getJoke,
  getCategories,
  getJokeFromCategories,
  getJokeSearch,
} from '../api';

const SET_RANDOM_JOKE = 'SET_RANDOM_JOKE';
const SET_FAVORITE_JOKE = 'SET_FAVORITE_JOKE';
const DELETE_FROM_FAVORITE = 'DELETE_FROM_FAVORITE';
const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_SEARCH_JOKES = 'SET_SEARCH_JOKES';
const CLEAR_SEARCH = 'CLEAR_SEARCH';

const initialState = {
  randomJoke: null,
  favoriteJokes: [],
  categories: [],
  searchJokes: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANDOM_JOKE:
      return {
        ...state,
        randomJoke: action.payload,
      };

    case SET_SEARCH_JOKES:
      return {
        ...state,
        searchJokes: action.payload,
      };

    case CLEAR_SEARCH:
      return {
        ...state,
        searchJokes: [],
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

const setSearchJoke = payload => ({
  type: SET_SEARCH_JOKES,
  payload,
});

export const clearSearchJoke = () => ({
  type: CLEAR_SEARCH,
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

export const getJokeFromCategoriesThunk = category => (dispatch) => {
  getJokeFromCategories(category)
    .then((data) => {
      dispatch(setRandomJoke(data));
    });
};

export const getJokeSearchThunk = query => (dispatch) => {
  getJokeSearch(query)
    .then((data) => {
      if (data.status !== 400) {
        dispatch(setSearchJoke(data.result));
      }
    });
};
