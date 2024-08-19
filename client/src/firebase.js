// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-32a37.firebaseapp.com",
  projectId: "real-estate-32a37",
  storageBucket: "real-estate-32a37.appspot.com",
  messagingSenderId: "308445549623",
  appId: "1:308445549623:web:bc9f738ee2c577b3d9dbb2"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);