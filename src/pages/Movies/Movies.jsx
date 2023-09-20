import { useFetch } from 'hooks/useFetch';
import { StyledLink } from 'pages/Homepage/Homepage.styled';
import { useForm } from 'react-hook-form';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/api';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledMovieList,
} from './Movies.styled';

const Movies = () => {
  const { register, handleSubmit } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();

  const submit = data => {
    setSearchParams(data.queryStr && { query: data.queryStr.trim() });
  };

  const query = searchParams.get('query') || '';

  const [{ results }] = useFetch(getMovieByName, query);

  const location = useLocation();

  return (
    <>
      <StyledLabel>Search movie by name:</StyledLabel>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <StyledInput {...register('queryStr')} type="text" />
        <StyledButton>Search</StyledButton>
      </StyledForm>
      {results?.length ? (
        <StyledMovieList>
          {results?.map(({ id, title }) => (
            <li key={id}>
              <StyledLink state={{ from: location }} to={`${id.toString()}`}>
                {title}
              </StyledLink>
            </li>
          ))}
        </StyledMovieList>
      ) : null}
      {!results?.length && query ? <p>Nothing found</p> : null}
    </>
  );
};

export default Movies;
