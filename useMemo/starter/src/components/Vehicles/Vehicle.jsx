import React from 'react';

const Vehicle = (props) => {
  console.log('Running Vehicle Component');
  return <h4>{props.display ? 'My great car' : ''}</h4>;
};

export default React.memo(Vehicle);

// props.display === props.previous.display...
