import { useContext, Fragment } from 'react';
import LoginUser from './components/accounts/LoginUser';
import Navbar from './components/appHeader/Navbar';
import Home from './components/home/Home';
import AuthContext from './components/store/auth-context';
import './site.css';

const App = () => {
  const context = useContext(AuthContext);

  return (
    <Fragment>
      <Navbar />
      <main>
        <section className='container'>
          <h2 className='title'>React Context API</h2>
          {!context.isLoggedIn && <LoginUser />}
          {context.isLoggedIn && <Home />}
        </section>
      </main>
    </Fragment>
  );
};

export default App;
