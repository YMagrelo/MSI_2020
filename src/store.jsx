import { createStore } from 'redux';

//  action types
const TYPE_ADD = 'add';
const TYPE_TAKE = 'take';

// action creators
export const add = value => ({
  type: TYPE_ADD,
  value,
});

export const take = value => ({
  type: TYPE_TAKE,
  value,
});

// selectors
export const getAmount = state => state.amount;

// create reducer
const reducer = (state, action) => {
  switch (action.type) {
    case TYPE_ADD:
      return {
        ...state,
        amount: state.amount + action.value,
      };

    case TYPE_TAKE:
      return {
        ...state,
        amount: state.amount - action.value,
      };

    default:
      return state;
  }
};

// create store

export const store = createStore(reducer, { amount: 100 });
