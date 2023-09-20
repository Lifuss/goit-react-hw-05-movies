import styled from 'styled-components';

export const StyledList = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
justify-content:space-between;
row-gap: 30px;
padding: 0;
`;

export const StyledItem = styled.li`
padding: 15px;
width: 185px;
box-shadow: 2px 2px 2px rgba(255,255,255, 0.2);
border: 1px solid rgba(255,255,255, 0.2);
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
justify-content: space-around;
`;

export const StyledName = styled.h2`
padding: 0;
margin: 0;
  
`;