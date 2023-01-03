import { useState } from 'react';
import Card from '../ui/Card';
const AddVehicleForm = () => {
  const [regNo, setRegNo] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [modelYear, setModelYear] = useState('');
  const [mileage, setMileage] = useState('');

  const onRegNoChangedHandler = (e) => {
    setRegNo(e.target.value);
  };
  const onMakeChangedHandler = (e) => {
    setMake(e.target.value);
  };
  const onModelChangedHandler = (e) => {
    setModel(e.target.value);
  };
  const onModelYearChangedHandler = (e) => {
    setModelYear(e.target.value);
  };
  const onMileageChangedHandler = (e) => {
    setMileage(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const vehicle = {
      regNo,
      make,
      model,
      modelYear,
      mileage,
    };

    console.log(vehicle);
  };

  const onCancelClickedHandler = (e) => {
    e.preventDefault();
    console.log('Avbryter');
    setRegNo('');
    setMake('');
    setModel('');
    setModelYear('');
    setMileage('');
  };

  return (
    <Card>
      <h1 className='title'>Lägg till ny bil</h1>
      <form onSubmit={onSubmitHandler} className='form'>
        <div className='form-control'>
          <label htmlFor='regNo'>Registreringsnummer</label>
          <input
            type='text'
            name='regNo'
            id='regNo'
            value={regNo}
            onChange={onRegNoChangedHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='make'>Märke</label>
          <input
            type='text'
            name='make'
            id='make'
            value={make}
            onChange={onMakeChangedHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='model'>Modell</label>
          <input
            type='text'
            name='model'
            id='model'
            value={model}
            onChange={onModelChangedHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='modelYear'>Årsmodell</label>
          <input
            type='text'
            name='modelYear'
            id='modelYear'
            value={modelYear}
            onChange={onModelYearChangedHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='mileage'>Antal körda km</label>
          <input
            type='text'
            name='mileage'
            id='mileage'
            value={mileage}
            onChange={onMileageChangedHandler}
          />
        </div>
        <div className='buttons-container'>
          <button className='btn btn-outline'>Spara</button>
          <button onClick={onCancelClickedHandler} className='btn btn-outline'>
            Avbryt
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AddVehicleForm;
