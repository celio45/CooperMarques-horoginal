import React from 'react';
import ReactDOM from 'react-dom/client';
import globalStyles from './styles/globalStyles';

import { login } from './containers/login';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <login/>
  <globalStyles/>
  </React.StrictMode>,
);