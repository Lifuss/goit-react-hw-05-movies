import { useFetch } from 'hooks/useFetch';
import React from 'react';
import { getAllMovies } from 'services/api';
import { StyledH2, StyledHomePageList, StyledLink } from './Homepage.styled';

const Homepage = () => {
  const [data] = useFetch(getAllMovies);

  return (
    <>
      <StyledH2>Trending movies</StyledH2>
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
