import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>

      <hr />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </>
  );
};

const OutletWrapper = styled.div`
  min-height: 100vh;
  padding: 10px 45px;
`;

export default Layout;
