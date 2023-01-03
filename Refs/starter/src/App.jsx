import { Fragment } from 'react';
import NavHeader from './components/navigation/NavHeader';
import Home from './components/home/Home';

import './site.css';

const App = () => {
  return (
    <Fragment>
      <NavHeader />
      <main>
        <Home />
      </main>
    </Fragment>
  );
};

export default App;
