import { useState } from 'react';
import Modal from './components/ui/Modal';
import OutlinedButton from './components/ui/OutlinedButton';
import './site.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const onShowModalHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  return (
    <main>
      {showModal && (
        <Modal
          title='Demo modal'
          message='Detta är ett meddelande.'
          onClick={() => setShowModal(false)}
        />
      )}
      <section className='container'>
        <h2 className='title'>The Power of Portals</h2>
        <OutlinedButton onClick={onShowModalHandler}>Show modal</OutlinedButton>
      </section>
    </main>
  );
};

export default App;
