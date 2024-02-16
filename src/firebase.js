// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBvyWCmwZP8wios7P_pzHyCQVauLfAtx-8',
  authDomain: 'my-project-1677223963729.firebaseapp.com',
  projectId: 'my-project-1677223963729',
  storageBucket: 'my-project-1677223963729.appspot.com',
  messagingSenderId: '314726989924',
  appId: '1:314726989924:web:69c58f9070a9fd1238df71',
  measurementId: 'G-304X6V4KDG',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider(); // Add this line

export { auth, db, googleProvider }; // Include googleProvider in the export

