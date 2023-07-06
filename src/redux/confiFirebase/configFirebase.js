// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

import "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXTirbk3uAFmQ-BRHq-6OhXVBjaeXtj0I",
  authDomain: "live-3ffed.firebaseapp.com",
  projectId: "live-3ffed",
  storageBucket: "live-3ffed.appspot.com",
  messagingSenderId: "256154019801",
  appId: "1:256154019801:web:6c15cf0d1a1e25f94a1bc8",
  measurementId: "G-ZLHK678TJV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const dataBase = getFirestore(app);
const functions = getFunctions(app);

export { auth, dataBase, functions };
