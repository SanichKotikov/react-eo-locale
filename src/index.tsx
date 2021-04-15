import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {LocalesProvider} from './locales/provider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <LocalesProvider>
      <App />
    </LocalesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
