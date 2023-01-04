import { useState, useContext } from 'react';
import AuthContext from '../auth_context';

const UserLogin = () => {
  const [userName, setUserName] = useState('');
  const [userNameIsValid, setUserNameIsValid] = useState(false);
  const [password, setPassword] = useState('');
  const context = useContext(AuthContext);

  const onChangeUsernameHandler = (e) => {
    const value = e.target.value;
    setUserName(value);
  };

  const ValidateUserNameHandler = (e) => {
    if (e.target.value.includes('@')) {
      setUserNameIsValid(true);
    } else {
      setUserNameIsValid(false);
    }
  };

  const onChangePasswordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const onLogin = (e) => {
    e.preventDefault();

    if (userNameIsValid) {
      context.onLogin({
        userName,
        password,
      });
    }
  };

  return (
    <section className='container'>
      <h1 className='page-title'>Login</h1>
      <form onSubmit={onLogin}>
        <div className='form-control'>
          <label htmlFor='username'>Username/Email</label>
          <input
            id='username'
            placeholder='username'
            value={userName}
            onChange={onChangeUsernameHandler}
            onBlur={ValidateUserNameHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='password'
            value={password}
            onChange={onChangePasswordHandler}
          />
        </div>
        <div className='form-control'>
          <input
            className='btn btn-primary'
            type='submit'
            value='Login'
          />
        </div>
      </form>
    </section>
  );
};

export default UserLogin;
