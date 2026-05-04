import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGrepSBkAC0LDogE0fBggJwZH3LP_SrIs",
  authDomain: "jbmrgreentest-trophy.firebaseapp.com",
  projectId: "jbmrgreentest-trophy",
  storageBucket: "jbmrgreentest-trophy.firebasestorage.app",
  messagingSenderId: "677749789314",
  appId: "1:677749789314:web:6e88f31ad1a55a4d631a9b",
  measurementId: "G-FVM4924C14"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
