// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-b8891.firebaseapp.com",
  projectId: "blog-b8891",
  storageBucket: "blog-b8891.appspot.com",
  messagingSenderId: "107665499362",
  appId: "1:107665499362:web:85164b2870b83661bdaabb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
