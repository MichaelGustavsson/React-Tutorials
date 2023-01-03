import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AuthContextProvider } from './components/store/auth-context';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
);
