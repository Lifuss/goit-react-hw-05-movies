import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageNotFound = () => {
  return (
    <StyledBox>
      <Flex>
        <StyledTitle>Page not found</StyledTitle>
        <StyledLink to="/">Back to home</StyledLink>
      </Flex>
    </StyledBox>
  );
};

export const StyledBox = styled.div`
  display: grid;
  min-height: 100vh;
  place-content: center;
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledTitle = styled.h1`
  font-size: 4rem;
`;

export const StyledLink = styled(Link)`
  background-color: #939393;
  color: white;

  font-size: 2rem;
  text-decoration: none;
  border: 1px solid #6aece1;

  padding: 0.25rem;
  border-radius: 0.55rem;

  &:hover,
  :focus {
    background-color: #424242;
    color: #ffffff;
  }
`;

export default PageNotFound;
