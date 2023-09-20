import { useFetch } from 'hooks/useFetch';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';
import { StyledItem, StyledUl } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [data] = useFetch(getReviews, id);

  return (
    <StyledUl>
      {data.results?.map(({ author, content, id }) => (
        <StyledItem key={id}>
          <h2>{author}</h2>
          <p>{content}</p>
        </StyledItem>
      ))}
    </StyledUl>
  );
};

export default Reviews;
