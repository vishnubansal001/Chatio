import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBrSMnXZH4sjxkjpipcxThuicrwsOkZ6Qg",
  authDomain: "chatio-51413.firebaseapp.com",
  projectId: "chatio-51413",
  storageBucket: "chatio-51413.appspot.com",
  messagingSenderId: "993418218264",
  appId: "1:993418218264:web:a2d17c1086923ad1ae2c6d"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);