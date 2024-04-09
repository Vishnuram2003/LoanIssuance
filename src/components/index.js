import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Vehicle from './Vehicle';
import Personal from './Personal';
import Gold from './Gold';
import HomePage from './HomePage';
import Agri from './Agri';
import Home from './Home';
import Edu from './Edu';
import RegistrationForm from './RegistrationForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
