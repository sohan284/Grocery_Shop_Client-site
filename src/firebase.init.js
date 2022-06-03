// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0ksrk0HSED7u-3KXSXEOmNn1OpxBvgfc",
  authDomain: "grocery-shop-c9e00.firebaseapp.com",
  projectId: "grocery-shop-c9e00",
  storageBucket: "grocery-shop-c9e00.appspot.com",
  messagingSenderId: "378679864583",
  appId: "1:378679864583:web:3f86abbf81cfac90a7a9a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;