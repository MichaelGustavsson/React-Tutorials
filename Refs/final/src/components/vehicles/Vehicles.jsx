import VehicleItem from './VehicleItem';

const Vehicles = ({ displayAllVehicles }) => {
  return (
    <section className='container'>
      <h1 className='title'>Nya bilar i lager</h1>
      <VehicleItem make='Volvo' model='V60' modelYear='2019' mileage='7800' />
      <VehicleItem make='Ford' model='MACH-E' modelYear='2022' mileage='800' />
      <VehicleItem make='Volvo' model='XC60' modelYear='2017' mileage='12500' />
      <button onClick={displayAllVehicles} className='btn btn-outline'>
        Visa alla
      </button>
    </section>
  );
};

export default Vehicles;
