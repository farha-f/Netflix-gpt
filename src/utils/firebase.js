// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ7zgmNiY3rhb9Gl0sRZNKUZUPp2d5Mpw",
  authDomain: "netflixgpt-9788d.firebaseapp.com",
  projectId: "netflixgpt-9788d",
  storageBucket: "netflixgpt-9788d.appspot.com",
  messagingSenderId: "907591869402",
  appId: "1:907591869402:web:63f0502edd48c438c696e3",
  measurementId: "G-5Y3EMZNYHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();