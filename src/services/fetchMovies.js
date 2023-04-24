import axios from 'axios';

const searchParams = new URLSearchParams({
  api_key: '6de70ce1fb05b0561cf5930d79d34091',
  language: 'en-US',
  include_adult: false,
});

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/week${searchParams}`);
  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}?${searchParams}`);
  return data;
};

export const getMovieByName = async name => {
  const { data } = await axios.get(
    `/search/movie?${searchParams}&query=${name}`
  );
  return data.results;
};

export const getMovieCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?${searchParams}`);
  return data.cast;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?${searchParams}`);
  return data.results;
};
