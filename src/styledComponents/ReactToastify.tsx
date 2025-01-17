import React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { alertTimeout } from '../config';

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
