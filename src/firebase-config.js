import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBhyV3ZbNI8077pMuZVEdYbukpYJB4C9HY",
    authDomain: "fir-d380d.firebaseapp.com",
    projectId: "fir-d380d",
    storageBucket: "fir-d380d.appspot.com",
    messagingSenderId: "1074729163871",
    appId: "1:1074729163871:web:8cf0b86cf6eb67e63ccfea",
    measurementId: "G-CX727X6QGQ"
  };


  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);