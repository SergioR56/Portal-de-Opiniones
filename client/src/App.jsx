import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import PostSearchPage from './pages/PostSearchPage/PostSearchPage';
import NotFounPage from './pages/NotFoundPage/NotFoundPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import UpdatePage from './pages/UpdatePage/UpdatePage';
import PostCreatePage from './pages/PostCreatePage/PostCreatePage';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<PostSearchPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/update' element={<UpdatePage />} />
        <Route path='/message' element={<PostCreatePage />} />
        <Route path='*' element={<NotFounPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
