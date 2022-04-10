// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-3SM9ZbOWALWC1AJ17EO7YZjNEJblgB8",
  authDomain: "genius-car-services-e4c8e.firebaseapp.com",
  projectId: "genius-car-services-e4c8e",
  storageBucket: "genius-car-services-e4c8e.appspot.com",
  messagingSenderId: "491280466241",
  appId: "1:491280466241:web:9c824a14c726028473e1c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;