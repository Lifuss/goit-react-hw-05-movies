import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Homepage from 'pages/Homepage';
import Movies from 'pages/Movies';
import SingleMoviePage from 'pages/SingleMoviePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="movies" element={<Movies />} />

        <Route path="movies/:id" element={<SingleMoviePage />} />
      </Route>
    </Routes>
  );
};

export default App;
