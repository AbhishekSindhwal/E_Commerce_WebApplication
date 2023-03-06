// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/auth';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_fnh_mT9IpV2GvWMV0C1qn7-5id62V-Y",
  authDomain: "e-commerce-web-applicati-a84d2.firebaseapp.com",
  projectId: "e-commerce-web-applicati-a84d2",
  storageBucket: "e-commerce-web-applicati-a84d2.appspot.com",
  messagingSenderId: "112291939684",
  appId: "1:112291939684:web:e4b8bb34b82ed8005d2671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;