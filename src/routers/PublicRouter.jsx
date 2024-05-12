import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComponent from '../commons/NavCompoent';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import SerchPage from '../pages/SerchPage';

const PublicRouter = () => {
  return (
    <Router>
      <NavComponent />
      <Routes>
        <Route path='/' element={<NavComponent />} />
        <Route index element={<LoginPage />} />
        <Route path='Main' element={<MainPage />} />
        <Route path='Serch' element={<SerchPage />} />
      </Routes>
    </Router>
  );
};

export default PublicRouter;
