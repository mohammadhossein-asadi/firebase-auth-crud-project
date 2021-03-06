import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "fir-project-5f0ac.firebaseapp.com",
  projectId: "fir-project-5f0ac",
  storageBucket: "fir-project-5f0ac.appspot.com",
  messagingSenderId: "184978544281",
  appId: "1:184978544281:web:058995e6cedeea58090a08",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app)