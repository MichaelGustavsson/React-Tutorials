import classes from './OutlinedButton.module.css';

const OutlinedButton = (props) => {
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

export default OutlinedButton;
