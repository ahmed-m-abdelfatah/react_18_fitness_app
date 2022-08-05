import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.js';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter basename='/react_18_fitness_app'>
    <App />
  </BrowserRouter>,
);
