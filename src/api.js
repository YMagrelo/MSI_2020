const BASE_URL = 'https://api.chucknorris.io/jokes/';

export const getJoke = () => fetch(`${BASE_URL}random`)
  .then(response => response.json());

export const getJokeFromCategories = category => fetch(
  `${BASE_URL}random?category=${category}`,
)
  .then(response => response.json());

export const getJokeSearch = query => fetch(
  `${BASE_URL}search?query=${query}`,
)
  .then(response => response.json());

export const getCategories = () => fetch(`${BASE_URL}categories`)
  .then(response => response.json());
