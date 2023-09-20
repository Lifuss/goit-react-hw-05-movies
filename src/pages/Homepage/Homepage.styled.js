import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHomePageList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
`;

export const StyledText = styled.p`
  margin: 10px;
  font-size: 20px;
`;

export const StyledH2 = styled.h2`
  font-size: 2.2rem;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const StyledItem = styled.li`
  border: 1px solid white;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 500;
  color: inherit;
  &:hover {
    color: gray;
  }
`;
