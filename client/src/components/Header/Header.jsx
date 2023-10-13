import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import './Header.css';
import PostSearchForm from '../../forms/PostSearchForm/PostSearchForm';
import { usePosts } from '../../hooks/usePosts';

const Header = () => {
  const { authUser, authLogout } = useAuth();
  const {
    setSearchParams,
    loading,
  } = usePosts();

  return (
    <header>
      <h1>
        <NavLink to='/'>Opinodromo</NavLink>
      </h1>
      <nav>
        <PostSearchForm setSearchParams={setSearchParams} loading={loading} />
        <ul>
          {authUser && <span>@{authUser.username}</span>}

          {authUser && (
            <li>
              <NavLink to='/update'>Actualizar perfil</NavLink>
            </li>
          )}
          {authUser && (
            <button onClick={() => authLogout()}>
              <NavLink to='/logout'>Cerrar sesion</NavLink>
            </button>
          )}
          {!authUser && (
            <li>
              <NavLink to='/register'>Registro</NavLink>
            </li>
          )}
          {!authUser && (
            <li>
              <NavLink to='/login'>
                Inicio de sesion
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
