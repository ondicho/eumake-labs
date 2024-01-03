// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BackgroundColorProvider } from './components/layouts/BackgroundColorContext';

ReactDOM.render(
  <React.StrictMode>
    <BackgroundColorProvider>
      <App />
    </BackgroundColorProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
