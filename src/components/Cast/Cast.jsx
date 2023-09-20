import { useFetch } from 'hooks/useFetch';
import { StyledImg } from 'pages/SingleMoviePage/SingleMoviePage.styled';
import { useParams } from 'react-router-dom';
import { getCastInfo } from 'services/api';
import { StyledItem, StyledList, StyledName } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [data] = useFetch(getCastInfo, id);

  const imgNotFound = 'https://demofree.sirv.com/nope-not-here.jpg';

  return (
    <StyledList>
      {data.cast?.map(({ profile_path, id, name }) => (
        <StyledItem key={id}>
          <StyledName> {name}</StyledName>
          <StyledImg
            src={`https://image.tmdb.org/t/p/w185${profile_path}`}
            width="185"
            alt={name}
            onError={e => {
              e.currentTarget.src = imgNotFound;
            }}
          />
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default Cast;
