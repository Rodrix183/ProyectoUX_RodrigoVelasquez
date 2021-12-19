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
  apiKey: "AIzaSyDnbwvDgsh35NE_hUX4Jxv87O4Jp7Ml0rg",
  authDomain: "proyecto-ux-rodrigo-velasquez.firebaseapp.com",
  projectId: "proyecto-ux-rodrigo-velasquez",
  storageBucket: "proyecto-ux-rodrigo-velasquez.appspot.com ",
  messagingSenderId: "630767055570",
  appId: "1:630767055570:web:9a76e8d434c28b89f5730b",
  measurementId: "G-1FE79R2YK6"
  //databaseURL: "https://proyecto-ux-rodrigo-velasquez-default-rtdb.firebaseio.com",
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);