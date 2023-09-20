import { useFetch } from 'hooks/useFetch';
import React from 'react';
import { getAllMovies } from 'services/api';
import { StyledHomePageList, StyledLink } from './Homepage.styled';

const Homepage = () => {
  const [data] = useFetch(getAllMovies);

  return (
    <>
      <h2>Trending movies</h2>
      <StyledHomePageList>
        {data.map(({ id, original_title }) => (
          <li key={id}>
            <StyledLink to={`movies/${id.toString()}`}>
              {original_title}
            </StyledLink>
          </li>
        ))}
      </StyledHomePageList>
    </>
  );
};

export default Homepage;
