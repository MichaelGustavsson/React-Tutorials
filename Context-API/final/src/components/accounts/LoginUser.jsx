import { useState, useContext } from 'react';
import AuthContext from '../store/auth-context';
import Card from '../ui/Card';
import OutlinedButton from '../ui/OutlinedButton';

import classes from './LoginUser.module.css';

const AddUser = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const context = useContext(AuthContext);
  const onLoginHandler = (e) => {
    e.preventDefault();

    context.onLogin({
      userName,
      password,
    });
  };

  const onUserNameChangedHandler = (e) => {
    setUserName(e.target.value);
  };

  const onPasswordChangedHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={onLoginHandler}>
        <label htmlFor='userName'>Användarnamn</label>
        <input
          value={userName}
          onChange={onUserNameChangedHandler}
          id='userName'
          type='text'
        />
        <label htmlFor='password'>Lösenord</label>
        <input
          value={password}
          onChange={onPasswordChangedHandler}
          type='password'
          id='password'
        />
        <OutlinedButton type='submit'>Logga In</OutlinedButton>
      </form>
    </Card>
  );
};

export default AddUser;
