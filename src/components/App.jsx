import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
// import Homepage from 'pages/Homepage/Homepage';
// import Movies from 'pages/Movies/Movies';
// import SingleMoviePage from 'pages/SingleMoviePage/SingleMoviePage';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
import { lazy } from 'react';

const Homepage = lazy(() => import('pages/Homepage/Homepage'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const SingleMoviePage = lazy(() =>
  import('pages/SingleMoviePage/SingleMoviePage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
    </Routes>
  );
};

export default App;
