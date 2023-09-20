import axios from 'axios';

axios.defaults.headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmY3Yzk1ODEzYzhjNGMxOTc0NGY1NTM0OTNiNThiZiIsInN1YiI6IjY1MDk5YTRhZmEyN2Y0MDE0ZWIyZjM2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WcXhs-LvYktYBLDy0cKPXkwiju7HU8RwqWXhXW2L-ws',
  accept: 'application/json',
};
axios.defaults.params = {
  language: 'en-US',
};

export const getAllMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day'
  );
  return data.results;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}`);
  return data;
};
export const getCastInfo = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`
  );
  return data;
};

export const getReviews = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`
  );
  return data;
};

export const getMovieByName = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}`
  );
  return data;
};
