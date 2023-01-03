import classes from './Navbar.module.css';
import Navigation from './Navigation';

const Navbar = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>Min sida</h1>
      <Navigation
        isLoggedIn={props.isLoggedIn}
        logOut={props.logOut}
        userName={props.userName}
      />
    </header>
  );
};

export default Navbar;
