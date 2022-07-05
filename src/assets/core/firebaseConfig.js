import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyAFADi870_43M_AzWyXC3WHAGGSBS6VEN4",
    authDomain: "webstore-17ae9.firebaseapp.com",
    projectId: "webstore-17ae9",
    storageBucket: "webstore-17ae9.appspot.com",
    messagingSenderId: "572876815854",
    appId: "1:572876815854:web:ab03ef51d7819bd388e2ff",
    measurementId: "G-R3M012JYE3"
  };

const myApp = firebase.initializeApp(firebaseConfig);

export default myApp;