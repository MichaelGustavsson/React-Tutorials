import { useContext } from 'react';
import AuthContext from '../store/auth-context';
import classes from './Navbar.module.css';
import Navigation from './Navigation';

const Navbar = () => {
  const context = useContext(AuthContext);
  return (
    <header className={classes['main-header']}>
      <h1>Min sida</h1>
      <Navigation
        isLoggedIn={context.isLoggedIn}
        // logOut={props.logOut}
        // userName={props.userName}
      />
    </header>
  );
};

export default Navbar;
