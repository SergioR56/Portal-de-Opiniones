import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import PostSearch from "./components/PostSearch/PostSearch"
// -------------------------------------------- //
import { Route, Routes } from 'react-router-dom';
import { useError } from './hooks/useError';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import PostSearchPage from './pages/PostSearchPage/PostSearchPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PostCreatePage from './pages/PostCreatePage/PostCreatePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


const App = () => {
  const { errMsg, setErrMsg } = useError();
  return (
    <div className='app'>
            <Header />
            <ErrorMessage errMsg={errMsg} setErrMsg={setErrMsg} />
            <Routes>
            <Route path='/' element={<PostSearchPage />}></Route>
        <Route path='/PostSearch' element={<PostSearch />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/message' element={<PostCreatePage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
            
            <Footer />
    </div>
  )
}

export default App;