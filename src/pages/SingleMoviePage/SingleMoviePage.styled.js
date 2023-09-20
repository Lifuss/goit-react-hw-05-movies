import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledImg = styled.img`
  display: block;
`;

export const StyledBox = styled(Flex)`
  padding: 1rem;
`;

export const StyledTextBox = styled.div`
  width: 1300px;
`;
export const StyledSubTitle = styled.h3`
  font-size: 25px;
  margin-bottom: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  width: 100px;
  height: 50px;
  color: white;
  background-color: #939393;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 250ms linear;
  &.active {
    background-color: #424242;
    color: #fff;
  }
`;

export const StyledGoBackLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 80px;
  text-decoration: none;
  color: white;
  background-color: #939393;
  border: 1px solid #6aece1;
  border-radius: 10%;
  margin-bottom: 1rem;

  &:hover,
  :focus {
    background-color: #424242;
    color: #ffffff;
  }
`;
