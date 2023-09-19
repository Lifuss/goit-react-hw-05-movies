import { useFetch } from 'hooks/useFetch';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

const SingleMoviePage = () => {
  const { id } = useParams();
  const [data, setData] = useFetch(getMovieById, id);
  const { title, poster_path, vote_average, overview, genres } = data;

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="" />{' '}
      <div>
        <h2>{title}</h2>
        <p>User score {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(el => el.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default SingleMoviePage;
