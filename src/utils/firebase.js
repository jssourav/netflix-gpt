// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdcvFycHnaGKGRGArzTZn3F33AjsFmVGk",
  authDomain: "netflixgpt-94792.firebaseapp.com",
  projectId: "netflixgpt-94792",
  storageBucket: "netflixgpt-94792.appspot.com",
  messagingSenderId: "1030401772588",
  appId: "1:1030401772588:web:eac6c64a22f12f01651589",
  measurementId: "G-3W43V0SW92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
