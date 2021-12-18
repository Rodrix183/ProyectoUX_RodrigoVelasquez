import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'

import 'firebase/firestore';
import 'firebase/auth';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyArs3q-zCvQBcs2q2qSXrFjbr6PHTsUOso",
  authDomain: "apuntesapp-c6bae.firebaseapp.com",
  projectId: "apuntesapp-c6bae",
  storageBucket: "apuntesapp-c6bae.appspot.com",
  messagingSenderId: "310641084514",
  appId: "1:310641084514:web:2ed1386d753b0a2caa693b",
  measurementId: "G-78M5XN7Q2K"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
