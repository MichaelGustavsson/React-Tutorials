import { useEffect, useState, useContext } from 'react';

import AuthContext from '../auth_context';
import Modal from '../UI/Modal';

import OutlinedButton from '../UI/OutlinedButton';
import AddVehicle from './AddVehicle';
const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const context = useContext(AuthContext);

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = () => {
    fetch('http://localhost:3010/vehicles')
      .then((response) => response.json())
      .then((data) => setVehicles(data));
  };

  const ShowAddVehicleHandler = () => {
    setShowModal(true);
  };

  const onSaveHandler = async (vehicle) => {
    console.log(vehicle);

    const result = await fetch('http://localhost:3010/vehicles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vehicle),
    });

    if (result.status === 201) {
      loadVehicles();
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal && (
        <Modal title='Add new vehicle'>
          <AddVehicle onSave={onSaveHandler} />
        </Modal>
      )}
      <section
        data-testid='vehicle-list-component'
        className='container'
      >
        <h1 className='page-title'>Vehicles in storage</h1>
        {context.isLoggedIn && (
          <OutlinedButton onClick={ShowAddVehicleHandler}>
            Add Vehicle
          </OutlinedButton>
        )}
        <br />
        <ul>
          {vehicles.map((vehicle) => (
            <li key={vehicle.id}>
              {vehicle.manufacturer} - {vehicle.model}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default VehicleList;
