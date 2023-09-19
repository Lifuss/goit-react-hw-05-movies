import { useFetch } from 'hooks/useFetch';
import React from 'react';
import { Link } from 'react-router-dom';
import { getAllMovies } from 'services/api';

const Homepage = () => {
  const [data, setDate] = useFetch(getAllMovies);
  console.log(data);

  return (
    <ul>
      {data.map(({ id, original_title }) => (
        <li key={id}>
          <Link to={`movies/${id.toString()}`}>{original_title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Homepage;
