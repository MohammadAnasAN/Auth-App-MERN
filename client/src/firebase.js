// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-85bcd.firebaseapp.com",
  projectId: "mern-auth-85bcd",
  storageBucket: "mern-auth-85bcd.appspot.com",
  messagingSenderId: "1022610313713",
  appId: "1:1022610313713:web:5cfb806702411691b67450"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
