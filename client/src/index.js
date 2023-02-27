import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { cookiesProvider} from 'react-cookie'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <cookiesProvider/>
  </React.StrictMode>
);


