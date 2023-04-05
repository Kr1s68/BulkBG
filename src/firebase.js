import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC0sw9vY6Rz5JT-Ge8iOgdPb6F_Q4YoJgs",
  authDomain: "bulkbg-e313c.firebaseapp.com",
  projectId: "bulkbg-e313c",
  storageBucket: "bulkbg-e313c.appspot.com",
  messagingSenderId: "568598014179",
  appId: "1:568598014179:web:b9f244b75b4c20221ebdd6",
  measurementId: "G-QXPELVHHVT",
});

export const firestore = getFirestore(app);
export const auth = firebase.auth(app);
export default app;
