import { useRef } from 'react';
import Card from '../ui/Card';
const AddVehicleForm = () => {
  const regNoInputRef = useRef();
  const makeInputRef = useRef();
  const modelInputRef = useRef();
  const modelYearInputRef = useRef();
  const mileageInputRef = useRef();

  const clearForm = () => {
    regNoInputRef.current.value = '';
    makeInputRef.current.value = '';
    modelInputRef.current.value = '';
    modelYearInputRef.current.value = '';
    mileageInputRef.current.value = '';
  };

  const onSubmitHandler = (e) => {
    console.log(regNoInputRef);
    const regNo = regNoInputRef.current.value;
    const make = makeInputRef.current.value;
    const model = modelInputRef.current.value;
    const modelYear = modelYearInputRef.current.value;
    const mileage = mileageInputRef.current.value;

    e.preventDefault();
    const vehicle = {
      regNo,
      make,
      model,
      modelYear,
      mileage,
    };

    console.log(vehicle);
    clearForm();
  };

  const onCancelClickedHandler = (e) => {
    e.preventDefault();
    clearForm();
  };

  return (
    <Card>
      <h1 className='title'>Lägg till ny bil</h1>
      <form
        onSubmit={onSubmitHandler}
        className='form'
      >
        <div className='form-control'>
          <label htmlFor='regNo'>Registreringsnummer</label>
          <input
            type='text'
            name='regNo'
            id='regNo'
            ref={regNoInputRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='make'>Märke</label>
          <input
            type='text'
            name='make'
            id='make'
            ref={makeInputRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='model'>Modell</label>
          <input
            type='text'
            name='model'
            id='model'
            ref={modelInputRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='modelYear'>Årsmodell</label>
          <input
            type='text'
            name='modelYear'
            id='modelYear'
            ref={modelYearInputRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='mileage'>Antal körda km</label>
          <input
            type='text'
            name='mileage'
            id='mileage'
            ref={mileageInputRef}
          />
        </div>
        <div className='buttons-container'>
          <button className='btn btn-outline'>Spara</button>
          <button
            onClick={onCancelClickedHandler}
            className='btn btn-outline'
          >
            Avbryt
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AddVehicleForm;
