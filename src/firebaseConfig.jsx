// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1pqFRrl_c6dkc-Mx5TP36ov4jM-voFD8",
  authDomain: "my-school-5f77a.firebaseapp.com",
  projectId: "my-school-5f77a",
  storageBucket: "my-school-5f77a.appspot.com",
  messagingSenderId: "51115996844",
  appId: "1:51115996844:web:3c0e49ac074c73a9e35109"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app
