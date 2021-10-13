import { initializeApp } from "firebase/app";
import { getFirestore,doc } from "@firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyBm4NhK8Bujqe1QsRbTAUgBvtu0ucksAVE",
  authDomain: "fir-cart-3a52d.firebaseapp.com",
  projectId: "fir-cart-3a52d",
  storageBucket: "fir-cart-3a52d.appspot.com",
  messagingSenderId: "75430461284",
  appId: "1:75430461284:web:bdd8cedb589bedbdd60471",
  measurementId: "G-Z613QSQ4EN"
});

export const firestore=getFirestore(app);
 