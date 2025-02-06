// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANxz8WBqptSITooMqQcQZQKulBRRIOIfI",
  authDomain: "magnathon-f4e37.firebaseapp.com",
  projectId: "magnathon-f4e37",
  storageBucket: "magnathon-f4e37.appspot.com",
  messagingSenderId: "207520828809",
  appId: "1:207520828809:web:4da3391bec9b51f7bea558",
  measurementId: "G-6EQ5NKGKY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app }; 