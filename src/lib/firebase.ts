import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA6CXsk31fTneqENMUxrcQWwpoMmBfKQdY",
  authDomain: "ksvk-c1a90.firebaseapp.com",
  databaseURL: "https://ksvk-c1a90-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ksvk-c1a90",
  storageBucket: "ksvk-c1a90.firebasestorage.app",
  messagingSenderId: "1001035597377",
  appId: "1:1001035597377:web:e0c0f5d915036b131968c0",
  measurementId: "G-66YYHFRBS0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
