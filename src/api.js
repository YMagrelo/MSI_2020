const BASE_URL = 'https://api.chucknorris.io/jokes/';

export const getJoke = () => fetch(`${BASE_URL}random`)
  .then(response => response.json());

export const getCategories = () => fetch(`${BASE_URL}categories`)
  .then(response => response.json());
