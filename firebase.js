import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_MKEZ1MMQ0RSudyZziVPnyjopI9kWAtI",
  authDomain: "part-time-jobs-a1703.firebaseapp.com",
  projectId: "part-time-jobs-a1703",
  storageBucket: "part-time-jobs-a1703.appspot.com",
  messagingSenderId: "535797927494",
  appId: "1:535797927494:web:65c769052f9dfd44d30447",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
