import { Fragment, useState, useEffect } from 'react';
import LoginUser from './components/accounts/LoginUser';
import Navbar from './components/appHeader/Navbar';
import Home from './components/home/Home';
import './site.css';

const App = () => {
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userloggedIn = localStorage.getItem('isLoggedIn');

    if (userloggedIn === '1') {
      setIsLoggedIn(true);
      setUserName(localStorage.getItem('userName'));
    }
  }, []);

  const onLogoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
  };

  const onLoginHandler = (user) => {
    setIsLoggedIn(true);
    setUserName(user.userName);
    localStorage.setItem('isLoggedIn', 1);
    localStorage.setItem('userName', user.userName);
  };

  return (
    <Fragment>
      <Navbar
        isLoggedIn={isLoggedIn}
        logOut={onLogoutHandler}
        userName={userName}
      />
      <main>
        <section className='container'>
          <h2 className='title'>React Context API</h2>
          {!isLoggedIn && <LoginUser onLogin={onLoginHandler} />}
          {isLoggedIn && <Home onLogout={onLogoutHandler} />}
        </section>
      </main>
    </Fragment>
  );
};

export default App;
