import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const StyledHomePageList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledItem = styled.li`
  border: 1px solid white;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: inherit;
  &:hover {
    color: gray;
  }
`;
