// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3n0uPuKTfVHHU2fksDmq4hQtJCznhuLM",
  authDomain: "ecommerce-eee5f.firebaseapp.com",
  projectId: "ecommerce-eee5f",
  storageBucket: "ecommerce-eee5f.appspot.com",
  messagingSenderId: "673980006591",
  appId: "1:673980006591:web:8b94cb82b0764ad42a460a",
  measurementId: "G-2S3HPFS3VP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;