import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComponent from '../commons/NavCompoent';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import SearchPage from '../pages/SearchPage';
import DetailPage from '../pages/DetailPage';

const PublicRouter = () => {
  return (
    <Router>
      <NavComponent />
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path='main' element={<MainPage />} />
        <Route path=':movieId' element={<DetailPage />} />
        <Route path='search' element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default PublicRouter;
