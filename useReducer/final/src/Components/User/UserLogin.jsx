import { useState, useContext, useReducer } from 'react';
import AuthContext from '../auth_context';

const usernameReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: action.value.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }

  return { value: '', isValid: false };
};

const UserLogin = () => {
  const [password, setPassword] = useState('');
  const context = useContext(AuthContext);

  const [usernameState, dispatchUserName] = useReducer(usernameReducer, {
    value: '',
    isValid: null,
  });

  const onChangeUsernameHandler = (e) => {
    const value = e.target.value;
    dispatchUserName({ type: 'USER_INPUT', value: value });
  };

  const ValidateUserNameHandler = (e) => {
    dispatchUserName({ type: 'INPUT_BLUR' });
  };

  const onChangePasswordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const onLogin = (e) => {
    e.preventDefault();

    if (usernameState.isValid) {
      context.onLogin({
        userName: usernameState.value,
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
            value={usernameState.value}
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
