import { useContext } from 'react';
import AuthContext from '../store/auth-context';

import Card from '../ui/Card';
import OutlinedButton from '../ui/OutlinedButton';

import classes from './Home.module.css';

const Home = () => {
  const context = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Här hanterar du bilar</h1>
      <OutlinedButton onClick={context.onLogout}>Logout</OutlinedButton>
    </Card>
  );
};

export default Home;
