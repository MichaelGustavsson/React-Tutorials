import Card from '../ui/Card';

const VehicleItem = ({ make, model, modelYear, mileage }) => {
  return (
    <Card>
      <div className='vehicle-item-container'>
        <div className='items'>
          <div>
            {make} {model}
          </div>
          <div>{modelYear}</div>
          <div>{mileage} Km</div>
        </div>
        <div>
          <button className='btn btn-outline'>Se mer...</button>
        </div>
      </div>
    </Card>
  );
};

export default VehicleItem;
