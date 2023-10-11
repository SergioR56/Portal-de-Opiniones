import  { useState } from 'react';
import PropTypes from 'prop-types';

const RegisterForm = ({ authRegister }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            authRegister(username, email, password);
        }}>
            <label htmlFor="username">Usuario:</label>
            <input
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <label htmlFor="email">Email:</label>
            <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label htmlFor="pass">Contraseña:</label>
            <input
                type='password'
                id='pass'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6} 
            />
            <label htmlFor="repeatedPass">Repetir contraseña:</label>
            <input
                type='password'
                id='repeatedPass'
                value={repeatedPassword}
                onChange={(e) => setRepeatedPassword(e.target.value)}
                minLength={6} 
                required
            />
            <button>Registrarse</button>
        </form>
    );
};

RegisterForm.propTypes = {
    authRegister: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default RegisterForm;