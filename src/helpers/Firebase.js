import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB6I2rY4S2xMihfSXuTmahwu6yLZqo1WJE",
  authDomain: "moku-62081.firebaseapp.com",
  databaseURL: "https://moku-62081.firebaseio.com",
  projectId: "moku-62081",
  storageBucket: "moku-62081.appspot.com",
  messagingSenderId: "860249568590"
};;

firebase.initializeApp(firebaseConfig);

export default firebase;