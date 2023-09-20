import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledList = styled.ul`
  background-color: #38d3c7;
  padding: 30px 0 30px 60px;
  margin: 0;
  display: flex;
  gap: 30px;
  list-style: none;
  justify-content: start;
  align-items: center;
  border-end-end-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom: 3px solid #6aece1;
  box-shadow: 2px 2px 5px #38d3c7;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 2.5rem;
  font-weight: 550;
  font-family: 'Croissant One';

  &.active {
    border-bottom: 4px solid #41eadc;
    box-shadow: 0 4px 2px -2px #41eadc;
  }
`;

export const StyledHr = styled.hr`
  margin: 0 0 10px;
`;
