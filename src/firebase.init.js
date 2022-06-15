// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk0KzORi06jWk21lcO2kNieYG-so2z4LM",
  authDomain: "genius-car-b2f34.firebaseapp.com",
  projectId: "genius-car-b2f34",
  storageBucket: "genius-car-b2f34.appspot.com",
  messagingSenderId: "407280790267",
  appId: "1:407280790267:web:9740ba3d351453aa341e5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
