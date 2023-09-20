import { useFetch } from 'hooks/useFetch';
import React, { Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';
import {
  Flex,
  StyledBox,
  StyledGoBackLink,
  StyledImg,
  StyledNavLink,
} from './SingleMoviePage.styled';

const SingleMoviePage = () => {
  const { id } = useParams();
  const [data] = useFetch(getMovieById, id);
  const { title, poster_path, vote_average, overview, genres } = data;

  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  return (
    <>
      <StyledGoBackLink to={goBackRef.current}>Go back</StyledGoBackLink>
      <Flex>
        <StyledImg
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt=""
        />
        <div>
          <h2>{title}</h2>
          <p>User score {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres?.map(el => el.name).join(', ')}</p>
        </div>
      </Flex>
      <hr />
      <StyledBox>
        <StyledNavLink to="cast">Cast</StyledNavLink>
        <StyledNavLink to="reviews">Reviews</StyledNavLink>
      </StyledBox>
      <hr />
      <div>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default SingleMoviePage;
