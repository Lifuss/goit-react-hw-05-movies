import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import {StyledLink, StyledList } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </StyledList>

      <Suspense fallback={<h2>Loading...</h2>}>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </Suspense>
    </>
  );
};

const OutletWrapper = styled.div`
  min-height: 100vh;
  padding: 10px 45px;
`;

export default Layout;
