import { useState, useRef } from 'react';

const RegisterUser = () => {
  const [buttonDisable, setButtonDisabled] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const userNameInputRef = useRef();
  const emailInputRef = useRef();

  const onChangePasswordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
    setButtonDisabled(value !== confirmPassword);
  };

  const onChangeConfirmPasswordHandler = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setButtonDisabled(value !== password);
  };

  const onSave = (e) => {
    e.preventDefault();

    const userName = userNameInputRef.current.value;
    const email = emailInputRef.current.value;

    // Obs! validera userName och email innan vi sparar till databasen...

    const body = { userName, email };

    fetch('http://localhost:3010/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <section
      data-testid='add-user-component'
      className='container'
    >
      <h1 className='page-title'>Användar registrering</h1>
      <form onSubmit={onSave}>
        <div className='form-control'>
          <label htmlFor='username'>User Name</label>
          <input
            id='username'
            placeholder='username'
            ref={userNameInputRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            placeholder='Email'
            ref={emailInputRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            placeholder='Password'
            type='password'
            value={password}
            onChange={onChangePasswordHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='confirmpassword'>Confirm Password</label>
          <input
            id='confirmpassword'
            placeholder='Confirm Password'
            type='password'
            value={confirmPassword}
            onChange={onChangeConfirmPasswordHandler}
          />
        </div>
        <div className='form-control'>
          <button
            className='btn btn-primary'
            disabled={buttonDisable}
          >
            Register User
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterUser;
