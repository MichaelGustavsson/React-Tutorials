import { Fragment } from 'react';
import { vehicles } from '../../data/vehicles';
import VehicleItem from './VehicleItem';

const VehicleList = () => {
  return (
    <Fragment>
      <h1 className='title'>Våra bilar</h1>
      <section className='container'>
        {vehicles.map((vehicle) => (
          <VehicleItem
            key={vehicle.vehicleId}
            make={vehicle.manufacturor}
            model={vehicle.model}
            modelYear={vehicle.modelYear}
            mileage={vehicle.mileage}
          />
        ))}
      </section>
    </Fragment>
  );
};

export default VehicleList;
