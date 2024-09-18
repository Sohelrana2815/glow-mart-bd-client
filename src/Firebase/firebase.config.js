import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClcses7-OGuKgMfX7RSM74LLSeFPPntfI",
  authDomain: "glow-mart-bd.firebaseapp.com",
  projectId: "glow-mart-bd",
  storageBucket: "glow-mart-bd.appspot.com",
  messagingSenderId: "502361766089",
  appId: "1:502361766089:web:c197d82ded1d42dd787518",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
