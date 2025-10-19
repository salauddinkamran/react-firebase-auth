// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW1ez5t0ciokGtFXZLjFvQtpaJabEq_9Q",
  authDomain: "react-firebase-auth-eb73f.firebaseapp.com",
  projectId: "react-firebase-auth-eb73f",
  storageBucket: "react-firebase-auth-eb73f.firebasestorage.app",
  messagingSenderId: "75072945289",
  appId: "1:75072945289:web:f9838e1cd51f5a40a91a58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);