import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyRcEbFNQoXlvozRMzHpC3ChXrvKdnoFM",
  authDomain: "test01-b16a0.firebaseapp.com",
  projectId: "test01-b16a0",
  storageBucket: "test01-b16a0.appspot.com",
  messagingSenderId: "952059312141",
  appId: "1:952059312141:web:6c3e378cbf2c80e31dbd44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth , provider};
