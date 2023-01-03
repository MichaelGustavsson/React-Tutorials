import { useState } from 'react';
import Card from '../ui/Card';
import OutlinedButton from '../ui/OutlinedButton';

import classes from './LoginUser.module.css';

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onLoginHandler = (e) => {
    e.preventDefault();

    const user = {
      userName,
      password,
    };

    props.onLogin(user);
    setUserName('');
    setPassword('');
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
