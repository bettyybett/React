import * as firebase from "firebase";
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB8SxtSMSIAZCxMNyC0P5W2iKZ3IdRgCxU",
    authDomain: "frontendav.firebaseapp.com",
    projectId: "frontendav",
    storageBucket: "frontendav.appspot.com",
    messagingSenderId: "421731455283",
    appId: "1:421731455283:web:121048c55145bbea152e46",
    measurementId: "G-WY8RY13WZG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const auth =  firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();