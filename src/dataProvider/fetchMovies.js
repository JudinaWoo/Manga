const API_URL = "//www.omdbapi.com";
const API_KEY = "f17611b7";
const resultToJson = (result) => result.json();
export default function fetchMovies() {
  return fetch(`${API_URL}/?apikey=${API_KEY}&s=abc&page=1`)
    .then(resultToJson)
    .then((data) => data.Search);
}
