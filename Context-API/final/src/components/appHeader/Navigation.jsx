import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href='/'>Nya bilar</a>
        </li>
        <li>
          <a href='/'>Sålda bilar</a>
        </li>
        <li>{props.isLoggedIn && <span>{props.userName}</span>}</li>
        {props.isLoggedIn && (
          <li>
            <button onClick={props.logOut}>Logga ut</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
