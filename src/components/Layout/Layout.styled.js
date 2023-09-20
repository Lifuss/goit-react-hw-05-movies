import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledList = styled.ul`
  background-color: green;
  padding: 15px 0 15px 60px;
  margin: 0;
  display: flex;
  gap: 30px;
  list-style: none;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 1.3rem;

  &.active {
    border-bottom: 3px solid lightblue;
  }
`;

export const StyledHr = styled.hr`
  margin: 0 0 10px;
`;
