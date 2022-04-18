// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvQi7buYeu69K65lo1iEHSKCYMw8PRjfc",
  authDomain: "photographer-7f389.firebaseapp.com",
  projectId: "photographer-7f389",
  storageBucket: "photographer-7f389.appspot.com",
  messagingSenderId: "244848633851",
  appId: "1:244848633851:web:ec42d88a60284f178ccd5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;
