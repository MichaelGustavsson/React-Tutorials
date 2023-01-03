import { useContext } from 'react';
import AuthContext from '../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {
  const context = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href='/'>Nya bilar</a>
        </li>
        <li>
          <a href='/'>Sålda bilar</a>
        </li>
        <li>{context.isLoggedIn && <span>{context.userName}</span>}</li>
        {context.isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>Logga ut</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
