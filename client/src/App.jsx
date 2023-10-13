import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useError } from './hooks/useError';

import PostSearchPage from './pages/PostSearchPage/PostSearchPage';
import NotFounPage from './pages/NotFoundPage/NotFoundPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import UpdatePage from './pages/UpdatePage/UpdatePage';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

const App = () => {
  const { errMsg, setErrMsg } = useError();
  return (
    <div className='app'>
      <Header />
      <ErrorMessage errMsg={errMsg} setErrMsg={setErrMsg} />
      <Routes>
        <Route path='/' element={<PostSearchPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/update' element={<UpdatePage />} />
        <Route path='*' element={<NotFounPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
