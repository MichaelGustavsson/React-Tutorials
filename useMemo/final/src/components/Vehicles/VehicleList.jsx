import React, { useMemo } from 'react';
import Vehicle from './Vehicle';

const VehicleList = ({ vehicleIds, message }) => {
  const sortedList = useMemo(() => {
    console.log('VehicleIds sorted');
    return vehicleIds.sort((a, b) => a - b);
  }, [vehicleIds]);

  console.log('Vehicles is running!');

  return (
    <div>
      <h1 className='title'>Sorted List</h1>
      <h2>{message}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Vehicle />
    </div>
  );
};

export default React.memo(VehicleList);
