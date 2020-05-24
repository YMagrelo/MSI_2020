import { getJoke } from '../api';

const SET_RANDOM_JOKE = 'SET_RANDOM_JOKE';

const initialState = {
  randomJoke: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANDOM_JOKE:
      return {
        ...state,
        randomJoke: action.payload,
      };

    default:
      return state;
  }
};

const setRandomJoke = payload => ({
  type: SET_RANDOM_JOKE,
  payload,
});

export const getRandomJokeThunk = () => (dispatch) => {
  getJoke()
    .then((data) => {
      dispatch(setRandomJoke(data));
    });
};
