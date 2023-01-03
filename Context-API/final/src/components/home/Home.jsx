import Card from '../ui/Card';
import OutlinedButton from '../ui/OutlinedButton';

import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Här hanterar du bilar</h1>
      <OutlinedButton onClick={props.onLogout}>Logout</OutlinedButton>
    </Card>
  );
};

export default Home;
