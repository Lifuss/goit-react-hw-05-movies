import styled from 'styled-components';

export const StyledMovieList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 1rem;
`;
export const StyledLabel = styled.h2`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledInput = styled.input`
  width: 240px;
  height: 30px;
  border-color: white;
  border-radius: 10px;
  background-color: #424242;
  color: white;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 80px;
  text-decoration: none;
  color: #99ff99;
  background-color: #333333;
  border: 1px solid black;
  border-radius: 10%;
  border-color: white;
  margin-bottom: 1rem;

  &:hover,
  :focus {
    background-color: #424242;
    color: #ffffff;
  }
`;
