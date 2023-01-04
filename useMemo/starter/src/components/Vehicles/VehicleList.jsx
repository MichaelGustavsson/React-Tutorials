import React from 'react';

const VehicleList = ({ vehicleIds, message }) => {
  const sortedList = vehicleIds.sort((a, b) => a - b);

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
    </div>
  );
};

export default React.memo(VehicleList);
