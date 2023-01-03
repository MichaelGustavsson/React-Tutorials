import classes from './Navbar.module.css';
import Navigation from './Navigation';

const Navbar = () => {
  return (
    <header className={classes['main-header']}>
      <h1>Min sida</h1>
      <Navigation />
    </header>
  );
};

export default Navbar;
