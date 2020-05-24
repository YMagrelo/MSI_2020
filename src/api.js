const BASE_URL = 'https://api.chucknorris.io/jokes/';

export const getJoke = () => {
  return fetch(`${BASE_URL}random`)
    .then(response => response.json());
};
