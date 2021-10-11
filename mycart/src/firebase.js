import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAkip2M4yiC1bAL-uMnw4TdFnepd65P0Dw",
    authDomain: "fir-cart-18674.firebaseapp.com",
    projectId: "fir-cart-18674",
    storageBucket: "fir-cart-18674.appspot.com",
    messagingSenderId: "674648867074",
    appId: "1:674648867074:web:9963f04392ee1effd4021b",
    measurementId: "G-LJ0HVC5R5M"
  };

  var app = firebase.intializeApp(firebaseConfig);

  export default app;