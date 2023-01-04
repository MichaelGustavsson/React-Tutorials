import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddVehicle = (props) => {
  const regNoInputRef = useRef();
  const manufacturerInputRef = useRef();
  const modelInputRef = useRef();
  const modelYearInputRef = useRef();
  const mileageInputRef = useRef();

  const onSaveHandler = (e) => {
    e.preventDefault();

    // We should do validation here before we save the vehicle...

    const vehicle = {
      id: uuidv4(),
      registrationNumber: regNoInputRef.current.value,
      manufacturer: manufacturerInputRef.current.value,
      model: modelInputRef.current.value,
      modelYear: modelYearInputRef.current.value,
      mileage: mileageInputRef.current.value,
    };
    props.onSave(vehicle);
  };

  return (
    <form onSubmit={onSaveHandler}>
      <div className='form-control'>
        <label htmlFor='registrationNo'>Registration number</label>
        <input
          id='registrationNo'
          placeholder='registrationnumber'
          ref={regNoInputRef}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='make'>Manufacturer</label>
        <input
          id='make'
          placeholder='manufacturer'
          ref={manufacturerInputRef}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='model'>Model</label>
        <input
          id='model'
          placeholder='model'
          ref={modelInputRef}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='modelYear'>Model Year</label>
        <input
          id='modelYear'
          placeholder='model Year'
          ref={modelYearInputRef}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='mileage'>Mileage</label>
        <input
          id='mileage'
          placeholder='mileage'
          ref={mileageInputRef}
        />
      </div>
      <div className='form-control'>
        <button className='btn btn-primary'>Save Vehicle</button>
      </div>
    </form>
  );
};

export default AddVehicle;
