// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpbYlCQOcExNTTf50Q6W77OcJ9s7jL_Og",
  authDomain: "react-firebase-chat-app-679ed.firebaseapp.com",
  projectId: "react-firebase-chat-app-679ed",
  storageBucket: "react-firebase-chat-app-679ed.appspot.com",
  messagingSenderId: "1018931245119",
  appId: "1:1018931245119:web:87be076ab4510400f1c88a",
  measurementId: "G-CYWF8MBXLB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
