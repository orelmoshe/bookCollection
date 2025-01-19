import React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const alertTimeout = 5000;

const ReactToastify: React.FC = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={alertTimeout}
      newestOnTop={true}
      draggable
      pauseOnFocusLoss
      pauseOnHover
      theme="colored"
      transition={Bounce}
      style={{ width: 'fit-content' }}
    />
  );
};

export default ReactToastify;
