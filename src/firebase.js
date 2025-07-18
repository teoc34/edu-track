// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXcGZaWOIz0sbM5JUgaQyxO8_J7zxQuB8",
  authDomain: "edutrack-aba1d.firebaseapp.com",
  projectId: "edutrack-aba1d",
  storageBucket: "edutrack-aba1d.appspot.com",
  messagingSenderId: "NUMAR",
  appId: "APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init Auth & Firestore
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

// Exportă tot
export { auth, googleProvider, db };
