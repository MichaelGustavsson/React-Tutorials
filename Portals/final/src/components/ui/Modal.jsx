import Card from './Card';

import classes from './Modal.module.css';
import OutlinedButton from './OutlinedButton';

const Modal = (props) => {
  return (
    <div>
      <div className={classes.overlay} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h4>{props.title}</h4>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <OutlinedButton onClick={props.onClick}>Stäng</OutlinedButton>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
