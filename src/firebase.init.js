// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9bkv8-cairBZDUMGX_E4jMl-MQfpBeTc",
  authDomain: "dr-moniruzzaman-6f09e.firebaseapp.com",
  projectId: "dr-moniruzzaman-6f09e",
  storageBucket: "dr-moniruzzaman-6f09e.appspot.com",
  messagingSenderId: "171100431018",
  appId: "1:171100431018:web:f229fd98e019674c5da6d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
