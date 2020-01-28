import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD458csGWdx-GhemlHeWel95tf1Vfjb6po",
  authDomain: "cart-4bcee.firebaseapp.com",
  databaseURL: "https://cart-4bcee.firebaseio.com",
  projectId: "cart-4bcee",
  storageBucket: "cart-4bcee.appspot.com",
  messagingSenderId: "593441985040",
  appId: "1:593441985040:web:1bc8e9d2207e246befb095"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
