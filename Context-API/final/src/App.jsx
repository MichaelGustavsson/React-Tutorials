import { useState, useEffect } from 'react';
import LoginUser from './components/accounts/LoginUser';
import Navbar from './components/appHeader/Navbar';
import Home from './components/home/Home';
import AuthContext from './components/store/auth-context';
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
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: onLogoutHandler,
      }}
    >
      <Navbar />
      <main>
        <section className='container'>
          <h2 className='title'>React Context API</h2>
          {!isLoggedIn && <LoginUser onLogin={onLoginHandler} />}
          {isLoggedIn && <Home onLogout={onLogoutHandler} />}
        </section>
      </main>
    </AuthContext.Provider>
  );
};

export default App;
