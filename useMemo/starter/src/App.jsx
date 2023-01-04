import React, { useState, useCallback, useMemo } from 'react';

import OutlinedButton from './components/ui/OutlinedButton';
import VehicleList from './components/Vehicles/VehicleList';
import './site.css';

const App = () => {
  const [message, setMessage] = useState(false);

  console.log('App Running!');

  const onUpdateListHandler = useCallback(() => {
    setMessage('My new List');
  }, []);

  return (
    <section className='container'>
      <h1 className='title'>Optimization using useMemo()</h1>
      <br />
      <OutlinedButton onClick={onUpdateListHandler}>
        Display Vehicles
      </OutlinedButton>
      <br />
      <VehicleList
        message={message}
        vehicleIds={[5, 9, 1, 7, 3]}
      />
    </section>
  );
};

export default App;
