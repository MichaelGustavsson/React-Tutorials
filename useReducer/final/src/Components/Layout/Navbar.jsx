import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../auth_context';
import OutlinedButton from '../UI/OutlinedButton';

const Navbar = () => {
  const context = useContext(AuthContext);

  return (
    <nav className='navbar'>
      <h1 className='logo'>Westcoast Cars</h1>
      <ul>
        <li>
          <Link to='/'>Vehicles</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/adduser'>Add users</Link>
        </li>
        {!context.isLoggedIn && (
          <li>
            <Link to='/login'>Log In</Link>
          </li>
        )}
      </ul>
      {context.isLoggedIn && (
        <OutlinedButton onClick={context.onLogout}>Log out</OutlinedButton>
      )}
    </nav>
  );
};
export default Navbar;
