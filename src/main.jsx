// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BackgroundColorProvider } from './components/layouts/BackgroundColorContext';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';

const TRACKING_ID = "G-9JJ1H1TPM8"; // OUR_TRACKING_ID
const ga4 = ReactGA.default || ReactGA;
ga4.initialize(TRACKING_ID);


ReactDOM.render(
  <React.StrictMode>
    <BackgroundColorProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BackgroundColorProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
