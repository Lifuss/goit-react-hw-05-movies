import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

import { lazy } from 'react';

const Homepage = lazy(() => import('pages/Homepage/Homepage'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const SingleMoviePage = lazy(() =>
  import('pages/SingleMoviePage/SingleMoviePage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="movies" element={<Movies />} />

        <Route path="movies/:id" element={<SingleMoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
