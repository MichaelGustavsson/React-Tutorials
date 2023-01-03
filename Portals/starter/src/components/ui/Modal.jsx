import ReactDOM from 'react-dom';
import Card from './Card';

import classes from './Modal.module.css';
import OutlinedButton from './OutlinedButton';

const Overlay = () => {
  return <div className={classes.overlay} />;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Overlay />,
        document.querySelector('#overlay-root'),
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.querySelector('#modal-root'),
      )}
    </div>
  );
};

export default Modal;
