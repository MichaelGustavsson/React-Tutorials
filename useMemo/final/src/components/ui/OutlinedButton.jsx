import React from 'react';

import classes from './OutlinedButton.module.css';

const OutlinedButton = (props) => {
  console.log('OutlinedButton Running');
  return (
    <button
      className={classes['button']}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default React.memo(OutlinedButton);
